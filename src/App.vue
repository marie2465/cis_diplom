<template>
  <div id="app" class="layout">
    <Header/>
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
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

export default {
  name: 'App',
  components: {
    Footer,
    Header,
    Navbar
  }
}
</script>
