<template>
  <div class="conversation">
    <div class="conversation__infobar">
      <button
        v-if="windowWidth < mobileWidth"
        class="conversation__info conversation__info--btn btn btn--goBack"
        @click="goBack"
      >
        <img src="../assets/goBack-icon.svg" alt="go back icon" class="icon" />
      </button>
      <h3 class="conversation__info conversation__info--title">{{ roomName }}</h3>
      <button class="conversation__info conversation__info--btn btn btn--settings" @click="openConversationSettings">
        <img src="../assets/settings-icon.svg" alt="settings icon" class="icon" />
      </button>
    </div>

    <div v-if="hasContact" class="conversation__chat">
      <Chat :contact-id="contactId" />
    </div>
    <div v-else class="conversation__empty-chat"></div>

    <div v-if="showConversationSettingsComputed">
      <ConversationSettings :room-id="roomId" @close-modal="closeConversationSettings" />
    </div>
  </div>
</template>
<script>
import { useUserStore } from '../store/UserStore'
import { defineComponent, ref, watch, computed, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'
import Chat from '../components/Chat.vue'
import ConversationSettings from './ConversationSettings.vue'
import { mobileWidth } from '../utilities/breakpoints'
export default defineComponent({
  name: 'Conversation',
  components: {
    Chat,
    ConversationSettings,
  },
  emits: ['go-back'],
  setup(props, { emit }) {
    const router = useRouter()
    const userStore = useUserStore()
    const roomId = ref('')
    const contactDisplayName = ref('')
    const hasRoom = ref(false)
    const contactsArray = userStore.users
    const windowWidth = ref(window.innerWidth)
    const showConversationSettings = ref(false)
    const rooms = userStore.rooms

    const handleResize = () => {
      windowWidth.value = window.innerWidth
    }

    const updateContactDisplayName = () => {
      const newContactId = router.currentRoute.value.params.contactId
      const contact = contactsArray.find((user) => user.id === newContactId)
      contactDisplayName.value = contact ? contact.displayName : ''
    }

    onMounted(() => {
      roomId.value = router.currentRoute.value.params.roomId
      updateContactDisplayName()
      window.addEventListener('resize', handleResize)
    })

    onUnmounted(() => {
      window.removeEventListener('resize', handleResize)
    })

    watch(
      () => router.currentRoute.value.params.roomId,
      (newRoomId) => {
        roomId.value = newRoomId
        updateContactDisplayName()
      }
    )

    watch(roomId, () => {
      hasRoom.value = !!roomId.value
    })

    const goBack = () => {
      emit('go-back')
    }

    const roomName = ref('')

    watch(
      () => roomId.value,
      (newRoomId) => {
        const room = rooms.find((room) => room.id === newRoomId)
        roomName.value = room ? room.roomName : ''
      }
    )

    const openConversationSettings = () => {
      showConversationSettings.value = true
    }

    const closeConversationSettings = () => {
      showConversationSettings.value = false
    }

    const showConversationSettingsComputed = computed(() => {
      return showConversationSettings.value
    })
    return {
      roomId,
      contactDisplayName,
      hasRoom,
      goBack,
      windowWidth,
      mobileWidth,
      showConversationSettingsComputed,
      showConversationSettings,
      rooms,
      roomName,
      openConversationSettings,
      closeConversationSettings,
    }
  },
})
</script>
<style scoped lang="scss">
.conversation {
  &__infobar {
    display: flex;
    justify-content: space-between;
    position: sticky;
    top: 0;
    background-color: #fff;
    width: 100vw;
    @media only screen and (min-width: 768px) {
      width: calc(100vw - 360px);
    }
  }
  &__info {
    display: flex;
    align-items: center;

    &--btn {
      justify-content: center;
      width: 40px;
      border: none;
      background-color: #fff;
      margin: 0 15px;
    }
    &--title {
      text-align: center;
    }
  }
  &__chat {
    height: calc(100vh - 65px);
    overflow-y: auto;
    display: flex;
    @media only screen and (min-width: 768px) {
      margin-top: 0;
      height: 100vh;
    }
  }
}

.icon {
  width: 40px;
}
</style>
