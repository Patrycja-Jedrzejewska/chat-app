<template>
    <div class="message" :class="[ isCurrentUser ? 'message--current-user' : 'message--another-user' ]">
       <!-- <img class="message__avatar" :src="message.userPhotoURL" alt="`Avatar of ${message.userName}" />-->
        <div class="message__author" v-if="!isCurrentUser" >{{ message.displayName }}</div>
        <div class="message__text" >{{ message.text }}</div>
        <div class="message__date">{{ message.createdAt }}</div>
    </div>
</template>
<script>
import { auth } from '../firebase/index'
export default {
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