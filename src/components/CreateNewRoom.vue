<template>
  <div class="modal">
    <div class="modal__overlay" @click="closeModal">
      <div class="modal__content create-room" @click.stop>
        <button class="modal__close" @click="closeModal">Close</button>
        <form class="form create-room__form" @submit.prevent="createNewRoom">
          <h2 class="form__title">Create New Room</h2>
          <input
            id="roomName"
            v-model="roomName"
            type="text"
            autocomplete="roomName"
            placeholder="My new room"
            required
            class="form-control form__input form__input--roomName"
          />
          <label for="roomName" class="form-label form__label">room name</label>
          <div v-if="roomCreationError" class="form__error">
            {{ roomCreationError }}
          </div>
          <button type="submit" class="btn btn-primary btn--submit" :disabled="isInputEmpty">Create room</button>
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
    owner: {
      type: String,
      required: true,
    },
  },
  emits: ['close-modal'],
  setup(props, { emit }) {
    const roomName = ref('')
    const store = useUserStore()

    const createNewRoom = async () => {
      await store.createRoomDocument(roomName, props.owner)
      if (store.roomCreationError == null) {
        closeModal()
      }
    }

    const closeModal = () => {
      emit('close-modal')
    }

    const roomCreationError = computed(() => {
      return store.roomCreationError
    })

    const isInputEmpty = computed(() => {
      return roomName.value.trim() === ''
    })

    return {
      roomName,
      createNewRoom,
      closeModal,
      roomCreationError,
      isInputEmpty,
    }
  },
}
</script>
<style lang="scss" scoped>
.form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  &__title {
    text-align: center;
  }
  &__input {
    margin-top: 20px;
  }
  .btn--submit {
    &:disabled {
      background-color: #00a29e;
    }
  }
}
</style>
