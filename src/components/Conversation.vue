<template>
  <div class="conversation">
    <div class="settings"><button class="add-guest" @click="showModal = true">Add guest</button></div>
    <div v-if="showModal" class="modal">
      <div class="modal__overlay" @click="showModal = false">
        <div class="modal__content" @click.stop>
          <button class="modal__close" @click="showModal = false">Close</button>
          <AddGuests :room-id="roomId" />
        </div>
      </div>
    </div>
    <div class="conversation__mobileTopbar">
      <button v-if="windowWidth < mobileWidth" class="btn btn--goBack" @click="goBack">
        <img src="../assets/goBack-icon.svg" alt="go back icon" class="icon" />
      </button>
      <h3 class="conversation__title">Konwersacja z:<br />{{ contactDisplayName }}</h3>
    </div>
    <div v-if="hasContact" class="conversation__chat">
      <Chat :contact-id="contactId" />
    </div>
    <div v-else class="conversation__empty-chat"></div>
  </div>
</template>
<script>
import { useUserStore } from '../store/UserStore'
import { defineComponent, ref, watch, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'
import Chat from '../components/Chat.vue'
import AddGuests from '../components/AddGuests.vue'
import { mobileWidth } from '../utilities/breakpoints'
export default defineComponent({
  name: 'Conversation',
  components: {
    Chat,
    AddGuests,
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
    const showModal = ref('')

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

    return {
      roomId,
      contactDisplayName,
      hasRoom,
      goBack,
      windowWidth,
      mobileWidth,
      showModal,
    }
  },
})
</script>
<style scoped lang="scss">
.conversation {
  &__mobileTopbar {
    display: flex;
    justify-content: space-evenly;
    position: sticky;
    top: 0;
    background-color: #fff;
    @media only screen and (min-width: 768px) {
      display: none;
    }
  }
  &__title {
    text-align: center;
    margin-left: 20px;
    margin-right: 20px;
    padding-left: 40px;
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
.btn--goBack {
  position: absolute;
  top: 5px;
  left: 5px;
  width: 40px;
  border: none;
  background-color: #fff;
  .icon {
    width: 40px;
  }
}

.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  z-index: 9999;

  &__overlay {
    display: flex;
    position: absolute;
    justify-content: center;
    align-items: center;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
  }

  &__content {
    display: flex;
    width: 400px;
    height: fit-content;
    flex-direction: column;
    align-items: center;
    background-color: #fff;
    padding: 20px;
    border-radius: 8px;
  }

  &__close {
    display: flex;
    align-self: flex-end;
    flex-direction: row-reverse;
    position: relative;
    right: 10px;
    background: none;
    border: none;
    width: 100px;
    cursor: pointer;
  }
}
</style>
