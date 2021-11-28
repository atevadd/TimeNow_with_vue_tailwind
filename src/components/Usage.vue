<template>
  <section
    id="usage"
    class="
      w-full
      h-full
      sm:w-9/12
      md:w-9/12
      lg:w-9/12
      mx-auto
      sm:py-16
      md:py-16
      lg:py-16
      px-4
      sm:px-0
      md:px-0
      lg:px-0
      py-10
      block
      sm:flex
      md:flex
      lg:flex
      sm:items-center
      md:items-center
      sm:justify-between
      md:justify-between
      lg:justify-between
    "
  >
    <div class="usage-people w-full sm:w-5/12 md:w-5/12 lg:w-5/12 mb-10 sm:mb-0 md:mb-0">
      <h2 class="text-2xl text-dark-blue font-bold mb-4">
        TimeNow is used by the most influential people.
      </h2>
      <div class="usage-users flex items-center justify-between">
        <img src="@/assets/images/UA1.png" alt="user avatar" class="w-9 h-9" />
        <img src="@/assets/images/UA2.png" alt="user avatar" class="w-9 h-9" />
        <img src="@/assets/images/UA3.png" alt="user avatar" class="w-9 h-9" />
        <img src="@/assets/images/UA4.png" alt="user avatar" class="w-9 h-9" />
        <img src="@/assets/images/UA5.png" alt="user avatar" class="w-9 h-9" />
        <img src="@/assets/images/UA6.png" alt="user avatar" class="w-9 h-9" />
        <img src="@/assets/images/UA7.png" alt="user avatar" class="w-9 h-9" />
        <img src="@/assets/images/UA8.png" alt="user avatar" class="w-9 h-9" />
        <br>
      </div>
    </div>
    <div class="usage-explanation sm:w-2/5 md:w-2/5 lg:w-5/12 w-full">
      <p class="mb-5 text-grey-200 text-sm">
        The most influential people on Facebook, Twitter, and Instagram are
        using TweetNow to schedule post when their followers are most active.
      </p>
      <p class="text-grey-200 text-sm pr-5">
        They generally recieve 25% more engagement than people who do not.
      </p>
    </div>
  </section>
</template>

<script>
export default {
  name: "Usage",
};
</script>

<style lang="scss" scoped>
</style>