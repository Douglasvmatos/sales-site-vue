<template>
    <div class="flex flex-row justify-around w-full align-center">
      <div class="counter font-bold text-2xl">
        Challenge(s): {{counter}}
      </div>
      <button 
      @click="counter++"
      class="button-contact w-96 mb-10 h-10 m"
      >Replicar</button>
    </div>
  </template>
  
  <script lang="ts">
  export default {
    data: () => ({
      counter: 1
    })
  }
  </script>