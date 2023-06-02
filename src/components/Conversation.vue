<template>
    <div class="mobileTopbar">
        <button v-if="windowWidth < 768" @click="goBack" class="btn btn--goBack"><img src = "../assets/goBack-icon.svg" alt="go back icon" class="icon"/></button>
        <h3 class="conversation__title">Konwersacja z użytkownikiem:<br />{{ contactDisplayName }}</h3>
    </div>
    <div class="chat" v-if="hasContact">
        <Chat :contactId="contactId"/>
    </div>
    <div class="empty-chat" v-else></div>
</template>
<script>
import { useUserStore } from '../store';
import { defineComponent, ref,watch, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import Chat from '../components/Chat.vue'
export default defineComponent({
  name: 'Conversation',
  components: {
    Chat,
  },
  setup(props, { emit }) {
    const router = useRouter();
    const userStore = useUserStore();
    const contactId = ref('');
    const contactDisplayName = ref('');
    const hasContact = ref(false);
    const contactsArray = userStore.users;
    const windowWidth = ref(window.innerWidth);

    const handleResize = () => {
      windowWidth.value = window.innerWidth;
    };

    const updateContactDisplayName = () => {
      const newContactId = router.currentRoute.value.params.contactId;
      const contact = contactsArray.find((user) => user.id === newContactId);
      contactDisplayName.value = contact ? contact.displayName : '';
    };

    onMounted(() => {
      contactId.value = router.currentRoute.value.params.contactId;
      updateContactDisplayName();
      window.addEventListener('resize', handleResize);
    });

    watch(() => router.currentRoute.value.params.contactId, (newContactId) => {
      contactId.value = newContactId;
      updateContactDisplayName();
    });

    watch(contactId, () => {
      hasContact.value = !!contactId.value;
    });

    const goBack = () => {
      emit('go-back');
    };

    return {
      contactId,
      contactDisplayName,
      hasContact,
      goBack,
      windowWidth,
    };
  },
});
</script>
<style scoped lang="scss">
.mobileTopbar{
    display: flex;
    justify-content: space-around;
    position: sticky;
    top: 0;
    background-color: #fff;
    @media only screen and (min-width: 768px) {
        display: none;
    }
    .btn--goBack{
        display: flex;
        align-items: center;
        justify-content: center;
            width: 45px;
            border: none;
            background-color: #fff;
            .icon{
                width: 40px;
            }
    }
    .conversation__title{
        text-align: center;
        margin-left: 20px;
        margin-right: 20px;
    }
}
.chat {
    height: calc(100vh - 60px);
    overflow-y: auto;
    display: flex;
    margin-top: 60px;
    @media only screen and (min-width: 768px) {
        margin-top: 0;
        height: 100vh;
    }
}
</style>