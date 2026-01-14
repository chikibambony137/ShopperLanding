<template>
  <section class="grid justify-center items-center p-30">
    <h2 class="text-5xl mb-14 font-semibold flex justify-center items-center">
      Top Sellers
    </h2>
    <div class="flex justify-center items-center mb-20 gap-8">
      <RadioButton value="top" name="type" v-model="selectedValue">
        Top Picks
      </RadioButton>
      <RadioButton value="watches" name="type" v-model="selectedValue">
        Watches
      </RadioButton>
    </div>
    <div class="grid grid-cols-3 gap-25">
      <Product
        img="ear1.png"
        name="Boat Rockerz 333"
        :starCount="5"
        :reviewCount="75"
        :price="20"
        :discount="60"
        baseBgColor="#10b981"></Product>

      <Product
        img="ear2.png"
        name="Boat kerz 234"
        :starCount="5"
        :reviewCount="75"
        :price="40"
        baseBgColor="#1da8db"></Product>

      <Product
        img="ear3.png"
        name="Boat Rockerz 323"
        :starCount="5"
        :reviewCount="75"
        :price="30"
        :discount="40"
        baseBgColor="#845ec2"></Product>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import Product from "../blocks/Product.vue";
import RadioButton from "../buttons/RadioButton.vue";

const selectedValue = ref("top"); // Значение по умолчанию
</script>

<style></style>
