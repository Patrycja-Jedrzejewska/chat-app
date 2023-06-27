<template>
  <div class="modal">
    <div class="modal__overlay" @click="closeRenameModal">
      <div class="modal__content rename-room" @click.stop>
        <button class="modal__close" @click="closeRenameModal">Close</button>
        <form class="form rename-room__form" @submit.prevent="renameRoom">
          <h2 class="form__title">Rename Room</h2>
          <input
            id="newName"
            v-model="newName"
            type="text"
            autocomplete="newName"
            placeholder="New room name"
            required
            class="form-control form__input form__input--newName"
          />
          <label for="newName" class="form-label form__label">new room name</label>
          <div v-if="roomCreationError" class="form__error">
            {{ roomCreationError }}
          </div>
          <button type="submit" class="btn-primary btn btn--submit">Rename</button>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import { ref, computed } from 'vue'
import { useUserStore } from '../store/UserStore'
export default {
  name: 'ConversationSettings',
  props: {
    roomId: {
      type: String,
      required: true,
    },
  },
  emits: ['close-rename-modal'],
  setup(props, { emit }) {
    const newName = ref('')
    const store = useUserStore()

    const renameRoom = async () => {
      await store.updateRoomName(newName, props.roomId)
      if (store.roomCreationError == null) {
        closeRenameModal()
      }
    }

    const roomCreationError = computed(() => {
      return store.roomCreationError
    })

    const closeRenameModal = () => {
      emit('close-rename-modal')
    }

    return {
      newName,
      renameRoom,
      roomCreationError,
      closeRenameModal,
    }
  },
}
</script>
<style lang="scss" scoped></style>
