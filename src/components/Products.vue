<script lang="ts">
import ProductVehicles from './ProductVehicles.vue';
import ProductAnime from './ProductAnimes.vue';

  export default {
    name: 'Product',
    components: {
        ProductVehicles,
        ProductAnime
    }
  }

</script>

<template>
    <div class="flex flex-col justify-center items-center align-center">
      <h1 class="text-5xl font-bold pb-3">Nossos Produtos</h1>
      <h2 class="text-2xl font-normal">Esses são os melhores produtos com a melhor condição do mercado!</h2>
      <div class="flex justify-center items-center space-x-32 mt-10">
        <ProductVehicles />
        <ProductAnime />
      </div>
    </div>
</template>

