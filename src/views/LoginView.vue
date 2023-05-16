<template>
    <div class="wraper">
      <div class="card">
        <form class="form" @submit.prevent="login">
          <h1 class="headline">Log in</h1>
          <!-- Email input -->
          <section class="form__group">
            <label for="email" class="form__label">Email address</label>
            <input
              type="text"
              autocomplete="email"
              required
              id="email"
              v-model="email"
              class="form__input form__input--email"
            />
            <div v-if="errors.email" class="error">{{ errors.email }}</div>
          </section>
          <!-- Password input -->
          <section class="form__group">
            <label for="password" class="form__label">Password</label>
            <input
              type="password"
              autocomplete="current-password"
              required
              id="password"
              v-model="password"
              class="form__input form__input--password"
            />
            <div v-if="errors.password" class="error">{{ errors.password }}</div>
          </section>
          <section class="form__group">
            <div v-if="error" class="error">{{ error.message }}</div>
          </section>
          <!-- Submit button -->
          <button
            type="submit"
            class="btn btn--submit"
          >
            Sign in
          </button>
  
          <!-- Register button -->
          <div class="form__link form__link--register">
            <p>
              Not a member?
              <router-link to="/register" class="link">Register</router-link>
            </p>
          </div>
        </form>
      </div>
    </div>
  </template>
  <script>
  import { ref } from "vue";
  import { auth } from '@/firebase';
  import { useUserStore } from "../store/index.js";
  import ErrorMessage from "../components/ErrorMessage.vue";
  export default {
    name: "LoginView",
    setup() {
      const email = ref("");
      const password = ref("");
      const store = useUserStore();
      const error = ref(null);
      const errors = ref({});

      const login = async () => {
      errors.value = {};
      error.value = null;

      if (!email.value) {
        errors.value.email = 'Email is required';
      }

      if (!password.value) {
        errors.value.password = 'Password is required';
      }

      if (Object.keys(errors.value).length) {
        return;
      }

      try {
        await store.login(email.value, password.value);
      } catch (err) {
        error.value = err;
      }
    };
      return { login, email, password, error, errors, store };
    },
  };
  </script>
<style scoped lang="scss">

</style>