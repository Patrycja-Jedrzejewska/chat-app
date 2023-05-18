<template>
    <div>
      <div class="card">
        <form class="form" @submit.prevent="register">
          <h1 class="form__headline">Register</h1>
          <!-- Email input -->
          <section class="form-floating form__group">
            <input
              type="email"
              autocomplete="email"
              placeholder="name@example.com"
              required
              id="email"
              v-bind:class="{ 'is-invalid': $v.email.$error }"
              v-model="email"
              @keyup="$v.email.$touch()"
              class="form-control form__input form__input--email"
            />
            <label for="email" class="form-label form__label">Email address</label>
            <div v-if="$v.email.$error" class="invalid-feedback form__error">{{ $v.email.$errors[0].$message }}</div>
          </section>
          <!-- Password input -->
          <section class="form-floating form__group">
            <input
              type="password"
              autocomplete="new-password"
              placeholder="Password"
              id="password"
              v-bind:class="{ 'is-invalid': $v.password.$error }"
              v-model="password"
              @keyup="$v.password.$touch()"
              class="form-control form__input form__input--password"
            />
            <label for="password" class="form__label">Password</label>
            <div v-if="$v.password.$error" class="invalid-feedback form__error">{{ $v.password.$errors[0].$message }}</div>
          </section>
          <!-- Password check -->
          <section class="form-floating form__group">
            <input
              type="password"
              autocomplete="off"
              placeholder="Confirm password"
              required
              id="cPassword"
              v-bind:class="{ 'is-invalid': $v.cPassword.$error }"
              v-model="cPassword"
              @keyup="$v.cPassword.$touch()"
              class="form-control form__input form__input--cPassword"
            />
            <label for="cPassword" class="form__label">Confirm Password</label>
            <div v-if="$v.cPassword.$error" class="invalid-feedback form__error">{{ $v.cPassword.$errors[0].$message }}</div>
          </section>
          <section class="form__group">
            <div v-if="error" class="alert alert-danger form__alert">{{ error.message }}</div>
          </section>
          <!-- Submit button -->
          <button
            type="submit"
            :disabled="$v.$invalid"
            class="btn-primary btn btn--submit"
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
        const $v = useVuelidate(rules, { email, password, cPassword })

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