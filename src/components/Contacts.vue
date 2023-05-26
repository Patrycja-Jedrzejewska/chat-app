<template>
    <div class="contacts">
        <ul v-if="users.length>0" class="contacts__list">
            <li v-for="user in users" :key="user.id" class="contact">
                <router-link :to="`/conversation/${user.id}`" class="contact--link">
                    <div class="contact__displayName">{{ user.displayName }}</div>
                    <div class="contact__email">{{ user.email }}</div>
                </router-link>
            </li>
        </ul>
        <div v-else class="contacts__info">Brak kontaktów</div>
    </div>
</template>
<script>
import { computed, onMounted, ref } from 'vue';
import { defineComponent } from 'vue';
import { useUserStore } from '../store';

export default defineComponent({
  setup() {
    const userStore = useUserStore();
    const users = computed(() => userStore.users);

    onMounted(async () => {
      await userStore.getContactIds();
      await userStore.fetchContactDetails(userStore.contacts);
    });

    return {
      users,
    };
  },
});
</script>
<style scoped lang="scss">

</style>