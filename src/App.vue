<template>
  <Navbar />
  <router-view/>
</template>

<script>
import Navbar from "@/components/Navbar.vue";

export default {
  name: "App",
  components:{
    Navbar,
  }
}
</script>

<style lang="scss">
* {
  font-family: "Inter", sans-serif;
}
body {
  overflow-x: hidden;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>