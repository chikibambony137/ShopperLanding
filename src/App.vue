<template>
  <Header></Header>
  <Nav></Nav>

  <main class="container mx-auto">
    <Hero></Hero>
    <FeaturedProducts></FeaturedProducts>
    <TopSellers></TopSellers>
    <TrendingEarphones></TrendingEarphones>
    <section></section>
  </main>
  <footer></footer>
  Выделить разделы в компоненты Vue и настроить alias @
</template>

<script lang="ts" setup>
import Header from "./components/blocks/Header.vue";
import Nav from "./components/blocks/Nav.vue";
import Hero from "./components/sections/Hero.vue";
import FeaturedProducts from "./components/sections/FeaturedProducts.vue";
import TopSellers from "./components/sections/TopSellers.vue";
import TrendingEarphones from "./components/sections/TrendingEarphones.vue";
</script>

<style></style>
