<template>
  <div>
    <header
      class="flex justify-between items-center gap-10 p-12 pl-20 pr-20 ">
      <h1 class="text-4xl italic"><span class="text-[#10b981]">Shop</span>per</h1>
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

    <article class="grid grid-cols-[1fr_2fr] pb-16">
      <div class="pt-30 pl-20 pr-20">
        <h2 class="text-6xl w-125 mb-8 font-semibold">
          Discover Our Latest Products
        </h2>
        <p class="text-xl w-130 mb-13 font-medium">
          Lorem ipsum is a placeholder text commonly used to demonstrate the
          visual form of a product
        </p>
        <button class="mb-28">Buy Now</button>

        <div class="flex justify-start gap-10">
          <div class="flex select-none">
            <img class="w-15 h-15" src="./assets/ava1.png" alt="ava" draggable="false"/>
            <img class="w-15 h-15 -ml-5" src="./assets/ava2.png" alt="ava" draggable="false"/>
            <img class="w-15 h-15 -ml-5" src="./assets/ava3.png" alt="ava" draggable="false"/>
            <img class="w-15 h-15 -ml-5" src="./assets/ava4.png" alt="ava" draggable="false"/>
          </div>
          <p class="w-25 font-medium text-2xl">15k Well Reviews</p>
        </div>
      </div>
      <div class="flex justify-center items-center pr-30 pt-20 select-none">
        <img src="./assets/RedBeats.png" alt="redbeats" draggable="false">
      </div>
    </article>

    <article class="grid grid-cols-2 bg-[#845ec2] h-150">
123
    </article>

    <article></article>
    <article></article>
    <article></article>
    <footer></footer>
  </div>
</template>

<script lang="ts" setup></script>

<style></style>
