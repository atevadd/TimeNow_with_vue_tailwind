<template>
  <div class="pricing-card block sm:block md:block  border border-b-color rounded-md p-7 self-start mb-4 sm:mb-0 md:mb-0 lg:mb-0">
    <div class="card-head border-b border-b-color mb-3">
      <div class="price mb-5 text-grey-100">
        <span class="font-bold text-3xl text-black">${{ price }}</span
        >/mo
      </div>
      <p class="subtext block mb-4 text-grey-200">
        {{ cardText }}
      </p>
    </div>
    <div class="card-feat">
      <slot name="feat"></slot>
    </div>
    <a
      href="#"
      class="block sm:block md:block bg-dark-blue text-white font-bold text-center rounded-md p-3 cursor-pointer mt-5"
      >Subscribe now</a
    >
  </div>
</template>

<script>
export default {
  name: "Pricingcard",
  props: {
    cardText: {
      type: String,
      default: "Perfect plan if you're just starting out",
    },
    price: {
      type: Number,
      default: 4,
    },
  },
};
</script>
