<template>
    <div class="chat" v-if="hasContact">
        <Chat :contactId="contactId"/>
    </div>
    <div class="empty-chat" v-else>Wybierz kontakt</div>
</template>
<script>
import { defineComponent, watch } from 'vue';
import { useRouter } from 'vue-router';
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
    
    hasContact() {
      return !!this.contactId;
    },
  },
  setup() {
    const router = useRouter();

    watch(
      () => router.currentRoute.value.params.contactId,
      (newContactId) => {
        router.replace({ params: { contactId: newContactId } });
      }
    );
  },
});
</script>
<style scoped lang="scss">
.conversation__title{
    display: flex;
    justify-content: center;
    text-align: center;
    flex-wrap: wrap;
    width: 100%;
}
.chat{
    display: flex;
}
</style>