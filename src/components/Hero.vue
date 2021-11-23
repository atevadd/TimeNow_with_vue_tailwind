<template>
  <section
    id="hero"
    class=" w-9/12 h-screen flex items-center m-auto "
  >
    <div class="hero-content w-1/2">
      <h1 class="text-dark-blue text-5xl font-bold leading-tight">
        Post when your audience is most active.
      </h1>
      <p class="text-grey-200 my-2 pr-16">
        With TimeNow automatically schdule your posts on Twitter, Linkedln, and
        Instagram to post when your followers are most active.
      </p>
      <div class="hero-cta mt-4">
        <a
          href="#"
          class="cta-primary bg-dark-blue py-4 px-5 inline-block rounded text-white font-medium hover:bg-opacity-95 transition"
          >Start scheduling</a
        >
        <a href="#" class="cta-secondary text-dark-blue py-4 px-7 inline-block font-bold text-opacity-80"
          >View demo</a
        >
      </div>
      <p class="benefit mt-5 text-grey-200">
          <img src="@/assets/images/Shield.svg" alt="" class="inline-block mr-3">
          TimeNow does not sell your data. <a href="#" class="font-medium border-b-2 border-dark-blue text-dark-blue opacity-90">Learn more</a>
      </p>
    </div>

    <div class="hero-image absolute top-0 right-0 w-1/2 flex items-center justify-center p-20 bg-light-blue z-10">
        <img src="@/assets/images/Mockup.png" alt="" class="w-full h-auto ">
    </div>
  </section>
</template>

<script>
export default {
  name: "Hero",
};
</script>

<style lang="scss" scoped>
.hero-image{
    height: 115vh;
}
</style>