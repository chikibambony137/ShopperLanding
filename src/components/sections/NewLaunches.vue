<template>
  <section class="">
    <h2 class="text-5xl mb-14 font-semibold flex justify-center items-center">
      New Launches
    </h2>

    <div class="bg-[#845ec2] h-auto text-white flex gap-4 p-15 items-center">
      <button><img src="../../assets/leftArrow.svg" alt="arrow" /></button>

      <div class="grid grid-cols-[5fr_6fr] gap-16 items-center">
        <div class="grid grid-cols-2 gap-4 select-none ">
          <img
          class="w-60"
            src="@/assets/product4-1.png"
            alt="product2"
            draggable="false" />

          <img class="w-60 mt-20" src="@/assets/product4-2.png" alt="product1" draggable="false" />
        </div>

        <div class="h-full items-start py-10">
          <h2 class="text-5xl mb-10 font-semibold">Airdrop 500 Anc</h2>
          <p class="text-xl mb-8 font-medium">
            Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a product ...<a href="/"> Read More</a>
          </p>

          <p class=" text-3xl font-light mb-10">Price: <span class=" ml-4 font-semibold">$45.99</span></p>

          <ColorPicker class="mb-10" :colors="['#111111', '#fff500', '#4484ff']"></ColorPicker>

          <DefaultButton class="mr-16 rounded-xl">Add to cart</DefaultButton>
          <a class="text-xl font-semibold select-none cursor-pointer"
            >Explore more</a
          >
        </div>
      </div>

      <button><img src="../../assets/rightArrow.svg" alt="arrow" /></button>
    </div>
  </section>
</template>

<script lang="ts" setup>
import DefaultButton from "../buttons/DefaultButton.vue";
import ColorPicker from "../blocks/ColorPicker.vue";
</script>

<style></style>
