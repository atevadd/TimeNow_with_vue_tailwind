<template>
  <main>
    <section
      class="
        page-heading
        w-full
        sm:w-9/12
        md:w-9/12
        lg:w-9/12
        block
        sm:block
        md:block
        lg:block
        mx-0
        mb-8
        sm:mx-auto
        md:mx-auto
        lg:mx-auto
        mt-8
      "
    >
      <h1
        class="
          text-center 
          text-4xl
          sm:text-3xl
          md:text-5xl
          text-black
          font-bold
          mb-2
          px-4
          sm:px-0
          md:px-0
          lg:px-0
        "
      >
        FLexible Plans for Everyone.
      </h1>
      <p
        class="
          text-center
          w-full
          sm:w-6/12
          md:w-3/4
          lg:w-3/4
          px-4
          sm:px-0
          md:px-0
          lg:px-10
          mx-0
          sm:mx-auto
          md:mx-auto
          text-grey-200
        "
      >
        Our plans are made for everyone. Whether you're just starting out on
        social media, or have been onn there for a long time, we have a plan
        that's right on you.
      </p>
    </section>
    <section
      class="
        pricing-cards
        w-full
        sm:w-full
        md:w-9/12
        lg:w-9/12
        sm:mx-auto
        md:mx-auto
        sm:grid
        md:grid
        lg:grid
        grid-cols-1
        sm:grid-cols-2
        md:grid-cols-2
        lg:grid-cols-3
        gap-5
        sm:gap-0
        md:gap-3
        lg:gap-5
        px-4
        md:px-0
        lg:px-0
      "
    >
      <Pricingcard :price="4" >
      <template v-slot:feat class="">
        <ul>
            <li class="mb-4 text-grey-200"><img src="@/assets/images/Checkmark.svg" alt="Checkmark icon" class="inline-block mr-3"> LinkedIn Integration</li>
            <li class="mb-4 text-grey-200"><img src="@/assets/images/Checkmark.svg" alt="Checkmark icon" class="inline-block mr-3"> Twitter Integration</li>
            <li class="mb-4 text-grey-200"><img src="@/assets/images/Checkmark.svg" alt="Checkmark icon" class="inline-block mr-3"> Real-time Integration</li>
          </ul>
      </template>
      </Pricingcard>
      <Pricingcard
        :price="12"
        cardText="Perfect plan if you're a heavy user of social media"
      >
        <template v-slot:feat>
          <ul>
            <li class="mb-4 text-grey-200"><img src="@/assets/images/Checkmark.svg" alt="Checkmark icon" class="inline-block mr-3"> LinkedIn Integration</li>
            <li class="mb-4 text-grey-200"><img src="@/assets/images/Checkmark.svg" alt="Checkmark icon" class="inline-block mr-3"> Twitter Integration</li>
            <li class="mb-4 text-grey-200"><img src="@/assets/images/Checkmark.svg" alt="Checkmark icon" class="inline-block mr-3"> Instagram Integration</li>
            <li class="mb-4 text-grey-200"><img src="@/assets/images/Checkmark.svg" alt="Checkmark icon" class="inline-block mr-3"> Real-time Integration</li>
          </ul>
        </template>
      </Pricingcard>
      <Pricingcard :price="7">
        <template v-slot:feat>
          <ul>
            <li class="mb-4 text-grey-200"><img src="@/assets/images/Checkmark.svg" alt="Checkmark icon" class="inline-block mr-3"> LinkedIn Integration</li>
            <li class="mb-4 text-grey-200"><img src="@/assets/images/Checkmark.svg" alt="Checkmark icon" class="inline-block mr-3"> Twitter Integration</li>
          </ul>
        </template>
      </Pricingcard>
    </section>
    <Footer />
  </main>
</template>

<script>
import Pricingcard from "@/components/Pricingcard.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "Pricing",
  components: {
    Pricingcard,
    Footer,
  },
};
</script>