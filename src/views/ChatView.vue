<template>
    <div class="contacts">
        <Contacts />
    </div>
    <div class="conversation">
        <router-view></router-view>
    </div>
    
</template>
<script>
import Contacts from '../components/Contacts.vue';
export default {
    name: "ChatView",
    components:{
        Contacts, 
    }
};
</script>
<style scoped lang="scss">
.contacts{
    width: 200px;
    background-color: yellow;
}
.conversation{
    width: 500px;
    background-color: orange;
}

</style>