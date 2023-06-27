<template>
  <div class="form-wrapper">
    <div class="form-card">
      <form class="form" @submit.prevent="register">
        <h1 class="form__headline">Register</h1>
        <!-- Email input -->
        <section class="form-floating form__group">
          <input
            id="email"
            v-model="email"
            type="email"
            autocomplete="email"
            placeholder="name@example.com"
            required
            :class="{ 'is-invalid': $v.email.$error }"
            class="form-control form__input form__input--email"
            @keyup="$v.email.$touch()"
          />
          <label for="email" class="form-label form__label">Email address</label>
          <div v-if="$v?.email?.$errors?.length" class="invalid-feedback form__error">
            {{ $v.email.$errors[0].$message }}
          </div>
        </section>
        <!-- Password input -->
        <section class="form-floating form__group">
          <input
            id="password"
            v-model="password"
            type="password"
            autocomplete="new-password"
            placeholder="Password"
            :class="{ 'is-invalid': $v.password.$error }"
            class="form-control form__input form__input--password"
            @keyup="$v.password.$touch()"
          />
          <label for="password" class="form__label">Password</label>
          <div v-if="$v?.password?.$errors?.length" class="invalid-feedback form__error">
            {{ $v.password.$errors[0].$message }}
          </div>
        </section>
        <!-- Password check -->
        <section class="form-floating form__group">
          <input
            id="cPassword"
            v-model="cPassword"
            type="password"
            autocomplete="off"
            placeholder="Confirm password"
            required
            :class="{ 'is-invalid': $v.cPassword.$error }"
            class="form-control form__input form__input--cPassword"
            @keyup="$v.cPassword.$touch()"
          />
          <label for="cPassword" class="form__label">Confirm Password</label>
          <div v-if="$v?.cPassword?.$errors?.length" class="invalid-feedback form__error">
            {{ $v.cPassword.$errors[0].$message }}
          </div>
        </section>
        <section class="form__group">
          <div v-if="error?.message" class="alert alert-danger form__alert">
            {{ error.message }}
          </div>
        </section>
        <!-- Submit button -->
        <button type="submit" :disabled="$v.$invalid" class="btn-primary btn btn--submit">Sign up</button>
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
import { ref, computed } from 'vue'
import { useUserStore } from '../store/UserStore.js'
import { EMAIL_VALIDATE, PASSWORD_VALIDATE } from '../utilities/rules.js'
import { useVuelidate } from '@vuelidate/core'
import { helpers, required, sameAs } from '@vuelidate/validators'
export default {
  name: 'RegisterView',
  setup() {
    const email = ref('')
    const password = ref('')
    const cPassword = ref('')
    const error = ref(null)
    const store = useUserStore()

    const emailRgx = helpers.regex(EMAIL_VALIDATE.regex)
    const passwordRgx = helpers.regex(PASSWORD_VALIDATE.regex)

    const rules = computed(() => ({
      email: {
        required,
        emailRgx: helpers.withMessage(EMAIL_VALIDATE.error, emailRgx),
      },
      password: {
        required,
        passwordRgx: helpers.withMessage(PASSWORD_VALIDATE.error, passwordRgx),
      },
      cPassword: {
        required,
        sameAs: helpers.withMessage(
          `Passwords don't match. Please enter the same password in both password fields`,
          sameAs(password)
        ),
      },
    }))
    const $v = useVuelidate(rules, { email, password, cPassword })

    const register = async () => {
      error.value = null
      try {
        await store.signup(email.value, password.value)
      } catch (err) {
        error.value = err
      }
    }
    return {
      email,
      password,
      cPassword,
      emailRgx,
      passwordRgx,
      $v,
      register,
      error,
    }
  },
}
</script>
<style scoped lang="scss"></style>
