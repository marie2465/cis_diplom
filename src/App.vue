<template>
  <div id="app" class="layout">
    <Notification/>
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
  },
  mounted() {
    let timeStamp = Date.now().toLocaleString()
    this.messages.unshift({name: 'Skills saved', context: 'success', id: timeStamp})
  }
}
</script>
