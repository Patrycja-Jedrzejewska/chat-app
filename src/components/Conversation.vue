<template>
    <h3>Konwersacja z użytkownikiem: {{ contactDisplayName }}</h3>
    <Chat :contactId="contactId"/>
</template>
<script>
import { useUserStore } from '../store';
import { defineComponent, ref, onMounted, computed } from 'vue';
import router from '../router';
import Chat from '../components/Chat.vue'
export default defineComponent({
  name: 'Conversation',
  components: {
    Chat,
  },
  computed: {
    contactId() {
      return this.$route.params.contactId;
    },
    contactDisplayName() {
      const userStore = useUserStore();
      const user = userStore.users.find(user => user.id === this.contactId);
      return user ? user.displayName : '';
    },
  },
});
</script>
<style scoped lang="scss">

</style>