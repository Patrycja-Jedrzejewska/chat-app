import { addDoc, collection, query, where, orderBy, getDocs, onSnapshot, Timestamp } from 'firebase/firestore'
import { db } from '../firebase/index'

export const sendMessage = async (user, newMessage, contactId) => {
  try {
    const messageInfo = {
      senderId: user.value.uid,
      receiverId: contactId,
      text: newMessage.value,
      createdAt: Timestamp.fromDate(new Date(Date.now())),
    }
    await addDoc(collection(db, 'messages'), messageInfo)
    newMessage.value = ''
  } catch (error) {
    throw new Error(error)
  }
}

export const getMessages = async (user, messages, contactId) => {
  try {
    const messagesQuery = query(collection(db, 'messages'), orderBy('createdAt'))

    const messagesQuery1 = query(messagesQuery, where('receiverId', '==', contactId), where('senderId', '==', user.uid))

    const messagesQuery2 = query(messagesQuery, where('receiverId', '==', user.uid), where('senderId', '==', contactId))

    const querySnapshot1 = await getDocs(messagesQuery1)
    const querySnapshot2 = await getDocs(messagesQuery2)

    const combinedDocs = [...querySnapshot1.docs, ...querySnapshot2.docs]

    const uniqueDocs = combinedDocs.filter((doc, index, self) => {
      return self.findIndex((d) => d.id === doc.id) === index
    })

    uniqueDocs.sort((a, b) => {
      return a.data().createdAt - b.data().createdAt
    })

    messages.value = uniqueDocs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
      createdAt: formatTimestamp(doc.data().createdAt),
    }))

    const unsubscribe = onSnapshot(messagesQuery, (snapshot) => {
      const updatedMessages = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
        createdAt: formatTimestamp(doc.data().createdAt),
      }))

      const filteredMessages = updatedMessages.filter((message) => {
        return (
          (message.senderId === user.uid && message.receiverId === contactId) ||
          (message.senderId === contactId && message.receiverId === user.uid)
        )
      })

      filteredMessages.forEach((message) => {
        const existingMessage = messages.value.find((m) => m.id === message.id)
        if (existingMessage) return
        messages.value.push(message)
      })
    })
    return unsubscribe
  } catch (error) {
    throw new Error(error)
  }
}

const formatTimestamp = (timestamp) => {
  const date = new Date(timestamp.seconds * 1000).toLocaleString()
  return date
}
