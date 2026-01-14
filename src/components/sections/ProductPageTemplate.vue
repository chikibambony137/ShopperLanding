<template>
  <section class="grid justify-center items-center px-30">
    <h2 class="text-5xl mb-14 font-semibold flex justify-center items-center">
      {{ sectionTitle }}
    </h2>

    <div class="flex justify-center items-center mb-10 gap-8">
      <RadioButton
        v-for="filter in filters"
        :key="filter.id"
        :value="filter.value"
        :group="filter.group"
        v-model="selectedValue">
        {{ filter.title }}
      </RadioButton>
    </div>
    
    <div class="flex">
      <div class="grid grid-cols-3 gap-25 transition-transform duration-300 ease-in-out">
        <Product
          v-for="product in products"
          :key="product.id"
          :img="product.img"
          :name="product.name"
          :starCount="product.starCount"
          :reviewCount="product.reviewCount"
          :price="product.price"
          :discount="product.discount"
          :baseBgColor="product.baseBgColor"></Product>
      </div>
      <button><img src="../../assets/rightArrow.svg" alt="arrow" /></button>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { ref, } from "vue";
import Product from "../blocks/Product.vue";
import RadioButton from "../buttons/RadioButton.vue";
import type { ProductType } from "../../types/ProductType";
import type { FilterType } from "../../types/FilterType";

const props = defineProps({
  sectionTitle: {
    type: String,
    required: true,
    default: "Products Page",
  },
  filters: {
    type: Array<FilterType>,
    required: false,
  },
  products: {
    type: Array<ProductType>,
      required: true,
  },
});

const selectedValue = ref(props.filters ? props.filters[0]?.value : ""); // Значение по умолчанию

</script>

<style></style>
