<template>
  <main class="flex flex-col h-screen w-screen overflow-x-hidden">
    <TopHeader />
    <router-view />
  </main>
</template>

<script lang="ts">

import TopHeader from './components/TopHeader.vue';
export default {
 name: 'App',
 components: {
  TopHeader
 }
}
</script>

