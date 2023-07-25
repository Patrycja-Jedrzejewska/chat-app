<template>
  <div class="new-message" @drop.prevent="handleDrop" @dragover.prevent>
    <input v-model="newMessage" type="text" class="form-control new-message__input" placeholder="Type a message..."
      @keyup.enter="sendNewMessage" />
    <label for="fileInput" class="custom-add-photo">
      <img src="../assets/add-photo-icon.svg" alt="Add photo icon" class="icon icon--add-photo" />
    </label>
    <input id="fileInput" ref="fileInput" type="file" class="form-control new-message__image-input" accept="image/*"
      @change="handleImageUpload" />
    <button class="new-message__send-btn" @click="sendNewMessage">
      <img src="../assets/send-icon.svg" alt="Send icon" class="icon icon--send" />
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
    roomId: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const user = ref(auth.currentUser)
    const newMessage = ref('')
    const imageFile = ref(null)

    watchEffect(() => {
      user.value = auth.currentUser
    })

    const handleDrop = (event) => {
      const files = event.dataTransfer.files;
      if (files.length > 0) {
        const file = files[0];
        handleImageUpload({ target: { files: [file] } });
      }
      console.log('drop');
    }

    const handleImageUpload = (event) => {
      const file = event.target.files[0]
      if (file) {
        imageFile.value = file
      }
    }

    const sendNewMessage = async () => {
      try {
        if (newMessage.value != '' && imageFile.value != "") {

          await sendMessage(user, imageFile, newMessage, props.roomId)
        }
        newMessage.value = ''
        imageFile.value = null
        scrollToBottom()
      } catch (error) {
        throw new Error('Wystąpił błąd podczas wysyłania wiadomości:', error)
      }
    }

    return {
      user,
      imageFile,
      newMessage,
      sendNewMessage,
      handleImageUpload,
      handleDrop
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

  &__image-input {
    display: none;
  }

  .icon--add-photo {
    margin-left: 8px;
  }

  &__send-btn {
    width: 50px;
    border: none;
    background-color: #fff;
  }

  .icon {
    width: 40px;
  }
}
</style>
