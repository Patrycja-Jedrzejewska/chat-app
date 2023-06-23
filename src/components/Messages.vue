<template>
  <div v-if="messages.length > 0" class="messages">
    <Message v-for="message in messages" :key="message.id" :message="message" :room-id="roomId" />
  </div>
  <div v-else class="messages--empty">Lack of messages</div>
</template>
<script>
import { ref, watch, onUnmounted } from 'vue'
import { getMessages } from '../chat/index'
import Message from './Message.vue'
import { scrollToBottom } from '../utilities/scroll'

export default {
  components: {
    Message,
  },
  props: {
    roomId: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const messages = ref([])
    const unsubscribe = ref(null)

    const fetchMessages = async () => {
      unsubscribe.value = await getMessages(messages, props.roomId)

      scrollToBottom()
    }

    watch(
      () => props.roomId,
      async () => {
        try {
          if (unsubscribe.value) {
            await unsubscribe.value()
            unsubscribe.value = null
          }
          await fetchMessages()
        } catch (error) {
          throw new Error(error)
        }
      }
    )

    onUnmounted(async () => {
      try {
        if (unsubscribe.value) {
          await unsubscribe.value()
        }
      } catch (error) {
        throw new Error(error)
      }
    })

    fetchMessages()

    return {
      messages,
    }
  },
}
</script>
<style scoped lang="scss"></style>
