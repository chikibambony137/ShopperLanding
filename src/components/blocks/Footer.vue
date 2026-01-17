<template>
  <footer class="container mx-auto">
    <div class="grid grid-cols-[450px_1fr] grid-rows-[100px_auto_100px]">
      <div class="col-span-2 flex justify-end items-center gap-10">
        <p class="text-2xl">Ready to get started?</p>
        <DefaultButton class="w-50 h-15 text-[17px] rounded-none"
          >Get Started</DefaultButton
        >
      </div>

      <div class="flex flex-col items-start justify-center gap-6">
        <p class="text-2xl">
          Subscribe to our <br />
          Website
        </p>
        <form class="flex">
          <input class="w-80" type="email" placeholder="Email address" />
          <button type="submit">
            <img src="../../assets/rightArrow.svg" alt="submit" />
          </button>
        </form>
      </div>

      <div class="grid grid-cols-3 gap-y-5 text-[19px] p-8">
        
        <a class="text-[#11ba82]" href="/">Services</a>
        <a class="text-[#11ba82]" href="/">About</a>
        <a class="text-[#11ba82]" href="/">Help</a>

        <a href="/">Email Marketing</a>
        <a href="/">Our Story</a>
        <a href="/">FAQs</a>

        <a href="/">Campaigns</a>
        <a href="/">Benefits</a>
        <a href="/">Contact Us</a>

        <a href="/">Branding</a>
        <a href="/">Team</a>
        <a></a>

        <a href="/">Offline</a>
        <a href="/">Careers</a>
        <a></a>
      </div>

      <div class="flex gap-12 items-center">
        <a href="/">Terms & Conditions</a>
        <a href="/">Privacy Policy</a>
      </div>

      <div class="flex justify-end items-center">
        <a class="mr-10" href="/"><img class="w-4" src="../../assets/facebook.png" alt="facebook"></a>
        <a class="mr-8" href="/"><img class="w-10" src="../../assets/twitter.png" alt="twitter"></a>
        <a href="/"><img class="w-8" src="../../assets/instagram.png" alt="instagram"></a>
      </div>
    </div>
  </footer>
</template>

<script lang="ts" setup>
import DefaultButton from "../buttons/DefaultButton.vue";
</script>

<style></style>
