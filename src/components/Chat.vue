<template>
    <div class="chat">
<div class="chat__messages">
            <Messages :contactId="contactId"/>
        </div>
        <div class="chat__new-message">
            <NewMessage :contactId="contactId"/>
        </div>
    </div>
</template>
<script>
import { ref, watch,defineComponent } from 'vue';
import { useUserStore } from '../store/index';
import Messages from './Messages.vue'
import NewMessage from './NewMessage.vue'

export default defineComponent({
  name: 'Chat',
  components: {
    Messages,
    NewMessage,
  },
  props: {
    contactId: {
      type: String,
      required: true,
    },
  },
});
</script>
<style scoped lang="scss">

</style>