<template>
  <div id="app" class="layout">
    <Navbar/>
    <div class="layout__page page">
      <div class="page__content">
        <router-view></router-view>
      </div>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

export default {
  name: 'AuthorizedLayout',
  components: {
    Footer,
    Navbar
  }
}
</script>
