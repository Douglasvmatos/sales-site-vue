<script lang="ts">
export default {
  name: 'MainHeaderList',
}
</script>

<template>
  <div class="items-center  justify-between hidden w-full md:flex md:w-auto md:order-1"
       id="navbar-sticky">
    <ul class="flex flex-col text-black p-4 mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
      <li>
        <a
          id="home"
          href="/"
          class="format-title-header-list"
          aria-current="page"
          >Home</a>
      </li>
      <li>
        <a
          id="veiculos" 
          href="/veiculos" 
          class="format-title-header-list"
          >Veículos</a>
      </li>
      <li>
        <a
          id="animes" 
          href="/animes" 
          class="format-title-header-list"
          >Animes</a>
      </li>
      <li>
        <a href="/contato" 
        class="format-title-header-list"
          >Contato</a>
      </li>
      <li>
        <a 
        href="/sobre"
        class="format-title-header-list"
          >Sobre</a>
      </li>
    </ul>
  </div>
</template>
  

