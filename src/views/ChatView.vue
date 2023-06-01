<template>
    <div class="chatview">
        <div class="contacts">
            <Contacts />
        </div>
        <div class="conversation">
            <Conversation />
        </div>
    </div>
</template>
<script>
import Contacts from '../components/Contacts.vue';
import Conversation from '../components/Conversation.vue'
import router from '../router';
export default {
    name: "ChatView",
    components:{
    Contacts,
    Conversation
}
};
</script>
<style scoped lang="scss">
.chatview{
    display: flex;
}
.conversation{
    //display:none;
    
    display: flex;
    width: 100%;
    @media only screen and (min-width: 768px) {
    
    }
}
.contacts{
    flex-basis: 360px;
     display: flex;
     @media only screen and (min-width: 768px) {
        
    }
}
</style>