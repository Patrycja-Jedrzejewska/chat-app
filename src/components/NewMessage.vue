<template>
    <div class="new-message">
        <input type="text" class="new-message__input" v-model="newMessage" @keyup.enter="sendNewMessage" placeholder="Type a message...">
        <button class="new-message__send-btn" @click="sendNewMessage">WYŚLIJ</button>
    </div>
</template>
<script>
import { ref, watchEffect } from 'vue'
import { auth } from '../firebase/index'
import { sendMessage } from '../chat/index'

export default {
  props: {
    contactId: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const user = ref(auth.currentUser);
    const newMessage = ref('');

    watchEffect(() => {
      user.value = auth.currentUser;
    });

    const sendNewMessage = () => {
      if (newMessage.value.trim() !== '') {
        sendMessage(user, newMessage, props.contactId);
        newMessage.value = '';
      }
    };

    return {
      user,
      newMessage,
      sendNewMessage,
    };
  },
};
</script>
