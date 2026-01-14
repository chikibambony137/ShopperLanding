<template>
  <div role="article" class="grid gap-8">
    <div class="relative p-8 rounded-xl grid gap-8" :style="mainBgColor">
      <div
        v-if="props.discount"
        :style="discountBgColor"
        class="absolute right-3 top-3 w-25 h-25 p-1 text-white font-semibold text-xl rounded-[100%] flex justify-center items-center flex-col">
        <p>Save</p>
        <p>{{ props.discount }}%</p>
      </div>

      <div class="flex justify-center items-center">
        <img class="w-50 h-50" :src="props.img" alt="product" />
      </div>

      <div class="grid gap-3 px-13 py-8 rounded-xl bg-white">
        <h3 class="text-xl font-medium">{{ props.name }}</h3>

        <div class="flex gap-3 items-center">
          <div class="flex">
            <img
              v-for="(star, starId) in props.starCount"
              :key="starId"
              :name="star"
              src="@/assets/star.svg"
              alt="star" />
          </div>
          <span class="text-[11px] text-gray-400 font-medium"
            >{{ reviewCount }} Reviews</span
          >
        </div>

        <p class="text-xl font-semibold">${{ price }}</p>
      </div>
    </div>
    <DefaultButton>Add to cart</DefaultButton>
  </div>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import DefaultButton from "../buttons/DefaultButton.vue";

const props = defineProps({
  img: {
    type: String,
    required: false,
  },
  name: {
    type: String,
    required: true,
  },
  starCount: {
    type: Number,
    required: true,
  },
  reviewCount: {
    type: Number,
    required: false,
  },
  price: {
    type: Number,
    required: true,
  },
  discount: {
    type: Number,
    required: false,
  },
  baseBgColor: {
    type: String,
    required: false,
    default: '#10b981'
  },
});

// Основной цвет
const mainBgColor = computed(() => ({
  backgroundColor: props.baseBgColor + '42', // 42 = 26% прозрачности
}));

// Цвет скидки с прозрачностью
const discountBgColor = computed(() => ({
  backgroundColor: props.baseBgColor,
}));
</script>

<style></style>
