<template>
    <div class="contacts">
        <Contacts />
    </div>
    <div class="chat">
        <Chat />
    </div>
    
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
.contacts{
    width: 200px;
    background-color: yellow;
}
.chat{
    width: 500px;
    background-color: orange;
}

</style>