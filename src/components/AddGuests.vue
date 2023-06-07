<template>
  <div class="addGuests">
    <div class="addGuests__contacts">
      <Contacts :room-id="roomId" @guests-selected="handleGuestsSelected" />
    </div>
    <button class="addGuests__btn" :disabled="selectedGuests.length === 0" @click="addGuestsToRoom">Add to room</button>
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
    addGuestsToRoom() {
      const userStore = useUserStore()
      const roomId = this.roomId

      this.selectedGuests.forEach((guestId) => {
        userStore.addGuestsToRoom(guestId, roomId)
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

  &__btn {
    margin-top: 10px;
    width: 200px;
    align-self: center;
  }
}
</style>
