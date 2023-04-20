<script lang="ts">
  import { ref, reactive } from 'vue'

  export default {
    name: 'VeiculosBanner'
  }

</script>

<template>
    <div id="banner-vehicles" class="m-16 rounded-3xl shadow shadow-black w-auto flex flex-row justify-end items-end">
      <div class="w-100 m-10 flex flex-col space-y-6 justify-center align-center items-center w-[500px]">
        <div class=" font-bold text-3xl mt-10 mr-5 flex items-start justify-start text-left">
         O que deseja hoje?
        </div>
        <a class="button-contact flex justify-center align-center w-96 h-16 :hover='bg-red-500'" href="/veiculos">Ver carros disponíveis</a>
        <a class="button-contact w-96 h-16" href="/contato">Entrar em contato</a>
      </div>
      <div class="flex flex-row justify-end m-10 h-full ">
        <div class=" font-bold text-3xl flex-1 relative mt-10 mr-5 items-start justify-start text-left hidden md:flex">
        Está procurando um carro bom, bonito e barato? Então você veio ao lugar certo! Aqui
         nós temos os melhores carros do mercado, das melhores marcas e pelos melhores preços.
        </div>
      </div>
    </div>
</template>

<style scoped>
#banner-vehicles {
  background-image: url('../assets/img/vehiclesWallpaper.png');
  background-position: 0  ;
  background-size: cover;
  height: 500px;
  max-height: 500;
  display: flex;
  align-items: center; 
  max-width: 1800px;
}
</style>

