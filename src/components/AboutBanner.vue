<script lang="ts">
  export default {
    name: 'AboutBanner'
  }
</script>

<template>
    <div class="w-full">
      <div id="banner-business" class="mt-16 w-auto max-h-max flex flex-row">
        <div class="flex flex-col w-1/2 ml-20 h-full mt-20">
          <h1 class="text-2xl font-extrabold mb-4">Alterdata</h1>
          <p class="text-xl font-semibold">A procura de uma empresa que tenha variedades de produtos, tenha qualidade e bom preço? Então você está no lugar certo!
            E se eu te contar que além de encontrar tudo em um só lugar você ainda pode economizar?
          </p>
          <a class="button-user bg-blue-600 hover:bg-blue-800 w-96 h-16 rounded-xl mt-8" href="/sobre">Mais informações</a>
        </div>
      </div>

    </div>
</template>

<style scoped>
#banner-business {
  background-image: url('../assets/img/business.jpg');
  background-size: cover;
  height: 700px;
  max-height: 800px;
  display: flex;
  align-items: center; 
}
</style>

