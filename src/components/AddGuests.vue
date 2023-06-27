<template>
  <div class="addGuests">
    <div class="addGuests__contacts">
      <Contacts :room-id="roomId" @guests-selected="handleGuestsSelected" />
    </div>
    <button class="btn btn-primary addGuests__btn" :disabled="selectedGuests.length === 0" @click="addGuestsToRoom">
      Add to room
    </button>
  </div>
</template>
<script>
import Contacts from './Contacts.vue'
import { useUserStore } from '../store/UserStore'
export default {
  components: {
    Contacts,
  },
  props: {
    roomId: {
      type: String,
      required: true,
    },
  },
  emits: ['popup-close'],
  data() {
    return {
      selectedGuests: [],
    }
  },
  methods: {
    handleGuestsSelected(selectedGuests) {
      this.selectedGuests = selectedGuests
    },

    async addGuestsToRoom() {
      const userStore = useUserStore()
      const roomId = this.roomId

      this.selectedGuests.forEach((guest) => {
        userStore.addGuestsToRoom(guest, roomId)
        const guestRoom = userStore.rooms.find((room) => room.id === roomId)
        if (guestRoom != null) {
          guestRoom.guestsIds.push(guest)
        }
      })
      this.$emit('popup-close')
    },
  },
}
</script>
<style lang="scss" scoped>
.addGuests {
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  &__btn {
    width: 200px;
    align-self: center;
    background-color: #f98f62;
    color: #fff;
    &:disabled {
      color: rgba(0, 0, 0, 0.9);
      background-color: rgba(249, 143, 98, 0.9);
    }
    &:hover {
      background-color: #f98f62;
      box-shadow: 0 0 0.2rem 0.1rem rgba(255, 161, 122, 0.8);
    }
  }
}
</style>
