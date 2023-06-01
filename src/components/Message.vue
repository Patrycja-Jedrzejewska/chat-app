<template>
    <div class="message" :class="[ isCurrentUser ? 'message--current-user' : 'message--another-user' ]">
        <div v-if="!isCurrentUser" class="message__avatar">
            <Avatar :color="user.color" :initial="user.initial" />
        </div>
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
.message{
    display: flex;
    align-items: center;
    margin: 10px;
    flex-wrap: wrap;
    &__avatar{
        margin-right: 10px;
    }
    &__text{
        background-color: #fff;
        font-size: 20px;
        padding: 5px 15px;
        min-width: 150px;
        max-width: 700px;
        word-wrap: break-word;
        border-radius: 15px;
    }
    &__date{
        font-size: 14px;
        width: 100%;
    }
    
}

.message--current-user {
    flex-direction: row-reverse;
    .message{
        &__text{
            text-align: right;
            background-color: #affffb;
        }
        &__date{
            text-align: right;
        }
    }
}
.message--another-user {
    .message{
        &__text{
            background-color: #00a1a6;
        }
    }
}
</style>