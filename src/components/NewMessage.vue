<template>
  <div class="new-message">
    <input
      v-model="newMessage"
      type="text"
      class="form-control new-message__input"
      placeholder="Type a message..."
      @keyup.enter="sendNewMessage"
    />
    <button class="new-message__send-btn" @click="sendNewMessage">
      <img src="../assets/send-icon.svg" alt="Send icon" class="icon" />
    </button>
  </div>
</template>
<script>
import { ref, watchEffect } from 'vue'
import { auth } from '../firebase/index'
import { sendMessage } from '../chat/index'
import { scrollToBottom } from '../utilities/scroll'

export default {
  props: {
    contactId: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const user = ref(auth.currentUser)
    const newMessage = ref('')

    watchEffect(() => {
      user.value = auth.currentUser
    })

    const sendNewMessage = async () => {
      try {
        await sendMessage(user, newMessage, props.contactId)
        newMessage.value = ''
        scrollToBottom()
      } catch (error) {
        throw new Error('Wystąpił błąd podczas wysyłania wiadomości:', error)
      }
    }

    return {
      user,
      newMessage,
      sendNewMessage,
    }
  },
}
</script>
<style scoped lang="scss">
.new-message {
  display: flex;
  justify-content: space-evenly;
  background-color: #fff;
  margin: 0;
  padding: 10px;
  &__input {
    width: 90%;
    height: 40px;
    &:focus {
      box-shadow: 0 0 0 0.25rem rgba(2, 94, 0, 0.25);
    }
  }

  &__send-btn {
    width: 50px;
    border: none;
    background-color: #fff;
    .icon {
      width: 40px;
    }
  }
}
</style>
