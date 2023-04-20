<template>
  <div id="banner-contact" class="flex flex-column w-screen h-max items-center justify-center bg-slate-100" >
    <Form />
</div>
</template>

<script lang="ts">
import Form from '@/components/Form/Form.vue';

export default {
  components: {
    Form
  }

}
</script>

<style scoped>
#banner-contact {
  background-image: url('../assets/img/contactUs.jpg');
  background-size: cover;
  display: flex;
  z-index: 10;
  height: 1800px;
  align-items: center;
}
</style>



