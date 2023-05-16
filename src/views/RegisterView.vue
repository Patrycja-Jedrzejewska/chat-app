<template>
    <div>
      <div class="card">
        <form class="form" @submit.prevent="register">
          <h1 class="headline">Register</h1>
          <!-- Email input -->
          <section class="form__group">
            <label for="email">Email address</label>
            <input
              type="text"
              autocomplete="email"
              required
              id="email"
              v-model="email"
              @keyup="$v.email.$touch()"
              class="form__input form__input--email"
            />
            <div v-if="$v.email.$error" class="form__error">{{ $v.email.$errors[0].$message }}</div>
          </section>
          <!-- Password input -->
          <section class="form__group">
            <label for="password">Password</label>
            <input
              type="password"
              autocomplete="new-password"
              id="password"
              v-model="password"
              @keyup="$v.password.$touch()"
              class="form__input form__input--password"
            />
            <div v-if="$v.password.$error" class="form__error">{{ $v.password.$errors[0].$message }}</div>
          </section>
          <!-- Password check -->
          <section class="form__group">
            <label for="cPassword">Confirm Password</label>
            <input
              type="password"
              autocomplete="off"
              required
              id="cPassword"
              v-model="cPassword"
              @keyup="$v.cPassword.$touch()"
              class="form__input form__input--cPassword"
            />
            <div v-if="$v.cPassword.$error || email_valid" class="form__error">{{ $v.cPassword.$errors[0].$message }} {{ email.valid }}</div>
          </section>
          <section class="form__group">
            <div v-if="error" class="form__error">{{ error.message }}</div>
          </section>
          <!-- Submit button -->
          <button
            type="submit"
            :disabled="$v.$invalid"
            class="btn btn--submit"
          >
            Sign up
          </button>
          <!-- Login button -->
          <p class="form__link form__link--login">
            Already have an account?
            <router-link to="/login" class="link">Login</router-link>
          </p>
        </form>
      </div>
    </div>
</template>
<script>
    import { ref, computed } from "vue";
    import { useUserStore } from "../store/index.js";
    import { EMAIL_VALIDATE, PASSWORD_VALIDATE } from "../utilities/rules.js";
    import { useVuelidate } from '@vuelidate/core'
    import {helpers, required, email, sameAs } from '@vuelidate/validators'
    export default {
        name: "RegisterView",
        setup() {
            const email = ref("");
            const password = ref("");
            const cPassword = ref("");
            const error = ref(null);
            const store = useUserStore();
        
            const emailRgx = helpers.regex(EMAIL_VALIDATE.regex);
            const passwordRgx = helpers.regex(PASSWORD_VALIDATE.regex);

            const rules = computed(() => ({
                email: {
                    required,
                    emailRgx: helpers.withMessage(EMAIL_VALIDATE.error,emailRgx)
                },
                password: {
                    required,
                    passwordRgx: helpers.withMessage(PASSWORD_VALIDATE.error, passwordRgx)
                },
                cPassword:{
                    required,
                    sameAs: helpers.withMessage(`Passwords don't match. Please enter the same password in both password fields`, sameAs(password)) 
                },
            }))
        const $v = useVuelidate(rules, { email, password,cPassword })

        const register = async () =>{
            error.value = null;
            try{
                await store.signup(email.value, password.value);
            }catch(err){
                error.value=err;
            }
        }
        return {email, password, cPassword, emailRgx, passwordRgx, $v, register, error}
        },
    };
</script>
<style scoped lang="scss">

</style>