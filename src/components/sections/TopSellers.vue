<template>
  <section class="grid justify-center items-center p-30">
    <h2 class="text-5xl mb-6 font-semibold">Top Sellers</h2>
    <div class="flex">
      <input type="radio" name="type" checked />
      <p>Top picks</p>
      <input type="radio" name="type" />
      <p>Watches</p>
    </div>
    <div class="grid grid-cols-3 gap-25">
      <Product
        img="ear1.png"
        name="Boat Rockerz 333"
        :starCount="5"
        :reviewCount="75"
        :price="20"
        :discount="60"
        bgColor="10b981"></Product>

        <Product
        img="ear2.png"
        name="Boat kerz 234"
        :starCount="5"
        :reviewCount="75"
        :price="40"
        bgColor="c9f2ff"></Product>

        <Product
        img="ear3.png"
        name="Boat Rockerz 323"
        :starCount="5"
        :reviewCount="75"
        :price="30"
        :discount="40"
        bgColor="845ec2"></Product>
    </div>
  </section>
</template>

<script lang="ts" setup>
import Product from "../blocks/Product.vue";
</script>

<style></style>
