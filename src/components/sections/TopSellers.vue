<template>
  <section class="grid justify-center items-center p-30">
    <h2 class="text-5xl mb-6 font-semibold">Top Sellers</h2>
    <div class="flex">
      <input type="radio" name="type" checked />
      <p>Top picks</p>
      <input type="radio" name="type" />
      <p>Watches</p>
    </div>
    <div class="grid grid-cols-3">
      <Product></Product>
      <Product></Product>
      <Product></Product>
    </div>
  </section>
</template>

<script lang="ts" setup></script>

<style></style>
