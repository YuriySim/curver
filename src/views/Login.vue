<template>
  <form class="card auth-card" @submit.prevent="submitHandler">
    <div class="card-content">
      <span class="card-title">Login to the system:</span>

      <div class="input-field">
        <input
            id="login"
            type="text"
            autocomplete="off"
            v-model.trim="v$.login.$model"
            :class="{invalid: v$.login.$dirty && v$.login.$errors.length}"
        >

        <label for="email">
          Login
        </label>

        <div v-for="error of v$.login.$errors" :key="error.$uid">
          <small
          class="helper-text invalid"
          v-if="v$.login.$dirty && v$.login.$errors.length"
          >
            {{ error.$message }}
          </small>
        </div>
      </div>

      <div class="input-field">
        <input
            id="password"
            type="password"
            autocomplete="off"
            v-model.trim="v$.password.$model"
            :class="{invalid: v$.password.$dirty && v$.password.$errors.length}"
        >

        <label for="password">
          Password
        </label>

        <div v-for="error of v$.password.$errors" :key="error.$uid">
          <small
          class="helper-text invalid"
          v-if="v$.password.$dirty && v$.password.$errors.length"
          >
            {{ error.$message }}
          </small>
        </div>
      </div>

      <div class="card-action">
        <div>
          <button
              class="btn waves-effect waves-light"
              type="submit"
          >
            Login
            <i class="material-icons right">send</i>
          </button>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
import useVuelidate from '@vuelidate/core'
import { required, minLength } from '@vuelidate/validators'

import messages from '@/utils/messages'

export default {
  name: 'Login',

  setup () {
    return { v$: useVuelidate() }
  },

  data () {
    return {
      login: '',
      password: '',
    }
  },

  //Validation conditions
  validations () {
    return{
      login: { required },
      password: { required, minLength: minLength(6)  }
    }
  },

  mounted() {
    //Display a message using query parameter
    if (messages[this.$route.query.message]) {
      this.$message(messages[this.$route.query.message])
    }
  },

  methods: {
    //This method sent POST-requestion to backend when performing validation
    async submitHandler() {
      if (this.v$.$invalid) {
        this.v$.$touch()
        return
      }

      const formData = {
        username: this.login,
        password: this.password
      }

      try {
        await this.$store.dispatch('login', formData)
      }catch (error) {''}
    }
  },
}
</script>
