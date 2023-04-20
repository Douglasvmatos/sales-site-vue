<script lang="ts">
  import { ref, reactive } from 'vue'

  export default {
    name: 'VeiculosBanner'
  }

</script>

<template>
  <div id="banner-animes" class="m-16 bg-opacity-75 rounded-3xl w-full flex flex-row justify-start items-end">
    <div class="w-100 m-10 flex flex-col space-y-6 justify-center align-center items-center w-[500px]">
      <div class=" font-bold text-white text-3xl mt-10 mr-5 flex items-start justify-start text-left">
        O que deseja hoje?
      </div>
      <a 
        class="button-contact flex justify-center align-center w-96 h-16 :hover='bg-red-500'" 
        href="/animes">Encontrar novos animes
      </a>
      <div class=" font-bold mt-16 text-3xl text-center relative mr-5 items-start justify-start text-white hidden sm:flex">
          Assista animes novos e antigos, Legendados ou Dublados, aqui você encontra diversos tipos de animes, e em ótima qualidade!
      </div>
    </div>
  </div>
</template>

<style scoped>
#banner-animes {
  background-image: url('../assets/img/animesWallppaper.png');
  background-position: 0  ;
  background-size: cover;
  background-repeat: no-repeat;
  height: 500px;
  max-height: 500;
  display: flex;
  align-items: center; 
  max-width: 1800px;
}
</style>

