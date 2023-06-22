<template>
  <div class="modal">
    <div class="modal__overlay">
      <div class="modal__content">
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
        <AddGuests :room-id="roomId" @popup-close="closeModal" />
      </div>
    </div>
  </div>
  <div v-if="showRenameRoomComputed">
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
