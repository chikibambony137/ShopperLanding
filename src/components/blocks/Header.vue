<template>
  <header
    class="container mx-auto flex justify-between items-center gap-10 p-12 pl-20 pr-20">
    <h1 class="text-4xl italic"><span class="text-[#10b981]">Shop</span>per</h1>
    <div class="flex gap-10">
      <SearchInput></SearchInput>
      <CartButton></CartButton>
      <ProfileButton></ProfileButton>
    </div>
  </header>
</template>

<script lang="ts" setup>
import SearchInput from "./SearchInput.vue";
import CartButton from "../buttons/CartButton.vue";
import ProfileButton from "../buttons/ProfileButton.vue";
</script>

<style></style>
