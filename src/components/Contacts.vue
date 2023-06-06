<template>
  <div class="contacts">
    <ul v-if="contacts.length > 0" class="contacts__list">
      <li
        v-for="contact in contacts"
        :key="contact.id"
        class="contact"
        :class="{ 'contact--selected': contact.id === selectedContactId }"
      >
        <router-link :to="`/conversation/${contact.id}`" class="contact__link link">
          <div class="contact__avatar">
            <Avatar :color="contact.color" :initial="contact.initial" />
          </div>
          <div class="contact__details">
            <div class="contact__field contact__field--displayName">
              {{ contact.displayName }}
            </div>
            <div class="contact__field contact__field--email">{{ contact.email }}</div>
          </div>
        </router-link>
      </li>
    </ul>
    <div v-else class="contacts__emptylist">Brak kontaktów</div>
  </div>
</template>
<script>
import Avatar from '../components/Avatar.vue'
import { onMounted, ref, getCurrentInstance, defineComponent } from 'vue'
import { useUserStore } from '../store/UserStore'
import { useRouter } from 'vue-router'

export default defineComponent({
  components: {
    Avatar,
  },
  setup() {
    const userStore = useUserStore()
    const contacts = ref([])
    const contactsLoaded = ref(false)
    const router = useRouter()
    const selectedContactId = ref('')
    const { emit } = getCurrentInstance()

    onMounted(async () => {
      await userStore.getContactIds()
      await userStore.fetchContactDetails(userStore.contacts)
      contacts.value = [...userStore.users]
      contactsLoaded.value = true
    })
    const emitSelectedContact = () => {
      emit('selected-contact', selectedContactId.value)
    }
    router.afterEach((to) => {
      const contactId = to.params.contactId
      selectedContactId.value = contactId
      emitSelectedContact()
    })
    return {
      contacts,
      contactsLoaded,
      selectedContactId,
    }
  },
})
</script>
<style scoped lang="scss">
.contacts {
  background-color: #ffffff;
  @media only screen and (min-width: 600px) {
    width: 100%;
  }
  overflow-y: auto;
  &__list {
    list-style: none;
    padding-left: 5px;
    padding-right: 5px;
    margin-top: 20px;
  }
  &__emptylist {
    text-align: center;
    color: gray;
  }
}
.contact {
  display: flex;
  align-items: center;
  align-content: center;
  margin: 10px;
  height: 70px;
  padding: 5px 10px;
  background-color: #ffffff;
  border-radius: 20px;
  &:hover {
    box-shadow: 0 0 0.5rem 0.1rem rgba(0, 91, 94, 0.25);
  }
  &__link {
    display: flex;
    align-items: center;
    color: #005b5e;
    text-decoration: none;
    width: 100%;
  }
  &__avatar {
    margin-right: 10px;
    scale: 110%;
  }
  &__details {
    display: flex;
    flex-direction: column;
  }
  &__field {
    &--displayName {
      font-weight: bold;
      font-size: 17px;
    }
    &--email {
      color: #00a9a5;
    }
  }
}
.contact {
  &--selected {
    background-color: #f98f62 !important;
    .contact__field--email {
      color: #fff;
    }
  }
}
</style>
