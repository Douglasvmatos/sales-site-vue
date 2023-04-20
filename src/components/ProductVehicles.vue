<script lang="ts">
  export default {
    name: 'ProductVehicles',
    components: {
        
    }
  }
</script>

<template>
    <div class="flex flex-col bg-[#949292] justify-center text-center items-center align-center shadow-2xl p-10 rounded-2xl">
      <img src="../assets/img/carIcon.png" class="h-20" />
      <div class="flex flex-col w-96">
          <h1 class="text-3xl font-bold pb-3 mt-4">Automóveis</h1>
          <h2 class="text-xl font-normal">Todos produtos com laudo cautelar e devidamente revisados!</h2>
      </div>
        <a class="button-user rounded-3xl w-96 h-16 bg-blue-600 hover:bg-blue-800 mt-6" href="/contato">Solicite uma cotação</a>
    </div>
</template>

