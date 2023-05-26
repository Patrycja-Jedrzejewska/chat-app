<template>
    <Chat :contactId="contactId"/>
</template>
<script>
import { defineComponent, ref } from 'vue';
import Chat from '../components/Chat.vue'
export default defineComponent({
  name: 'Conversation',
  components: {
    Chat,
  },
  data() {
    return {
      contactId: null,
    };
  },
  created() {
    this.contactId = this.$route.params.contactId;
  },
});
</script>
<style scoped lang="scss">

</style>