<template>
  <div id="app" class="layout">
    <Header/>
    <Navbar/>
    <div class="layout__page page">
      <div class="page__content">
        <Import/>
      </div>
    </div>
    <Footer/>
  </div>
</template>

<script>

import Navbar from '@/components/layout/Navbar'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Import from './components/competition/ImportForm'

export default {
  name: 'App',
  components: {
    Import,
    Footer,
    Header,
    Navbar
  }
}
</script>
