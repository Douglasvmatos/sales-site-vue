<template>
  <div id="anime-background" class="flex flex-col -mt-2">
    <h1 class="text-center mt-8 text-5xl text-white font-bold uppercase">Animes disponíveis</h1>
    <div class="min-w-[75%] relative overflow-x-auto sm:rounded-md m-10">
      <table>
        <thead class="header-table">
          <tr class="text-lg text-center border-0 border-black ">
            <th scope="col" class="px-6 py-3 border-2 border-black w-1/5">Título</th>
            <th scope="col" class="px-6 py-3 border-2 border-black w-1/5">Personagem</th>
            <th scope="col" class="px-6 py-3 border-2 border-black w-3/5">Descrição</th>
          </tr>
          <tr v-for="(anime, i) in animes" :key="i"
            class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-2 border-black">
            <th scope="row" class="px-6 py-4  font-medium text-gray-900 bg-gray-300 w-1/5">
              {{ anime.anime }}
            </th>
            <td class="px-6 py-4 w-1/5 border-2 border-black">
              {{ anime.character }}
            </td>
            <td class="px-6 py-4 text-center bg-gray-300 border-2 border-black">
              <th scope="row"
              class="h-20  px-6 py-4 font-medium flex justify-center items-center text-gray-900   w-auto dark:text-white">
              {{ anime.quote }}
            </th>
          </td>
        </tr>
      </thead>
    </table>
  </div>
</div>
<Loading v-if="Loadingc == true"/>
</template>

<script setup lang="ts">
import api from '@/services/api';
import { onMounted, ref } from 'vue';
import Loading from '@/components/Loading.vue';

type AnimesProps = {
  anime: String,
  character: String,
  quote: String,
}

components: {Loading}

const animes = ref([] as AnimesProps[]);

const fetchAnimes = () => api.get("/quotes").then((response) => {
animes.value = response.data})

onMounted(fetchAnimes)

let Loadingc = true

onMounted(() => {
  setTimeout(() => {
    Loadingc = false
  }, 150)
})

</script>


<style scoped>
#anime-background {
  background-image: url('../assets/img/animeBackground.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
}
</style>

