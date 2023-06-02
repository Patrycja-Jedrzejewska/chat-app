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
import { defineComponent } from 'vue';
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
    .chat{
        display: flex;
        flex-direction: column;
        height: 100vh;
        
        &__messages{
            flex-grow: 1;
            overflow-y: auto;
            padding: 10px;
            }
        &__new-message{
            position: sticky;
            bottom: 0;
       }
    }
</style>