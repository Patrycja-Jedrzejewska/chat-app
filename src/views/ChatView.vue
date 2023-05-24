<template>
    <Contacts />
    <Chat />
</template>
<script>
import Contacts from '../components/Contacts.vue';
import Chat from '../components/Chat.vue';
export default {
    name: "ChatView",
    components:{
        Contacts, 
        Chat
    }
};
</script>
<style scoped lang="scss">

</style>