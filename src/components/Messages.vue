<template>
    <div class="messages" v-if="messages.length>0">
        <Message v-for="message in messages" :key="message.id" :message="message" />
    </div>
</template>
<script >
import { ref, watchEffect, computed, onMounted, onUnmounted } from 'vue'
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
    const messages = ref([]);
    let isLoaded = false;

    onMounted(() => {
      if (!isLoaded) {
        const unsubscribe = getMessages(auth.currentUser, messages, props.contactId);
        onUnmounted(unsubscribe);
        isLoaded = true;
      }
    });


    return {
      messages,
    };
  },
};
</script>