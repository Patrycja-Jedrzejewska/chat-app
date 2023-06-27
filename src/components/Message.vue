<template>
  <div class="message" :class="messageClass">
    <div v-if="!isCurrentUser" class="message__avatar">
      <Avatar :color="user.color" :initial="user.initial" />
    </div>
    <div class="message__text">{{ message.text }}</div>
    <div class="message__date">{{ message.createdAt }}</div>
  </div>
</template>
<script>
import { ref, computed, onMounted } from 'vue'
import { auth } from '../firebase/index'
import Avatar from './Avatar.vue'
import { useUserStore } from '../store/UserStore'

export default {
  components: {
    Avatar,
  },
  props: {
    message: {
      type: Object,
      required: true,
    },
    roomId: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    const userStore = useUserStore()
    const user = ref({
      color: '',
      initial: '',
    })

    const fetchUserDetails = async () => {
      try {
        await userStore.fetchContactDetails(props.roomId)

        const foundUser = userStore.users.find((user) => user.id === props.message.senderId)
        user.value = {
          color: foundUser ? foundUser.color : '',
          initial: foundUser ? foundUser.initial : '',
        }
      } catch (error) {
        throw new Error(error)
      }
    }

    onMounted(fetchUserDetails)

    const currentUser = computed(() => {
      const currentUser = auth.currentUser
      return currentUser && currentUser.uid === props.message.senderId
    })

    const messageClass = computed(() => {
      return {
        'message--current-user': currentUser.value,
        'message--another-user': !currentUser.value,
      }
    })

    return {
      user,
      messageClass,
      isCurrentUser: currentUser,
    }
  },
}
</script>
<style scoped lang="scss">
.message {
  display: flex;
  align-items: center;
  margin: 10px;
  flex-wrap: wrap;
  &__avatar {
    margin-right: 10px;
  }
  &__text {
    background-color: #fff;
    font-size: 20px;
    padding: 5px 15px;
    min-width: 150px;
    max-width: 700px;
    word-wrap: break-word;
    border-radius: 15px;
  }
  &__date {
    font-size: 14px;
    width: 100%;
  }
}

.message--current-user {
  flex-direction: row-reverse;
  .message {
    &__text {
      text-align: right;
      background-color: #affffb;
    }
    &__date {
      text-align: right;
    }
  }
}
.message--another-user {
  .message {
    &__text {
      background-color: #00a1a6;
    }
  }
}
</style>
