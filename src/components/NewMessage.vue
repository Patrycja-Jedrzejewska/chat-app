<template>
    <div class="new-message">
        <input type="text" class="new-message__input" v-model="newMessage" @keyup.enter="sendMessage" placeholder="Type a message...">
        <button class="new-message__send-btn" @click="sendMessage">WYŚLIJ</button>
    </div>
</template>
<script>
import { ref } from 'vue'
import { auth } from '../firebase/index'
import { sendMessage } from '../chat/index'

export default{
    setup(){
        const user = ref(auth.currentUser)
        const newMessage = ref('')
        
        return{
            user,
            newMessage,
            sendMessage: ()=> sendMessage(user,newMessage)
        }
   }
}
</script>
