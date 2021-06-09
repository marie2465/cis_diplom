<template>
  <div class="hello" id="app">
    <div class="warning" v-if="!isValid">
      Warning
    </div>
    <div class="form">
      <form action="" class="login-form">
        <label for="username">Username</label>
        <input type="text" id="username" required ref="username" v-model="formData.login">
        <label for="password">Password</label>
        <input type="password" id="password" required ref="password" v-model="formData.password">
        <button type="submit" @click.prevent="checkValid(); login()">Login</button>
      </form>
    </div>
  </div>
</template>

<script>
import {mapActions} from 'vuex'

export default {
  name: 'LoginForm',
  data: function () {
    return {
      isValid: true,
      formData: {
        login: '',
        password: ''
      }
    }
  },
  methods: {
    checkValid() {
      if (this.$refs.username.value === '') {
        this.isValid = false
      } else if (this.$refs.password.value === '') {
        this.isValid = false
      } else {
        this.isValid = true
      }
    },
    ...mapActions([
      'login'
    ]),
    login() {
      {
        let email = this.formData.login
        let password = this.formData.password
        this.$store.dispatch('login', {email, password})
          .then(() => this.$router.push('/'))
          .catch(
            err => console.log(err)
          )
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
