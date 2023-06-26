<template>
  <div class="chatview">
    <div v-if="showRooms" class="chatview__rooms">
      <Rooms @selected-room="handleRoomSelection" />
    </div>
    <div v-if="hasSelectedRoom" class="chatview__conversation">
      <Conversation @go-back="goBack" />
    </div>
  </div>
</template>
<script>
import { mobileWidth } from '../utilities/breakpoints'
import Rooms from '../components/Rooms.vue'
import Conversation from '../components/Conversation.vue'
import { ref, onMounted, onBeforeMount, computed } from 'vue'

export default {
  name: 'ChatView',
  components: {
    Rooms,
    Conversation,
  },
  setup() {
    const windowWidth = ref(window.innerWidth)
    const selectedRoomId = ref('')

    const handleResize = () => {
      windowWidth.value = window.innerWidth
    }

    onMounted(() => {
      window.addEventListener('resize', handleResize)
    })

    onBeforeMount(() => {
      window.removeEventListener('resize', handleResize)
    })

    const handleRoomSelection = (roomId) => {
      selectedRoomId.value = roomId
    }

    const hasSelectedRoom = computed(() => {
      return selectedRoomId.value !== ''
    })

    const goBack = () => {
      selectedRoomId.value = ''
    }

    const showRooms = computed(() => {
      return windowWidth.value >= mobileWidth || (windowWidth.value < mobileWidth && selectedRoomId.value === '')
    })

    return {
      windowWidth,
      selectedRoomId,
      goBack,
      showRooms,
      handleRoomSelection,
      hasSelectedRoom,
    }
  },
}
</script>
<style scoped lang="scss">
.chatview {
  display: flex;
  width: 100vw;
  height: 100vh;
  &__conversation {
    height: 100vh;
  }
  &__rooms {
    display: flex;
    height: 100vh;
    width: 100vw;
    justify-content: center;
    @media only screen and (min-width: 768px) {
      width: 360px;
      justify-content: left;
    }
  }
}
</style>
