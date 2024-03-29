import { addDoc, collection, query, where, orderBy, getDocs, onSnapshot, Timestamp } from 'firebase/firestore'
import { db, storage } from '../firebase/index'
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { readAndCompressImage } from 'browser-image-resizer';

const imageConfig = {
  quality: 0.7,
  maxWidth: 600,
  maxHeight: 600,
  autoRotate: true
};

export const sendMessage = async (user, imageFile, newMessage, roomId) => {
  try {
    let imageURL = null;
    if (imageFile.value) {
      const resizedImage = await readAndCompressImage(imageFile.value, imageConfig);
      const storageRef = ref(storage, `images/${Date.now()}_${imageFile.value.name}`);
      await uploadBytes(storageRef, resizedImage);
      imageURL = await getDownloadURL(storageRef);
    }
    const messageInfo = {
      senderId: user.value.uid,
      imageURL: imageURL, //link to firebase storage
      text: newMessage.value,
      createdAt: Timestamp.fromDate(new Date(Date.now())),
      roomId: roomId,
    }
    await addDoc(collection(db, 'messages'), messageInfo)
    newMessage.value = ''
  } catch (error) {
    throw new Error(error)
  }
}

export const getMessages = async (messages, roomId) => {
  try {
    const messagesQueryOrder = query(collection(db, 'messages'), orderBy('createdAt'))

    const messagesQuery = query(messagesQueryOrder, where('roomId', '==', roomId))

    const querySnapshot1 = await getDocs(messagesQuery)

    const combinedDocs = [...querySnapshot1.docs]

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
        return message.roomId == roomId
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
