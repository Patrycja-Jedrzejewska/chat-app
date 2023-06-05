<template>
  <div class="chatview">
    <div class="chatview__contacts" v-if="showContacts">
      <Contacts @selectedContact="handleContactSelection" />
    </div>
    <div class="chatview__conversation" v-if="hasSelectedContact">
      <Conversation @goBack="goBack" />
    </div>
  </div>
</template>
<script>
import { mobileWidth } from "../utilities/breakpoints";
import Contacts from "../components/Contacts.vue";
import Conversation from "../components/Conversation.vue";
import { ref, onMounted, onBeforeMount, computed } from "vue";

export default {
  name: "ChatView",
  components: {
    Contacts,
    Conversation,
  },
  setup() {
    const windowWidth = ref(window.innerWidth);
    const selectedContactId = ref("");

    const handleResize = () => {
      windowWidth.value = window.innerWidth;
    };

    onMounted(() => {
      window.addEventListener("resize", handleResize);
    });

    onBeforeMount(() => {
      window.removeEventListener("resize", handleResize);
    });

    const handleContactSelection = (contactId) => {
      selectedContactId.value = contactId;
    };

    const hasSelectedContact = computed(() => {
      return selectedContactId.value !== "";
    });

    const goBack = () => {
      selectedContactId.value = "";
    };

    const showContacts = computed(() => {
      return (
        windowWidth.value >= mobileWidth ||
        (windowWidth.value < mobileWidth && selectedContactId.value === "")
      );
    });

    return {
      windowWidth,
      selectedContactId,
      goBack,
      showContacts,
      handleContactSelection,
      hasSelectedContact,
    };
  },
};
</script>
<style scoped lang="scss">
.chatview {
  display: flex;
  width: 100vw;
  &__conversation {
    @media only screen and (min-width: 768px) {
    }
  }
  &__contacts {
    display: flex;
    height: 100vh;
    width: 100vw;
    justify-content: center;
    @media only screen and (min-width: 768px) {
      width: 360px;
      justify-content: left;
    }
  }
}
</style>
