<script lang="ts">
import LoginButton from './LoginButton.vue';
import LogoAlterdata from './LogoAlterdata.vue';
import MainHeaderList from './MainHeaderList.vue';
import NavBar from './NavBar.vue';

export default {
  name: 'TopHeader',
  components: {
    NavBar,
    LoginButton,
    MainHeaderList
  },
  data() {
    return {
      services: [
        {
          title: 'Início',
          link: '/'
        },
        {
          title: 'Veículos',
          link: '/veiculos'
        },
        {
          title: 'Animes',
          link: '/animes'
        },
        {
          title: 'Contato',
          link: '/contato'
        },
        {
          title: 'Sobre',
          link: '/sobre'
        }
      ]
    }
  }
}
</script>


<template>
  <header class="bg-cyan-800 px-2  sm:px-4 py-2.5 w-full z-20 top-0 left-0">
    <div class="container flex flex-wrap items-center justify-between mx-auto">
      <div>
        <LogoAlterdata />
      </div>
      <div class="flex md:order-2">
        <LoginButton />
      </div>
      <MainHeaderList />
      <NavBar title="Services" :items="services" />
    </div>
  </header>
</template>



