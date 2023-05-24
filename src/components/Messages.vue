<template>
    <Message v-for="message in messages" :key="message.id" :message="message" />
</template>
<script >

import { ref, onMounted } from 'vue'
import { getMessages } from '../chat/index'
import Message from './Message.vue'

export default{
    components: { Message },
    setup(){
        const messages = ref([])

        onMounted(() => {
            getMessages(messages)
        })
        return{
            messages
        }
    }
}
</script>