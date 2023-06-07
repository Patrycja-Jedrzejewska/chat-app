<template>
  <div class="contacts">
    <ul v-if="contacts" class="contacts__list">
      <li
        v-for="contact in contacts"
        :key="contact.id"
        class="contact"
        :class="['contact', { 'contact--selected': contact.selected }, { 'contact--guest': contact.isGuest }]"
        @click="toggleContactSelection(contact)"
      >
        <div class="contact__avatar">
          <Avatar :color="contact.color" :initial="contact.initial" />
        </div>
        <div class="contact__details">
          <div class="contact__field contact__field--displayName">
            {{ contact.displayName }}
          </div>
          <div class="contact__field contact__field--email">{{ contact.email }}</div>
        </div>
      </li>
    </ul>
    <div v-else class="contacts__emptylist">Brak kontaktów</div>
  </div>
</template>
<script>
import { onMounted, computed, ref } from 'vue'
import Avatar from '../components/Avatar.vue'
import { useUserStore } from '../store/UserStore'

export default {
  components: {
    Avatar,
  },
  props: {
    roomId: {
      type: String,
      required: true,
    },
  },
  emits: ['guests-selected'],
  setup(props) {
    const userStore = useUserStore()
    const contacts = computed(() => userStore.users)
    const selectedContacts = ref([])

    onMounted(async () => {
      await userStore.getContactIds()
      await userStore.fetchContactDetails(userStore.contacts)

      for (const contact of contacts.value) {
        contact.isGuest = await isGuest(contact.id)
      }
    })

    const toggleContactSelection = (contact) => {
      if (!contact.isGuest) {
        contact.selected = !contact.selected
        if (contact.selected) {
          if (!selectedContacts.value.includes(contact)) {
            selectedContacts.value.push(contact)
          }
        } else {
          const index = selectedContacts.value.findIndex((c) => c.id === contact.id)
          if (index !== -1) {
            selectedContacts.value.splice(index, 1)
          }
        }
      }
    }

    const isGuest = async (contactId) => {
      const guestIds = await userStore.fetchGuestIdsForRoom(props.roomId)
      return guestIds.includes(contactId)
    }

    return {
      contacts,
      toggleContactSelection,
      selectedContacts,
    }
  },
  mounted() {
    this.$emit('guests-selected', this.selectedContacts)
  },
}
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
  background-color: #fff;
  &--selected {
    background-color: #f98f62 !important;
    .contact__field--email {
      color: #fff;
    }
  }
  &--guest {
    background-color: lightblue;
  }
}
</style>
