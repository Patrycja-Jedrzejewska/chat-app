<template>
    <div class="message" :class="[ isCurrentUser ? 'message--current-user' : 'message--another-user' ]">
        <div class="message__avatar">
            <Avatar :color="message.color" :initial="message.initial" />
        </div>
        <div class="message__author" v-if="!isCurrentUser" >{{ message.displayName }}</div>
        <div class="message__text" >{{ message.text }}</div>
        <div class="message__date">{{ message.createdAt }}</div>
    </div>
</template>
<script>
import Avatar from './Avatar.vue'
import { auth } from '../firebase/index'
export default {
    components: {
        Avatar,
    },
    props:{
        message:{
            type: Object,
            required: true
        }
    },
    computed: {
        isCurrentUser() {
            const currentUser = auth.currentUser;
            return currentUser.uid == this.message.userID
        },
    },
    setup(props){
        function getUserById(userID){
            return props.users.find((user) => user.id ===userID) || null
        }
        return{
            getUserById
        }
    }
}
</script>
<style scoped lang="scss">
.message--current-user {
    background-color: green ;
}
.message--another-user {
    background-color: purple;
}
</style>