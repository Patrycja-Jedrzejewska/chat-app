<template>
    <div class="chatview">
        <div class="contacts">
            <Contacts />
        </div>
        <div class="conversation">
            
        </div>
    </div>
</template>
<script>
import Contacts from '../components/Contacts.vue';
import Conversation from '../components/Conversation.vue'
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
    width: 100%;
    display: flex;
}
.conversation{
    display:none;
    
    
    @media only screen and (min-width: 768px) {
    
    }
}
.contacts{
     display: flex;
     @media only screen and (min-width: 768px) {
        
    }
}
</style>