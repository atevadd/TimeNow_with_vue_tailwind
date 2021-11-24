<template>
  <Navbar />
  <main class="main-area">
    <Hero />
    <Usage />
    <Feature />
    <Footer />
  </main>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Hero from "@/components/Hero.vue";
import Usage from "@/components/Usage.vue";
import Feature from "@/components/Feature.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "App",
  components: {
    Navbar,
    Hero,
    Usage,
    Feature,
    Footer,
  },
};
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
