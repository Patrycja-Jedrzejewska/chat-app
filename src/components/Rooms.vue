<template>
  <div class="rooms">
    <ul v-if="roomsLoaded" class="rooms__list">
      <li
        v-for="room in rooms"
        :key="room.roomId"
        class="room"
        :class="{ 'room--selected': room.roomId === selectedRoomId }"
      >
        <router-link :to="`/conversation/${room.roomId}`" class="room__link link">
          <div class="room__details">
            {{ room.roomName }}
          </div>
        </router-link>
      </li>
    </ul>
    <div v-else class="rooms__emptylist">Brak kontaktów</div>
  </div>
</template>

<script>
import { onMounted, ref, getCurrentInstance, defineComponent } from 'vue'
import { useUserStore } from '../store/UserStore'
import { useRouter } from 'vue-router'

export default defineComponent({
  setup() {
    const userStore = useUserStore()
    const rooms = ref([])
    const roomsLoaded = ref(false)
    const router = useRouter()
    const selectedRoomId = ref('')
    const { emit } = getCurrentInstance()

    onMounted(async () => {
      await userStore.fetchRoomsDetails(userStore.rooms)
      rooms.value = userStore.rooms
      roomsLoaded.value = true
      console.log(userStore.rooms)
    })
    const emitSelectedRoom = () => {
      emit('selected-room', selectedRoomId.value)
    }
    router.afterEach((to) => {
      const roomId = to.params.roomId
      selectedRoomId.value = roomId
      emitSelectedRoom()
    })
    return {
      rooms,
      roomsLoaded,
      selectedRoomId,
    }
  },
})
</script>
<style scoped lang="scss">
.rooms {
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
.room {
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
.room {
  &--selected {
    background-color: #f98f62 !important;
    .room__field--email {
      color: #fff;
    }
  }
}
</style>
