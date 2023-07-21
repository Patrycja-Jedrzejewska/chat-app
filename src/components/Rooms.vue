<template>
  <div class="rooms">
    <div class="rooms__buttons">
      <button class="btn rooms__button rooms__button--logout" @click="logout">
        <img src="../assets/logout-icon.svg" alt="Logout icon" class="icon icon--logout" /> Logout
      </button>
      <button class="btn rooms__button rooms__button--add-new" @click="openCreateNewRoom">
        <img src="../assets/newRoom-icon.svg" alt="Create new room icon" class="icon icon--newRoom" /> Create new room
      </button>
    </div>
    <ul v-if="roomsLoaded" class="rooms__list">
      <li v-for="room in rooms" :key="room.id" class="room" :class="{ 'room--selected': room.id === selectedRoomId }">
        <router-link :to="`/conversation/${room.id}`" class="room__link link">
          <div class="room__details">
            {{ room.roomName }}
          </div>
        </router-link>
      </li>
    </ul>
    <div v-else class="rooms__emptylist">Brak kontaktów</div>
    <div v-if="showCreateNewRoomComputed" class="rooms__create-new">
      <CreateNewRoom :owner="user" @close-modal="closeCreateNewRoom" />
    </div>
  </div>
</template>
<script>
import { onMounted, ref, watch, getCurrentInstance, defineComponent, computed } from 'vue'
import { useUserStore } from '../store/UserStore'
import { useRouter } from 'vue-router'

import CreateNewRoom from './CreateNewRoom.vue'

export default defineComponent({
  name: 'Rooms',
  components: { CreateNewRoom },

  setup() {
    const userStore = useUserStore()
    const rooms = ref([])
    const roomsLoaded = ref(false)
    const router = useRouter()
    const selectedRoomId = ref('')
    const { emit } = getCurrentInstance()
    const showCreateNewRoom = ref(false)
    const user = userStore.user

    onMounted(async () => {
      await userStore.fetchRoomsDetails(userStore.rooms)
      roomsLoaded.value = true
    })
    const emitSelectedRoom = () => {
      emit('selected-room', selectedRoomId.value)
    }
    router.afterEach((to) => {
      const roomId = to.params.roomId
      selectedRoomId.value = roomId
      emitSelectedRoom()
    })
    const openCreateNewRoom = () => {
      showCreateNewRoom.value = true
    }

    const closeCreateNewRoom = () => {
      showCreateNewRoom.value = false
    }

    const showCreateNewRoomComputed = computed(() => {
      return showCreateNewRoom.value
    })

    const updateRooms = () => {
      rooms.value = userStore.rooms
    }
    const logout = () => {
      userStore.logout()
    }
    watch(() => userStore.rooms, updateRooms)

    return {
      rooms,
      roomsLoaded,
      selectedRoomId,
      showCreateNewRoom,
      openCreateNewRoom,
      closeCreateNewRoom,
      showCreateNewRoomComputed,
      user,
      updateRooms,
      logout,
    }
  },
})
</script>
<style scoped lang="scss">
.rooms {
  background-color: #ffffff;
  width: 100%;
  overflow-y: auto;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;

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

  &__buttons {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 10px;
  }

  &__button {
    display: flex;
    align-items: center;
    justify-content: center;

    margin: 3px;
    border: solid;
    border-width: 1px;
    border-color: #f98f62;

    &:hover {
      background-color: rgba(255, 161, 122, 0.25);
      box-shadow: 0 0 0.2rem 0.1rem rgba(255, 161, 122, 0.6);
    }
  }
}

.room {
  display: flex;
  margin-bottom: 10px;
  padding: 5px 10px;
  background-color: #ffffff;
  border-radius: 20px;
  border: solid;
  border-width: 1px;
  border-color: #005b5e;
  height: 55px;
  min-width: 350px;

  @media only screen and (min-width: 768px) {
    min-width: 340px;
  }

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

  &--selected {
    background-color: #00a9a5 !important;
    color: #fff;

    .room__details {
      color: #fff;
    }
  }
}

.icon {
  width: 26px;
  margin-right: 5px;
}
</style>
