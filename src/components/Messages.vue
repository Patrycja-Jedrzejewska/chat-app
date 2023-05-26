<template>
    <div class="messages" v-if="filteredMessages.length>0">
        <Message v-for="message in filteredMessages" :key="message.id" :message="message" />
    </div>
</template>
<script >
import { ref, watchEffect, computed } from 'vue'
import { useUserStore } from '../store'
import { getMessages } from '../chat/index'
import Message from './Message.vue'

export default {
  props: ['contactId'],
  components: { Message },
  setup(props) {
    const userStore = useUserStore();
    const messages = ref([]);

    watchEffect(() => {
      getMessages(messages, props.contactId);
    });

    const filteredMessages = computed(() => {
      return messages.value.filter((message) => message.contactId === props.contactId);
    });

    return {
      filteredMessages,
    };
  },
};
</script>