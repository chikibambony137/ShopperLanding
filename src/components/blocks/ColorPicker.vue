<template>
  <div class="flex gap-5">
    <div v-for="(color, colorId) in colors" :key="colorId" @click="selectedColor = color">
      <input
        class="hidden"
        type="radio"
        :value="color"
        v-model="selectedColor"
        :name="group" />
      <div
        class="rounded-[100%] p-5"
        :style="{ backgroundColor: color }"
        :class="[selectedColor == color ? ' outline-red-500 outline-3' : '']"></div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from "vue";

const props = defineProps({
  colors: {
    type: Array<string>,
    required: true,
  },
});

const group = ref("");

onMounted(() => {
  // random name for input
  group.value = `color-group-${Date.now()}-${Math.random()
    .toString(36)
    .substr(2, 9)}`;
});

const selectedColor = ref(props.colors[0]);

console.log(props.colors, selectedColor.value);
</script>

<style></style>
