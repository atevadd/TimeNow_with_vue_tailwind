<template>
  <main class="main-area">
    <Hero />
    <Usage />
    <Feature />
    <Footer />
  </main>
</template>

<script>
import Hero from "@/components/Hero.vue";
import Usage from "@/components/Usage.vue";
import Feature from "@/components/Feature.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: 'Home',
    components: {
    Hero,
    Usage,
    Feature,
    Footer,
  },
}
</script>
