<template>
    <div class="contacts">
      <div class="contacts__search">
        <img src="../assets/search-icon.svg" alt="Search icon" class="search__icon">
        <input v-model="searchText" type="text" placeholder="Search contact" class="search__input"/>
      </div>
      <ul v-if="filteredContacts.length > 0" class="contacts__list">
        <li v-for="contact in filteredContacts" :key="contact.id" class="contact" :class="{ 'contact--selected': contact.id === selectedContactId }">
          <router-link :to="`/conversation/${contact.id}`" class="link">
            <div class="contact__avatar">
              <Avatar :color="contact.color" :initial="contact.initial" />
            </div>
            <div class="contact__info">
              <div class="contact__info--displayName">{{ contact.displayName }}</div>
              <div class="contact__info--email">{{ contact.email }}</div>
            </div>
          </router-link>
        </li>
      </ul>
      <div v-else class="contacts__emptylist">Brak kontaktów</div>
    </div>
  </template>
<script>
import Avatar from '../components/Avatar.vue'
import { onMounted, ref, computed, getCurrentInstance  } from 'vue';
import { defineComponent } from 'vue';
import { useUserStore } from '../store';
import { useRouter } from 'vue-router';

export default defineComponent({
  components: {
    Avatar
  },
  setup() {
    const userStore = useUserStore();
    const contacts = ref([]);
    const contactsLoaded = ref(false);
    const router = useRouter();
    const selectedContactId = ref('');
    const { emit } = getCurrentInstance();
    const searchText = ref('');

    onMounted(async () => {
      await userStore.getContactIds();
      await userStore.fetchContactDetails(userStore.contacts);
      contacts.value = [...userStore.users];
      contactsLoaded.value = true;
    });

    const filteredContacts = computed(() => {
      if (!searchText.value) {
        return contacts.value;
      } else {
        const lowerCaseSearchText = searchText.value.toLowerCase();
        return contacts.value.filter((contact) => {
          const displayName = contact.displayName.toLowerCase();
          const email = contact.email.toLowerCase();
          return displayName.includes(lowerCaseSearchText) || email.includes(lowerCaseSearchText);
        });
      }
    });

    const emitSelectedContact =()=>{
        emit('selected-contact', selectedContactId.value);
    }
    router.afterEach((to) => {
      const contactId = to.params.contactId;
      selectedContactId.value = contactId;
      emitSelectedContact()
    });
   
    return {
      selectedContactId,
      searchText,
      filteredContacts,
    };
  },
});
</script>
<style scoped lang="scss">
.contacts{
    display: flex;
    flex-direction: column;
    background-color: #ffffff;
    overflow-y: auto;
    @media only screen and (min-width: 600px) {
         width: 100%; 
    }
    &__search{
        display: flex;
        align-self: center;
        margin-top: 15px;
        margin-bottom: 5px;
        border-radius: 45px;
        height: 35px;
        width: 300px;
        background-color: #00A9A5;
        .search{
            &__input{
                width: 220px;
                margin-left: 20px;
                background-color: #00A9A5;
                border-style: none;
                color: #fff;
                &::placeholder{
                    color: #fff;
                }
                &:focus{
                    outline:none;
                }
            }
            
            &__icon{
                width: 25px;
                margin-left: 10px;
                
            }
        }
    }
    
    &__list{
        
        list-style: none;
        padding-left: 5px;
        padding-right: 5px;
        margin-top: 0px; 
        .contact{
            display: flex;
            align-items: center;
            align-content: center;
            margin: 5px 15px;
            height: 70px;
            padding: 5px 10px;
            background-color: #ffffff;
            border-radius: 20px;
            &--selected{
                background-color: #f98f62 !important;
                .contact__info{
                &--email{
                    color: #fff;
                }}
            }
            &:hover{
                box-shadow: 0 0 0.5rem 0.1rem rgba(0, 91, 94, 0.25);
            }
            .link{
                display: flex;
                align-items: center;
                color: #005B5E;
                text-decoration: none;
                width: 100%;
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
                    font-size: 17px;
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