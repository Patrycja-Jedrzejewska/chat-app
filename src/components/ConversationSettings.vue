<template>
  <div class="modal">
    <div class="modal__overlay">
      <div class="modal__content settings">
        <button class="modal__close" @click="closeModal">Close</button>
        <h2>Conversation Settings</h2>
        <div class="settings__buttons">
          <button class="btn settings__button settings__button--rename" @click="openRenameRoomModal">
            Rename room
          </button>
          <button class="btn settings__button settings__button--delete-room" @click="deleteCurrentRoom">
            Delete room
          </button>
        </div>
        <div class="settings__addGuests">
          <AddGuests :room-id="roomId" @popup-close="closeModal" />
        </div>
      </div>
    </div>
  </div>
  <div v-if="showRenameRoomComputed" class="settings__rename">
    <RenameRoom :room-id="roomId" @close-rename-modal="closeRenameRoomModal" />
  </div>
</template>
<script>
import AddGuests from './AddGuests.vue'
import RenameRoom from './RenameRoom.vue'
import { ref, computed } from 'vue'
import { useUserStore } from '../store/UserStore'

export default {
  name: 'ConversationSettings',
  components: { AddGuests, RenameRoom },
  props: {
    roomId: {
      type: String,
      required: true,
    },
  },
  emits: ['close-modal'],
  setup(props, { emit }) {
    const store = useUserStore()
    const showRenameRoom = ref(false)

    const closeModal = () => {
      emit('close-modal')
    }

    const openRenameRoomModal = () => {
      showRenameRoom.value = true
    }

    const closeRenameRoomModal = () => {
      showRenameRoom.value = false
    }
    const deleteCurrentRoom = async () => {
      await store.deleteRoom(props.roomId)
      closeModal()
    }
    const showRenameRoomComputed = computed(() => {
      return showRenameRoom.value
    })

    return {
      closeModal,
      showRenameRoom,
      openRenameRoomModal,
      closeRenameRoomModal,
      showRenameRoomComputed,
      deleteCurrentRoom,
    }
  },
}
</script>
<style lang="scss" scoped>
.settings {
  display: flex;
  &__buttons {
    display: flex;
  }
  &__button {
    width: 150px;
  }
}
</style>
