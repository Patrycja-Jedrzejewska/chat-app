<template>
    <div class="contacts">
        <ul v-if="users.length>0" class="contacts__list">
            <li v-for="user in users" :key="user.id" class="contact">
                <router-link :to="`/conversation/${user.id}`" class="link">
                    <div class="contact__avatar">
                        <Avatar :color="user.color" :initial="user.initial" />
                    </div>
                    <div class="contact__info">
                        <div class="contact__info--displayName">{{ user.displayName }}</div>
                        <div class="contact__info--email">{{ user.email }}</div>
                    </div>
                </router-link>
            </li>
        </ul>
        <div v-else class="contacts__emptylist">Brak kontaktów</div>
    </div>
</template>
<script>
import Avatar from '../components/Avatar.vue'
import { computed, onMounted, ref } from 'vue';
import { defineComponent } from 'vue';
import { useUserStore } from '../store';

export default defineComponent({
    components:{
        Avatar
    },
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
.contacts{
    width: 100%;  
    @media only screen and (min-width: 600px) {
         width: 100%; 
        
    }
        
        /* Medium devices (landscape tablets, 768px and up) */
    @media only screen and (min-width: 768px) {
            
            
    }
     

    &__list{
        list-style: none;
        padding-left: 5px;
        padding-right: 5px;
        margin-top: 20px; 

        .contact{
            display: flex;
            align-items: center;
            align-content: center;
            padding: 10px;

            height: 70px;


            .link{
                display: flex;
                align-items: center;
                color: #005B5E;
                text-decoration: none;
                background-color: #FFA17A;
                border-radius: 20px;
                padding: 5px 10px;
                width: 100%;

                &:hover{
                    box-shadow: 0 0 0.5rem 0.1rem rgba(0, 91, 94, 0.25);

                }
            }
            &__avatar{
                margin-right: 10px;
                scale: 110%;
            }
            &__info{
                display: flex;
                flex-direction: column;

                &--displayName{
                    font-weight: bold;

                }
                &--email{
                    color: #00A9A5;

                }
            }
           
        }
    }
    &__emptylist{
        text-align: center;
        color: gray
    }
}

</style>