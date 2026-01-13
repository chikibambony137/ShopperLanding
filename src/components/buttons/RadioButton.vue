<template>
  <div class="rounded-[100%] p-6 text-2xl font-semibold">
    <input
      :id="value"
      :value="value"
      :name="name"
      type="radio" />
    <label :for="value"><slot></slot></label>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  value: {
    type: String,
    required: true,
    default: "Value",
  },
  name: {
    type: String,
    required: true,
  },
  checked: {
    type: Boolean,
    required: false,
    default: false,
  },
});


</script>

<style></style>
