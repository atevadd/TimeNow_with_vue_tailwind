<template>
    <header id="header" class="relative w-full sm:w-full md:w-9/12 flex items-center justify-between py-4 px-4 sm:mx-auto md:mx-auto lg:mx-auto md:py-5 sm:py-5 z-20">
        <div class="logo">
            <img src="@/assets/images/Logo.svg" alt="Time now brand logo" class="brand-logo">
        </div>
        <nav class="hidden sm:block md:block sm:mr-auto md:mr-auto ml-5">
            <router-link :to="{name: 'Home'}" class="mr-7 text-grey-100 text-base hover:text-dark-blue">Features</router-link>
            <router-link :to="{name: 'Pricing'}" class="mr-7 text-grey-100 text-base hover:text-dark-blue">Pricing</router-link>
        </nav>
        <a href="#" class="cta hidden sm:block md:block lg:block px-5 py-4 bg-dark-blue font-bold text-white rounded">Start scheduling</a>

        <div class="menu-icon block sm:hidden md:hidden lg:hidden">
            <img src="@/assets/images/Hamburger-Menu.svg" alt="the Hamburger menu">
        </div>
    </header>
</template>

<script>
export default {
  name: "Navbar",
};
</script>