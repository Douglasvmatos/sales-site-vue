<template>
  <div class="flex hover:bg-gray-500 cursor-pointer justify-center align-center items-center bg-white h-12 w-24 rounded-xl font-bold">
    <router-link v-if="!$store.state.email" to="/login">Login</router-link>
    <a v-if="$store.state.email" @click="logout">Logout</a>
  </div>
</template>
  
<script>
export default {
  name: 'LoginButton',
  methods: {
    logout(){
      this.$store.commit('logout');
    }
  },
  mounted(){
    this.$store.commit('initializeStore')
  }
}
</script>


