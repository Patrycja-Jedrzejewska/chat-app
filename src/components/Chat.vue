<template>
    <div class="chat">
        <div class="chat__messages">
            <Messages />
        </div>
        <div class="chat__new-message">
            <NewMessage />
        </div>
    </div>
</template>
<script>
import Messages from './Messages.vue'
import NewMessage from './NewMessage.vue'

export default{
    components: { Messages, NewMessage },
}
</script>
<style scoped lang="scss">

</style>