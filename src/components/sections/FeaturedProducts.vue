<template>
  <section class="grid grid-cols-[4fr_3fr] bg-[#845ec2] h-160 text-white">
    <div class="pt-20 pl-24">
      <h1 class="h-35">
        <svg class="flex w-full flex-wrap">
          <text
            x="0"
            y="80"
            font-size="60"
            font-weight="bold"
            fill="transparent"
            stroke="white"
            stroke-width="1"
            stroke-linejoin="round"
            paint-order="stroke">
            Apple wireless Airpod
          </text>
          <text x="0" y="80" font-size="60" font-weight="bold" fill="#845ec2">
            Apple wireless Airpod
          </text>
        </svg>
      </h1>

      <div class="grid grid-cols-3 w-160 select-none">
        <img src="@/assets/product1.png" alt="product1" draggable="false" />
        <div class="grid w-48">
          <img
            class="-translate-y-20"
            src="@/assets/product2.png"
            alt="product2"
            draggable="false" />
          <div class="flex justify-center">
            <p class="text-2xl">
              Price: <span class="font-bold"> $45.99</span>
            </p>
          </div>
        </div>
        <img src="@/assets/product3.png" alt="product3" draggable="false" />
      </div>
    </div>

    <div class="pt-35">
      <h2 class="text-5xl mb-6 font-semibold">Our Featured Products</h2>
      <p class="text-xl w-120 mb-13 font-medium">
        Lorem ipsum is a placeholder text commonly used to demonstrate the
        visual form of a product
      </p>
      <button class="mr-12">Add to cart</button>
      <a>View more</a>
    </div>
  </section>
</template>

<script lang="ts" setup></script>

<style></style>
