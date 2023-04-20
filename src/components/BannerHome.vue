<script lang="ts">
import VeiculosBanner from '@/components/VeiculosBanner.vue'
import AnimesBanner from '@/components/AnimesBanner.vue';

export default {
 name: 'BannerHome',
 data() {
  return {
    isVisible: true,
  }
 },
 components: {
  VeiculosBanner,
  AnimesBanner
 },
}
</script>

<template >
    <div class="flex flex-row  justify-center">
        <button>
          <i class="fa-solid fa-chevron-left fa-2xl pl-5"  @click="isVisible = !isVisible"></i>
        </button>
        <transition name="fade">
          <VeiculosBanner v-if="isVisible" />  
          <AnimesBanner  v-else/>
        </transition>
        <button class="mr-5 ">
          <i class="fa-solid fa-chevron-right fa-2xl"  @click="isVisible = !isVisible"></i>
        </button>
    </div>
</template>

<style>
    .fade-enter-from {opacity: 0}
    .fade-enter-to {opacity: .5}
    .fade-enter-active {transition: all 1s ease}
    .fade-leave-from {opacity: .5}
    .fade-leave-to {opacity: 0}
    .fade-leave-active {transition: all 1s ease}    
</style>

