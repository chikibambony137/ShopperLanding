<template>
  <section class="grid justify-center items-center px-30">
    <h2 class="text-5xl mb-14 font-semibold flex justify-center items-center">
      Trending Earphones
    </h2>

    <div class="flex justify-center items-center mb-10 gap-8">
      <RadioButton value="earbuds" name="ears" v-model="selectedValue">
        Earbuds
      </RadioButton>
      <RadioButton value="wireless" name="ears" v-model="selectedValue">
        Wireless
      </RadioButton>
      <RadioButton value="wired" name="ears" v-model="selectedValue">
        Wired
      </RadioButton>
    </div>

    <div class="grid grid-cols-3 gap-25">
      <Product
        img="ear4.png"
        name="Boat Rockerz 333"
        :starCount="5"
        :reviewCount="75"
        :price="20"
        :discount="60"
        baseBgColor="#74b6f7"></Product>

      <Product
        img="ear5.png"
        name="Boat kerz 234"
        :starCount="5"
        :reviewCount="75"
        :price="40"
        baseBgColor="#66d4fa"></Product>

      <Product
        img="ear6.png"
        name="Boat Rockerz 323"
        :starCount="5"
        :reviewCount="75"
        :price="30"
        :discount="40"
        baseBgColor="#08bdbe"></Product>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import RadioButton from "../buttons/RadioButton.vue";
import Product from "../blocks/Product.vue";

const selectedValue = ref("earbuds"); // Значение по умолчанию
</script>

<style></style>
