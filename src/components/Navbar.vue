<template>
  <header class="w-9/12 flex items-center mx-auto border-b  border-dark-grayish-blue  p-6">
    <div class="toggle-menu block sm:hidden md:hidden">
      <i class="bx bx-menu text-2xl"></i>
    </div>
    <div class="logo">
      <img src="@/assets/images/logo.svg" alt="The brand logo" class="brand-logo">
    </div>

    <nav class="nav block ml-8 mr-auto ">
      <ul class="nav-items flex items-center justify-between">
        <li class="nav-item mx-3 text-sm"><a href="#" class="text-gray-500 hover:text-gray-800">Collections</a></li>
        <li class="nav-item mx-3 text-sm"><a href="#" class="text-gray-500 hover:text-gray-800">Men</a></li>
        <li class="nav-item mx-3 text-sm"><a href="#" class="text-gray-500 hover:text-gray-800">Women</a></li>
        <li class="nav-item mx-3 text-sm"><a href="#" class="text-gray-500 hover:text-gray-800">About</a></li>
        <li class="nav-item mx-3 text-sm"><a href="#" class="text-gray-500 hover:text-gray-800">Contact</a></li>
      </ul>
    </nav>

    <div class="nav-menu flex items-center justify-between">
      <div class="nav-cart">
        <i class="bx bx-shopping-bag text-xl text-gray-400"></i>
      </div>
      <div class="block nav-image ml-5 w-8 h-8">
        <img src="@/assets/images/image-avatar.png" alt="" class="block w-full h-full">
      </div>
    </div>
    
  </header>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style>
</style>
