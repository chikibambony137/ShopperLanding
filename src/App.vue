<template>
  <div>
    <header
      class="flex justify-between items-center gap-10 p-12 pl-20 pr-20 bg-white">
      <h1 class="text-4xl italic">
        <span class="text-[#10b981]">Shop</span>per
      </h1>
      <div>
        <SearchInput></SearchInput>
        <CartButton></CartButton>
        <LoginButton></LoginButton>
      </div>
    </header>

    <nav
      class="flex justify-center items-center gap-16 p-3 text-xl text-white font-semibold bg-[#10b981]">
      <a href="/">Features</a>
      <a href="/">Products</a>
      <a href="/">Blog</a>
      <a href="/">About</a>
    </nav>

    <article class="grid grid-flow-row justify-center pb-16 xl:grid-cols-[1fr_2fr] "> 
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

      <div class="flex justify-center items-center xl:pr-30 xl:pt-20 select-none row-span-2">
        <img class="w-full max-w-125" src="./assets/RedBeats.png" alt="redbeats" draggable="false" />
      </div>

      <div class="flex justify-start gap-4 xl:pl-20">
          <div class="flex select-none">
            <img
              class="w-15 h-15"
              src="./assets/ava1.png"
              alt="ava"
              draggable="false" />
            <img
              class="w-15 h-15 -ml-5"
              src="./assets/ava2.png"
              alt="ava"
              draggable="false" />
            <img
              class="w-15 h-15 -ml-5"
              src="./assets/ava3.png"
              alt="ava"
              draggable="false" />
            <img
              class="w-15 h-15 -ml-5"
              src="./assets/ava4.png"
              alt="ava"
              draggable="false" />
          </div>
          <p class="w-25 font-medium text-2xl">15k Well Reviews</p>
        </div>
    </article>

    <article class="grid grid-cols-[4fr_3fr] bg-[#845ec2] h-150 text-white">
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

        <div class="grid grid-cols-3 w-160">
          <img src="./assets/product1.png" alt="product1" />
          <div class="grid w-48">
            <img
              class="-translate-y-20"
              src="./assets/product2.png"
              alt="product2" />
            <div class="flex justify-center">
              <p class="text-2xl">Price: <span class="font-bold"> $45.99</span></p>
            </div>
          </div>
          <img src="./assets/product3.png" alt="product3" />
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
    </article>

    <article></article>
    <article></article>
    <article></article>
    <footer></footer>
  </div>
</template>

<script lang="ts" setup></script>

<style></style>
