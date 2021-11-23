<template>
<Navbar />
<main class="main-area">
<Hero />
<Usage />
</main>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Hero from '@/components/Hero.vue'
import Usage from '@/components/Usage.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    Hero,
    Usage,
  }
}
</script>

<style lang="scss">

*{
  font-family: "Inter", sans-serif;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
