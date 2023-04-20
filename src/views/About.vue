<script lang="ts">
  export default {
    name: 'About',
  }

</script>

<template>
  <div class="w-full">
    <div id="banner-business" class="mt-4 w-auto max-h-max flex items-end">
      <span class="text-5xl text-black mb-10 ml-10 font-extrabold">Quem somos?</span>
    </div>
    <div class="flex flex-col mx-20 mt-10 space-y-2">
      <span>A história começou em 1957, quando John Doe e John Dones compraram a pequena loja de presentes</span>  
      <span>“A Cortineira”. Já em Oliveira, no interior de São Paulo, os valores que levariam a marca ao sucesso estavam presentes na cultura organizacional da empresa.</span>
      <span>O primeiro e decisivo passo foi o processo escolhido para trocar o nome. Com um concurso cultural na rádio da cidade, “A Cortineira” passou a se chamar “Alterdata”.</span>
      <span>Desde o princípio, a interatividade e proximidade com os clientes já era o guia para as decisões do negócio.</span>
      <span>A loja se expandiu nas décadas seguintes pelo interior de São Paulo e, neste período, outros parentes da família capitalizaram o negócio. 
      Assim, quase 50 anos após o início da empresa, a primeira grande loja de departamentos foi fundada, com mais de 5.000 m².</span>
      <span>O passo seguinte foi transformar um negócio convencional em um empreendimento pioneiro. Na década de 1960, a Alterdata informatizou e 
      automatizou os processos e tornou-se a primeira empresa nacional a ter um centro de distribuição automatizado. 
      Nos anos 1990, com a chegada de Maria ao comando, a empresa descentralizou a tomada de decisão, 
      possibilitou maior ascensão dos funcionários na estrutura e fundou um dos primeiros e-commerces do Brasil e do Mundo.</span>
      <span>Atualmente, cerca de 90% dos rendimentos da Alterdata são vindos do e-commerce.</span>
    </div>
  </div>
</template>

<style scoped>
#banner-business {
  background-image: url('../assets/img/building.jpg');
  background-size: cover;
  display: flex;
  height: 500px;
}
</style>

