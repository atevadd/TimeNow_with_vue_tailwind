<template>
  <footer id="footer" class="w-full sm:w-9/12 md:w-9/12 lg:w-9/12 mx-auto px-4 sm:px-0 md:px-0 py-8 sm:py-16 md:py-16 lg:py-16 relative block">
    <div class="footer-logo mb-6">
      <img src="../assets/images/Logo.svg" alt="Time Now logo" />
    </div>
    <div class="footer-menu w-full flex items-center justify-between flex-wrap">
      <div class="column w-6/12 sm:w-min md:w-max">
        <h4 class="text-black text-lg font-bold mb-4">Product</h4>
        <a href="#" class="block text-grey-200 mb-2 font-medium">Homepage</a>
        <a href="#" class="block text-grey-200 mb-2 font-medium">Pricing</a>
        <a href="#" class="block text-grey-200 mb-2 font-medium">Features</a>
      </div>
      <div class="column w-6/12 sm:w-min md:w-max">
        <h4 class="text-black text-lg font-bold mb-4">Help</h4>
        <a href="#" class="block font-medium text-grey-200 mb-2">Live chat</a>
        <a href="#" class="block font-medium text-grey-200 mb-2">Send Email</a>
        <a href="#" class="block font-medium text-grey-200 mb-2">FAQ</a>
      </div>
      <div class="column mt-2 sm:mt-0 md:mt-0">
        <h4 class="text-black text-lg font-bold mb-4">Company</h4>
        <a href="#" class="block text-grey-200 font-medium mb-2">About</a>
        <a href="#" class="block text-grey-200 font-medium mb-2">Customers</a>
        <a href="#" class="block text-grey-200 font-medium mb-2">Blog</a>
      </div>
      <div class="w-full sm:w-2/5 md:w-2/5 lg:w-2/5 column  mt-4 sm:mt-0 md:mt-0 lg:mt-0">
        <h4 class="text-black text-lg font-bold mb-2">Try TweetNow</h4>
        <div class="inputbox relative w-full">
          <input type="email" id="subscribe" placeholder="Email Address"  class="font-inherit block w-full py-5 px-2 border border-b-color rounded focus:border-dark-blue outline-none"/>
          <button type="submit" class="inline-block absolute top-1 right-1 bg-dark-blue text-white py-4 px-4 rounded font-bold">Start Scheduling</button>

        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style lang="scss" scoped>
#subscribe{
  font-family: inherit;
}
</style>