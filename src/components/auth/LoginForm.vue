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
    login() {
      let login = this.formData.login
      let password = this.formData.password
      if (login === '1' && password === '1234') {
        this.$router.push('/')
        console.log('success')
      } else {
        console.log(login + ' ' + password + ' = error')
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
