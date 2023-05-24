import { addDoc, collection, query,orderBy, onSnapshot, Timestamp } from 'firebase/firestore'
import 'firebase/firestore'
import { db } from "../firebase/index"
    
    export const sendMessage = async(user, newMessage)=>{
        
        const messageInfo={
            'userID': user.value.uid,
            'displayName': user.value.displayName,
            'text': newMessage.value,
            'createdAt': Timestamp.fromDate(new Date(Date.now())),
        }
        await addDoc(collection(db,'messages'),messageInfo)
        newMessage.value=''
    }

    export const getMessages = (messages) => {
        const messagesQuery = query(collection(db, 'messages'), orderBy('createdAt'))
            const unsubscribe = onSnapshot(messagesQuery, snapshot =>{
                messages.value = snapshot.docs.map( doc => ({
                    id: doc.id,
                    ...doc.data(),
                    createdAt: formatTimestamp(doc.data().createdAt),
                }))
            })
    }
    const formatTimestamp = (timestamp) => {
        const date = new Date(timestamp.seconds * 1000).toLocaleString() 
        return date
    }