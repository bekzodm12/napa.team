<template>
  <div id="app">
    <Header />
    <Header fixed />
    <MobileHeader />
    <router-view/>
    <Footer />
  </div>
</template>

<script>
  import Header from './components/layouts/Header'
  import MobileHeader from './components/layouts/MobileHeader'
  import Footer from './components/layouts/Footer'
  export default {
    name: "App",

    components: {
      Header, Footer, MobileHeader
    }
  }
</script>
