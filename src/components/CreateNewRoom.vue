<template>
  <div class="modal">
    <div class="modal__overlay">
      <div class="modal__content create-room">
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
          <button type="submit" class="btn btn-primary btn--submit">Create room</button>
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

    return {
      roomName,
      createNewRoom,
      closeModal,
      roomCreationError,
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
