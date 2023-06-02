<template>
    <div class="chatview">
        <div class="contacts" v-if="windowWidth >= 768 || (windowWidth < 768 && selectedContactId === '')">
            <Contacts @selected-contact="selectedContactId = $event" />
        </div>
        <div class="conversation" v-if="selectedContactId !== ''">
            <Conversation @go-back="goBack"/>
        </div>
    </div>
</template>
<script>
import Contacts from '../components/Contacts.vue';
import Conversation from '../components/Conversation.vue'
import { ref, onMounted } from 'vue';

export default {
    name: "ChatView",
    components:{
    Contacts,
    Conversation
},
setup() {
    const windowWidth = ref(window.innerWidth);
    const selectedContactId = ref('');

    onMounted(() => {
      window.addEventListener('resize', handleResize);
    });

    const handleResize = () => {
      windowWidth.value = window.innerWidth;
    };

    const goBack = () => {
      selectedContactId.value = '';
    };

    return {
      windowWidth,
      selectedContactId,
      goBack
    };
  }
};

</script>
<style scoped lang="scss">
.chatview{
    display: flex;
    width: 100vw;
}

.conversation{
    @media only screen and (min-width: 768px) {
    }
}
.contacts{
    display: flex;
    height: 100vh;
    width: 100vw;
    justify-content: center;
    @media only screen and (min-width: 768px) {
        width: 360px;
        justify-content: left;
    }
}
</style>