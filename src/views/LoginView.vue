<template>
  <div class="form-wrapper">
    <div class="form-card">
      <form class="form" @submit.prevent="login">
        <h1 class="form__headline">Log in</h1>
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
          <div v-if="$v.email.$error" class="invalid-feedback form__error">
            {{ $v.email.$errors[0].$message }}
          </div>
        </section>
        <!-- Password input -->
        <section class="form-floating form__group">
          <input
            id="password"
            v-model="password"
            type="password"
            autocomplete="current-password"
            required
            :class="{ 'is-invalid': $v.password.$error }"
            placeholder="Password"
            class="form-control form__input form__input--password"
            @keyup="$v.password.$touch()"
          />
          <label for="password" class="form__label">Password</label>
          <div v-if="$v.password.$error" class="invalid-feedback form__error">
            {{ $v.password.$errors[0].$message }}
          </div>
        </section>
        <section class="form__group">
          <div v-if="error" class="alert alert-danger form__alert">
            {{ error.message }}
          </div>
        </section>
        <section class="form__group form__group--buttons">
          <!-- Submit button -->
          <button type="submit" :disabled="$v.$invalid" class="btn-primary btn btn--submit">Sign in</button>

          <div class="divider">
            <hr class="hr" />
          </div>

          <!-- Google button -->
          <button class="btn-primary btn btn--google" @click="GoogleSignIn">
            <img src="../assets/google-icon.svg" alt="Google icon" class="google-icon" />
            Sign in with google
          </button>

          <!-- Register button -->
          <div class="form__link form__link--register">
            <p>
              Not a member?
              <router-link to="/register" class="link">Register</router-link>
            </p>
          </div>
        </section>
      </form>
    </div>
  </div>
</template>
<script>
import { ref, computed } from 'vue'
import { useUserStore } from '../store/index.js'
import { useVuelidate } from '@vuelidate/core'
import { required } from '@vuelidate/validators'
export default {
  name: 'LoginView',
  setup() {
    const email = ref('')
    const password = ref('')
    const store = useUserStore()
    const error = ref(null)

    const rules = computed(() => ({
      email: {
        required,
      },
      password: {
        required,
      },
    }))
    const $v = useVuelidate(rules, { email, password })

    const login = async () => {
      error.value = null
      try {
        await store.login(email.value, password.value)
      } catch (err) {
        error.value = err
      }
    }

    const GoogleSignIn = () => {
      store.GoogleLogin()
    }

    return { login, email, password, error, store, GoogleSignIn, $v }
  },
}
</script>
<style scoped lang="scss">
.btn--google {
  display: flex;
  align-items: center;
  justify-content: center;
}
.google-icon {
  width: 20px;
  margin-right: 10px;
}
</style>
