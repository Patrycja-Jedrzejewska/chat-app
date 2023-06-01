<template>
    <div class="messages" v-if="messages.length>0">
        <Message v-for="message in messages" :key="message.id" :message="message" />
    </div>
    <div v-else>Brak wiadomości</div>
</template>
<script >
import { ref, watch, onUnmounted } from 'vue'
import { useUserStore } from '../store'
import { getMessages } from '../chat/index'
import Message from './Message.vue'
import { auth } from '../firebase/index'

export default {
  props: {
    contactId: {
      type: String,
      required: true,
    },
  },
  components: {
    Message,
  },
  setup(props) {
    const userStore = useUserStore();
    const messages = ref([]);
    let unsubscribe = null;

    const fetchMessages = async () => {
      unsubscribe = await getMessages(auth.currentUser, messages, props.contactId);
    };

    watch(
      () => props.contactId,
      async () => {
        if (unsubscribe && typeof unsubscribe === 'function') {
          await unsubscribe(); // Anuluj poprzednią subskrypcję
          unsubscribe = null;
        }
        await fetchMessages();
      }
    );

    onUnmounted(async () => {
      if (unsubscribe && typeof unsubscribe === 'function') {
        await unsubscribe(); // Anuluj subskrypcję przy odmontowywaniu komponentu
      }
    });

    fetchMessages();

    return {
      messages,
    };
  },
};
</script>