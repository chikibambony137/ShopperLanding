<template>
  <section
    class="grid grid-flow-row justify-center pb-16 xl:grid-cols-[1fr_2fr]">
    <div class="pt-30 pl-4 xl:pl-20 xl:pr-20 row-end-1">
      <h2 class="text-6xl xl:w-125 mb-8 font-semibold">
        Discover Our Latest Products
      </h2>
      <p class="text-xl w-130 mb-13 font-medium">
        Lorem ipsum is a placeholder text commonly used to demonstrate the
        visual form of a product
      </p>
      <button class="mb-28">Buy Now</button>
    </div>

    <div
      class="flex justify-center items-center xl:pr-30 xl:pt-20 select-none row-span-2">
      <img
        class="w-full max-w-125"
        src="@/assets/RedBeats.png"
        alt="redbeats"
        draggable="false" />
    </div>

    <div class="flex justify-start gap-4 xl:pl-20">
      <div class="flex select-none">
        <img
          class="w-15 h-15"
          src="@/assets/ava1.png"
          alt="ava"
          draggable="false" />
        <img
          class="w-15 h-15 -ml-5"
          src="@/assets/ava2.png"
          alt="ava"
          draggable="false" />
        <img
          class="w-15 h-15 -ml-5"
          src="@/assets/ava3.png"
          alt="ava"
          draggable="false" />
        <img
          class="w-15 h-15 -ml-5"
          src="@/assets/ava4.png"
          alt="ava"
          draggable="false" />
      </div>
      <p class="w-25 font-medium text-2xl">15k Well Reviews</p>
    </div>
  </section>
</template>

<script lang="ts" setup></script>

<style></style>
