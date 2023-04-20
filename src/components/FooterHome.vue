<script lang="ts">
import LogoAlterdata from './LogoAlterdata.vue'
import SocialNetworks from './SocialNetworks.vue'

export default {
  name: 'FooterHome',
  components: {
    SocialNetworks
  }
}
</script>

<template>
  <div class="flex flex-row justify-around items-baseline py-10 bg-black h-auto mt-20">
    <LogoAlterdata />
    <a class="footer-info space-y-4" href="/veiculos">
      <h1 class="footer-title">Automóveis</h1>
      <span class="footer-text">Tipo</span>
      <span class="footer-text">Ano</span>
    </a>
    <a class="footer-info space-y-4" href="/animes">
      <h1 class="footer-title">Animes</h1>
      <span class="footer-text">Título</span>
      <span class="footer-text">Personagem</span>
      <span class="footer-text">Descrição</span>
    </a>
    <SocialNetworks />
  </div>
  <div class="bg-slate-30 h-16 flex justify-center items-center">
    <span>©2023 - John Doe Software - Direitos reservado</span>
  </div>
</template>

