import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Veiculos from '../views/Veiculos.vue';
import Contato from '../views/Contato.vue';
import Login from '../views/Login.vue';
import Animes from '../views/Animes.vue';
import About from '../views/About.vue';


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      components: {
        default: Home,
      },
    },
    {
      path: '/veiculos',
      name: 'veiculos',
      components: {
        default: Veiculos,
      },
    },
    {
      path: '/contato',
      name: 'contato',
      components: {
        default: Contato,
      },
    },
    {
      path: '/login',
      name: 'login',
      components: {
        default: Login,
      },
      
    },
    {
      path: '/animes',
      name: 'animes',
      components: {
        default: Animes,
      },
    },
    {
      path: '/sobre',
      name: 'sobre',
      components: {
        default: About,
      },
    },
  ],
});

export default router;
