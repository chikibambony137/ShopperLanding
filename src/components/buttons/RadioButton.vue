<template>
  <div
    :class="[
      'rounded-[100%] p-6 text-2xl font-semibold cursor-pointer transition-all',
      isChecked ? 'bg-[#10b981] text-white' : '',
    ]"
    @click="$emit('update:modelValue', value)">
    <input
      class="hidden"
      :id="value"
      :value="value"
      :name="group"
      :checked="modelValue === value"
      type="radio" />
    <label :for="value" class="cursor-pointer"><slot></slot></label>
  </div>
</template>

<script lang="ts" setup>
import { computed } from "vue";

const props = defineProps({
  value: {
    type: String,
    required: true,
  },
  group: {
    type: String,
    required: true,
  },
  modelValue: {
    type: String,
    default: "",
  },
});

const isChecked = computed(() => props.modelValue === props.value);

defineEmits(["update:modelValue"]);
</script>
