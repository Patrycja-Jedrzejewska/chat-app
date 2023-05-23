<template>
    <div class="message" >
       <!-- <img class="message__avatar" :src="message.userPhotoURL" alt="`Avatar of ${message.userName}" />-->
        <div class="message__author">{{ message.displayName }}</div>
        <div class="message__text">{{ message.text }}</div>
        <div class="message__date">{{ message.createdAt }}</div>
    </div>
</template>
<script>
export default {
    props:{
        message:{
            type: Object,
            required: true
        }
    },
}
</script>
<style>

</style>