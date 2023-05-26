<template>
    <div class="new-message">
        <input type="text" class="new-message__input" v-model="newMessage" @keyup.enter="sendNewMessage" placeholder="Type a message...">
        <button class="new-message__send-btn" @click="sendNewMessage">WYŚLIJ</button>
    </div>
</template>
<script>
import { ref } from 'vue'
import { auth } from '../firebase/index'
import { sendMessage } from '../chat/index'
import { useUserStore } from '../store'

export default{
    props: ['contactId'],
  setup(props) {
    const userStore = useUserStore();
    const user = ref(auth.currentUser);
    const newMessage = ref('');

    const sendNewMessage = () => {
      sendMessage(user, newMessage, props.contactId);
    };

    return {
      user,
      newMessage,
      sendNewMessage,
    };
  },
}
</script>
