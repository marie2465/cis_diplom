<template>
  <div id="app" class="layout">
    <Notification :messages="[{name: 'Skills saved', context: 'success', id: 1}]" />
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
import Notification from "@/components/competition/component/Notification";

export default {
  name: 'App',
  components: {
    Notification,
    Footer,
    Header,
    Navbar
  }
}
</script>
