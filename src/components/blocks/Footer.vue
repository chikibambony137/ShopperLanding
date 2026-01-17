<template>
  <footer class="container mx-auto bg-red-500">
    <div class="grid grid-cols-[450px_1fr] grid-rows-[100px_auto_100px]">
        <div class=" col-span-2 flex justify-end items-center gap-10 bg-gray-200">
            <p>Ready to get started?</p>
            <DefaultButton class=" rounded-none">Get Started</DefaultButton>
        </div>
        <div class=" bg-blue-500">a</div>
        <div class=" bg-purple-500">a</div>
        <div class=" col-span-2 bg-yellow-500">a</div>
    </div>
  </footer>
</template>

<script lang="ts" setup>
import DefaultButton from '../buttons/DefaultButton.vue';

</script>

<style>

</style>