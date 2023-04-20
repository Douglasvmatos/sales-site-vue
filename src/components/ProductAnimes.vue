<script lang="ts">
  export default {
    name: 'ProductAnime',
    components: {
        
    }
  }
</script>

<template>
    <div class="flex flex-col bg-[#949292] justify-center text-center items-center align-center shadow-2xl p-10 rounded-2xl">
      <img src="../assets/img/anime.png" class="h-20" />
      <div class="flex flex-col w-96">
          <h1 class="text-3xl font-bold pb-3 mt-4">Animes</h1>
          <h2 class="text-xl font-normal">Os lançamentos de todos animes você encontra aqui!</h2>
      </div>
        <a class="button-user rounded-3xl w-96 h-16 bg-red-400 hover:bg-red-600 mt-6" href="/animes">Encontre o seu favorito</a>
    </div>
</template>

