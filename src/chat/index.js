import { addDoc, collection, query,orderBy, onSnapshot, Timestamp } from 'firebase/firestore'
import 'firebase/firestore'
import { db } from "../firebase/index"
import {  generateInitial, generateRandomColor } from '../utilities/avatar'

    function checkUserColor(user) {
        const userColor = localStorage.getItem(`userColor_${user.value.uid}`);
        if (userColor) {
            return userColor;
        } else {
            const newColor = generateRandomColor();
            localStorage.setItem(`userColor_${user.value.uid}`, newColor);
            return newColor;
        }
    }
    function checkUserInitial(user) {
        const userInitial = localStorage.getItem(`userInitial_${user.value.uid}`);
        if (userInitial) {
            return userInitial;
        } else {
            const newInitial = generateInitial(user.value.displayName);
            localStorage.setItem(`userInitial_${user.value.uid}`, newInitial);
            return newInitial;
        }
    }

    export const sendMessage = async(user, newMessage)=>{
        if(!user.value.displayName){
            user.value.displayName=user.value.email.split('@')[0]
        }
        const userColor=checkUserColor(user)
        const userInitial=checkUserInitial(user)
        const messageInfo={
            'userID': user.value.uid,
            'displayName': user.value.displayName,
            'text': newMessage.value,
            'createdAt': Timestamp.fromDate(new Date(Date.now())),
            'color': userColor,
            'initial': userInitial
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
                color: doc.data().color,
                initial: doc.data().initial
            }))
        })
    }
    const formatTimestamp = (timestamp) => {
        const date = new Date(timestamp.seconds * 1000).toLocaleString() 
        return date
    }