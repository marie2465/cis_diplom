<template>
  <div class="auth">
    <LoginForm/>
  </div>
</template>

<script>
import LoginForm from '@/components/auth/LoginForm'

export default {
  name: 'Auth',
  components: { LoginForm }
}
</script>
