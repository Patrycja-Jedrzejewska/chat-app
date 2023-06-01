<template>
    <div class="message" :class="[ isCurrentUser ? 'message--current-user' : 'message--another-user' ]">
        <div v-if="!isCurrentUser" class="message__avatar">
            <Avatar :color="user.color" :initial="user.initial" />
        </div>
        <div v-if="!isCurrentUser" class="message__author" >{{ user.displayName }}</div>
        <div class="message__text" >{{ message.text }}</div>
        <div class="message__date">{{ message.createdAt }}</div>
    </div>
    
</template>
<script>
import { ref, computed } from 'vue';
import { auth } from '../firebase/index'
import Avatar from './Avatar.vue'
import { useUserStore } from '../store';

export default {
    components: {
        Avatar,
    },
    props: {
        message: {
            type: Object,
            required: true,
        },
    },
    setup(props) {
        const userStore = useUserStore();
        const user = ref({
            displayName: '',
            color: '',
            initial: '',
        });

        const fetchUserDetails = async () => {
            await userStore.fetchContactDetails([props.message.senderId]);
            const foundUser = userStore.users.find((user) => user.id === props.message.senderId);
            if (foundUser) {
                user.value = {
                    displayName: foundUser.displayName,
                    color: foundUser.color,
                    initial: foundUser.initial,
                };
            }
        };

        fetchUserDetails();

        const currentUser = computed(() => {
            const currentUser = auth.currentUser;
            return currentUser && currentUser.uid === props.message.senderId;
        });

        return {
            user,
            isCurrentUser: currentUser,
        };
    },
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