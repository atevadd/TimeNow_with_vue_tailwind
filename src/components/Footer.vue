<template>
  <footer id="footer" class="w-9/12 mx-auto py-16 relative block">
    <div class="footer-logo mb-6">
      <img src="@/assets/images/Logo.svg" alt="Time Now logo" />
    </div>
    <div class="footer-menu w-full flex items-center justify-between">
      <div class="column">
        <h4 class="text-black text-lg font-bold mb-4">Product</h4>
        <a href="#" class="block text-grey-200 mb-2 font-medium">Homepage</a>
        <a href="#" class="block text-grey-200 mb-2 font-medium">Pricing</a>
        <a href="#" class="block text-grey-200 mb-2 font-medium">Features</a>
      </div>
      <div class="column">
        <h4 class="text-black text-lg font-bold mb-4">Help</h4>
        <a href="#" class="block font-medium text-grey-200 mb-2">Live chat</a>
        <a href="#" class="block font-medium text-grey-200 mb-2">Send Email</a>
        <a href="#" class="block font-medium text-grey-200 mb-2">FAQ</a>
      </div>
      <div class="column">
        <h4 class="text-black text-lg font-bold mb-4">Company</h4>
        <a href="#" class="block text-grey-200 font-medium mb-2">About</a>
        <a href="#" class="block text-grey-200 font-medium mb-2">Customers</a>
        <a href="#" class="block text-grey-200 font-medium mb-2">Blog</a>
      </div>
      <div class="w-2/5 column">
        <h4 class="text-black text-lg font-bold mb-2">Try TweetNow</h4>
        <div class="inputbox relative w-full">
          <input type="email" id="subscribe" placeholder="Email Address"  class="block w-full py-5 px-2 border border-b-color rounded"/>
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
</style>