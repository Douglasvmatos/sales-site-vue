<script lang="ts">

import Products from '@/components/Products.vue';
import AboutBanner from '@/components/AboutBanner.vue';
import FooterHome from '@/components/FooterHome.vue';
import BannerHome from '@/components/BannerHome.vue';
  
export default {
 name: 'Home',
 components: {
  BannerHome,
  Products,
  AboutBanner,
  FooterHome,
 }
}
</script>

<template>
  <div class="flex flex-col bg-[#e6e4e4] ">
      <BannerHome />
      <Products />
      <AboutBanner />
      <FooterHome />
  </div>
</template>

