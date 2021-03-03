<template>
  <div id="app" class="container">
    <div class="header">
      <div class="header__title"></div>
      <div class="header__logo">
<!--        <img src="./assets/images/logo.svg" alt="logo">-->
      </div>
    </div>
    <Navbar/>
  </div>
</template>

<script>

import Navbar from '@/components/Navbar'
export default {
  name: 'App',
  components: { Navbar }
}
</script>
