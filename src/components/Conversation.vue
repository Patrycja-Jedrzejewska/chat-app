<template>
  <div class="mobileTopbar">
    <button v-if="windowWidth < 768" class="btn btn--goBack" @click="goBack">
      <img src="../assets/goBack-icon.svg" alt="go back icon" class="icon" />
    </button>
    <h3 class="conversation__title">Konwersacja z:<br />{{ contactDisplayName }}</h3>
  </div>
  <div v-if="hasContact" class="chat">
    <Chat :contact-id="contactId" />
  </div>
  <div v-else class="empty-chat"></div>
</template>
<script>
import { useUserStore } from '../store/UserStore'
import { defineComponent, ref, watch, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import Chat from '../components/Chat.vue'
export default defineComponent({
  name: 'Conversation',
  components: {
    Chat,
  },
  emits: ['go-back'],
  setup(props, { emit }) {
    const router = useRouter()
    const userStore = useUserStore()
    const contactId = ref('')
    const contactDisplayName = ref('')
    const hasContact = ref(false)
    const contactsArray = userStore.users
    const windowWidth = ref(window.innerWidth)

    const handleResize = () => {
      windowWidth.value = window.innerWidth
    }

    const updateContactDisplayName = () => {
      const newContactId = router.currentRoute.value.params.contactId
      const contact = contactsArray.find((user) => user.id === newContactId)
      contactDisplayName.value = contact ? contact.displayName : ''
    }

    onMounted(() => {
      contactId.value = router.currentRoute.value.params.contactId
      updateContactDisplayName()
      window.addEventListener('resize', handleResize)
    })

    watch(
      () => router.currentRoute.value.params.contactId,
      (newContactId) => {
        contactId.value = newContactId
        updateContactDisplayName()
      }
    )

    watch(contactId, () => {
      hasContact.value = !!contactId.value
    })

    const goBack = () => {
      emit('go-back')
    }

    return {
      contactId,
      contactDisplayName,
      hasContact,
      goBack,
      windowWidth,
    }
  },
})
</script>
<style scoped lang="scss">
.mobileTopbar {
  display: flex;
  justify-content: space-evenly;
  position: sticky;
  top: 0;
  background-color: #fff;
  @media only screen and (min-width: 768px) {
    display: none;
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
  .conversation__title {
    text-align: center;
    margin-left: 20px;
    margin-right: 20px;
    padding-left: 40px;
  }
}
.chat {
  height: calc(100vh - 65px);
  overflow-y: auto;
  display: flex;
  @media only screen and (min-width: 768px) {
    margin-top: 0;
    height: 100vh;
  }
}
</style>
