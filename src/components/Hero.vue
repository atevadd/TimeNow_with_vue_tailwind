<template>
  <section
    id="hero"
    class="
      w-full
      sm:w-9/12
      md:w-9/12
      h-screen
      block
      sm:flex
      md:flex
      lg:flex
      items-center
      sm:m-auto
      md:mx-auto
    "
  >
    <div class="hero-content w-full sm:w-1/2 md:w-1/2 py-6 px-4">
      <h1
        class="
          text-dark-blue text-3xl
          md:text-5xl
          lg:text-5xl
          font-bold
          leading-tight
        "
      >
        Post when your audience is most active.
      </h1>
      <p
        class="
          text-grey-200 text-sm
          md:text-base
          lg:text-base
          my-2
          md:pr-16
          lg:pr-16
        "
      >
        With TimeNow automatically schdule your posts on Twitter, Linkedln, and
        Instagram to post when your followers are most active.
      </p>
      <div class="hero-cta mt-4">
        <a
          href="#"
          class="
            cta-primary
            bg-dark-blue
            py-4
            px-5
            inline-block
            rounded
            text-white
            font-bold
            hover:bg-opacity-95
            transition
          "
          >Start scheduling</a
        >
        <a
          href="#"
          class="
            cta-secondary
            text-dark-blue
            py-4
            px-7
            inline-block
            font-bold
            text-opacity-80
            rounded
          "
          >View demo</a
        >
      </div>
      <p class="benefit mt-5 text-grey-200">
        <img
          src="@/assets/images/Shield.svg"
          alt=""
          class="inline-block mr-3"
        />
        TimeNow does not sell your data.
        <a
          href="#"
          class="
            font-medium
            border-b-2 border-dark-blue
            text-dark-blue
            opacity-90
            ml-9
            sm:m-0
            md:m-0
          "
          >Learn more</a
        >
      </p>
    </div>

    <div
      class="
        hero-image
        relative
        sm:absolute
        md:absolute
        lg:absolute
        md:top-0
        right-0
        w-full
        sm:w-1/2
        md:w-1/2
        
        flex
        items-center
        justify-center
        p-8
        sm:p-20
        md:p-20
        lg:p-20
        bg-light-blue
        z-10
      "
    >
      <img
        src="@/assets/images/Mockup.png"
        alt=""
        class="
          w-full
          sm:w-full
          md:w-full
          lg:w-full
          h-full
          sm:h-auto
          md:h-auto
          lg:h-auto
        "
      />
    </div>
  </section>
</template>

<script>
export default {
  name: "Hero",
};
</script>

<style lang="scss" scoped>
.hero-image {
  height: 115vh;

  @media screen and (max-width: 375px) {
    height: 100%;
  }

  img {
    @media screen and (max-width: 375px) {
      object-fit: contain;
    }
  }
}
</style>
