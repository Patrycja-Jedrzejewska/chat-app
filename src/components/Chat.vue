<template>
  <div class="chat">
    <div class="chat__messages">
      <Messages :room-id="roomId" />
    </div>
    <div class="chat__new-message">
      <NewMessage :room-id="roomId" />
    </div>
  </div>
</template>
<script>
import { defineComponent } from 'vue'
import Messages from './Messages.vue'
import NewMessage from './NewMessage.vue'

export default defineComponent({
  name: 'Chat',
  components: {
    Messages,
    NewMessage,
  },
  props: {
    roomId: {
      type: String,
      required: true,
    },
  },
})
</script>
<style scoped lang="scss">
.chat {
  display: flex;
  flex-direction: column;
  height: calc(100vh - 52px);
  top: 62px;
  width: 100vw;
  @media only screen and (min-width: 768px) {
    width: calc(100vw - 360px);
  }

  &__messages {
    flex-grow: 1;
    overflow-y: auto;
    padding: 10px;
    margin-right: 5px;
    margin-left: 10px;
    @media only screen and (min-width: 1200px) {
      margin-right: 50px;
      margin-left: 100px;
    }
  }

  &__new-message {
    position: sticky;
    bottom: 0;
  }
}
</style>
