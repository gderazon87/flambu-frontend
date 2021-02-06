<template>
  <div id="app">
    <top-bar></top-bar>
    <router-view/>
    <Footer></Footer>
  </div>
</template>

<script>
import TopBar from '@/components/TopBar.vue'
import Footer from '@/components/Footer.vue'
export default {
  name: 'App',
  components: {
    TopBar,
    Footer
  }
}
</script>

<style lang="scss">
html , body {
  height: 100%;
}
#app {
  height: 100%;
  font-family: "Poppins";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

</style>
