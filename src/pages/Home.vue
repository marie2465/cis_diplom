<template>
  <div class="home">
    This is a home page
    <LoginForm/>
  </div>
</template>

<script>
import LoginForm from "../components/auth/LoginForm";
export default {
  name: 'Home',
  components: {LoginForm}
}
</script>
