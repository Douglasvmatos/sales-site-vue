<template>
  <div class="flex flex-col" id="vehicles-background">
    <h1 class="text-center text-5xl font-bold uppercase mt-10">Veículos disponíveis</h1>
    <div class="min-w-[75%] m-10 relative overflow-x-auto sm:rounded-md">
      <table class="header-table">
        <thead>
          <tr class="header-table uppercase">
            <th scope="col" class="px-6 py-3 text-sm border-2 border-black">Nome</th>
            <th scope="col" class="px-6 py-3 text-sm border-2 border-black">Código</th>
            <th scope="col" class="px-6 py-3 text-center text-sm">Ações</th>
          </tr>
          <tr v-for="(item, index) in data" :key="index"
            class="px-6 py-4  font-medium text-gray-900 bg-gray-300 w-1/5 dark:text-white border-2 border-black">
            <th scope="row" class="px-6 py-4  font-medium text-gray-900 bg-gray-300 w-2/5">
              {{ item.nome }}
            </th>
            <td class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-2 border-black">
              {{ item.codigo }}
            </td>
            <td class="px-6 py-4 text-center">
              <PopYear />
            </td>
          </tr>
        </thead>
      </table>
    </div>
  </div>
  <Loading v-if="Loadingc == true"/>
</template>

<script setup lang="ts">
import PopYear from '@/components/PopYear.vue';
import Loading from '@/components/Loading.vue';

import { reactive, onBeforeMount, onMounted } from 'vue';

const data = reactive<Array<any>>([]);
const load = async () => {
  const response = await fetch(
    'https://parallelum.com.br/fipe/api/v1/carros/marcas/154/modelos',
  );

  const result = await response.json();
  data.push(...result.modelos);
};

onBeforeMount(async () => {
  await load();
})

let Loadingc = true

onMounted(() => {
  setTimeout(() => {
    Loadingc = false
  }, 100)
})

components: {PopYear}
components: {Loading}
</script>


<style scoped>
#vehicles-background {
  background-image: url('../assets/img/vehiclesBackground.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  height: 1080px;
}
</style>

