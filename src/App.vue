<template>
  <Header></Header>
  <Nav></Nav>

  <main class="container mx-auto">
    <Hero></Hero>
    <FeaturedProducts class="mb-30"></FeaturedProducts>

    <ProductPageTemplate
      class="mb-30"
      sectionTitle="Top Sellers"
      :filters="filters1"
      :products="products1"></ProductPageTemplate>

    <ProductPageTemplate
      class="mb-30"
      sectionTitle="Top Sellers"
      :filters="filters2"
      :products="products2"></ProductPageTemplate>
    <!-- <TopSellers class="mb-30"></TopSellers>
    <TrendingEarphones class="mb-30"></TrendingEarphones> -->
    <section></section>
  </main>
  <footer></footer>
</template>

<script lang="ts" setup>
import Header from "./components/blocks/Header.vue";
import Nav from "./components/blocks/Nav.vue";
import Hero from "./components/sections/Hero.vue";
import FeaturedProducts from "./components/sections/FeaturedProducts.vue";
import ProductPageTemplate from "./components/sections/ProductPageTemplate.vue";

import productList from "./data/products/productList";
import filterList from "./data/filters/filterList";

const filters1 = filterList.slice(0, 2);
const products1 = productList.slice(0, 3);

const filters2 = filterList.slice(2, 5);
const products2 = productList.slice(3, 6);
</script>

<style></style>
