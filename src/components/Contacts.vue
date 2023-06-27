<template>
  <div class="contacts">
    <ul v-if="contacts" class="contacts__list">
      <li
        v-for="contact in contacts"
        :key="contact.id"
        class="contact"
        :class="{
          'contact--selected': contact.selected,
          'contact--guest': isGuest(contact),
          'contact--owner': isOwner(contact),
        }"
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
        <div v-if="isGuest(contact)" class="contact__delete-guest">
          <button class="btn btn--delete-guest" @click="deleteGuest(contact.id)">X</button>
        </div>
      </li>
    </ul>
    <div v-else class="contacts__emptylist">Brak kontaktów</div>
  </div>
</template>

<script>
import { onMounted, computed, ref, watch } from 'vue'
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
    const guest = ref(null)

    const isGuest = (contact) => {
      const guestRoom = userStore.rooms.find((room) => room.id === props.roomId)
      const guestObj = guestRoom ? guestRoom.guestsIds.find((guest) => guest.id === contact.id) : null
      return guestObj ? guestObj.isGuest : false
    }

    const toggleContactSelection = async (contact) => {
      if (!isGuest(contact) && !isOwner(contact)) {
        contact.selected = !contact.selected

        if (contact.selected) {
          if (!selectedContacts.value.some((c) => c.id === contact.id)) {
            selectedContacts.value.push(contact)
          }
        } else {
          const index = selectedContacts.value.findIndex((c) => c.id === contact.id)
          if (index !== -1) {
            selectedContacts.value.splice(index, 1)
          }
        }
      }
      updateContacts()
    }

    const deleteGuest = async (contactId) => {
      await userStore.removeGuestFromRoom(contactId, props.roomId)

      const guestRoom = userStore.rooms.find((room) => room.id === props.roomId)

      if (guestRoom != null) {
        const index = guestRoom.guestsIds.findIndex((id) => id.id === contactId)
        if (index !== -1) {
          guestRoom.guestsIds.splice(index, 1)
        }
      }
    }

    onMounted(async () => {
      await userStore.getContactIds()
      await userStore.fetchContactDetails(props.roomId)
      updateContacts()
    })

    const updateContacts = async () => {
      contacts.value.forEach((contact) => {
        if (isGuest(contact)) {
          guest.value = isGuest(contact) ? contact : null
        }
      })
    }
    const isOwner = (contact) => {
      const guestRoom = userStore.rooms.find((room) => room.id === props.roomId)
      if(!guestRoom){
        return
      }
      return contact.id === guestRoom.ownerId
    }
    watch(contacts, (newContacts) => {
      newContacts.forEach((contact) => {
        contact.selected = selectedContacts.value.some((c) => c.id === contact.id)
      })
    })

    return {
      contacts,
      toggleContactSelection,
      selectedContacts,
      guest,
      deleteGuest,
      isGuest,
      updateContacts,
      isOwner,
    }
  },
  mounted() {
    this.$emit('guests-selected', this.selectedContacts)
  },
}
</script>
<style scoped lang="scss">
.contacts {
  background-color: #fff;
  &__list {
    list-style: none;
    padding-left: 5px;
    padding-right: 5px;
    margin-top: 25px;
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
  width: 360px;
  padding: 5px 10px;
  background-color: #fff;
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
    width: 260px;
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
.btn--delete-guest {
  width: 30px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  border-radius: 5px;
}
.contact {
  &--selected {
    background-color: #f98f62 !important;
    .contact__field--email {
      color: #fff;
    }
  }
  &--guest {
    background-color: rgb(155, 233, 249);
  }
  &--owner {
    background-color: rgb(115, 250, 185);
  }
}
</style>
