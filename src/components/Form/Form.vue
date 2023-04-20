<template>
    <form @submit.prevent="submit" class="bg-gray-600 mt-8 mb-16 form max-h-[1rem]">
        <div class="flex flex-row justify-around">
            <div class="form-control w-full pr-2">
                <label for="name">Nome</label>
                <input 
                type="name" 
                v-model="form.name" 
                placeholder="Nome" 
                class="input-form"
                autocomplete="off" />
            </div>
            <div class="form-control w-full pr-2 ">
                <label for="lastName">Sobrenome</label>
                <input 
                type="lastName" 
                v-model="form.lastName" 
                placeholder="Sobrenome"
                class="input-form" 
                autocomplete="off" />
            </div>
        </div>

        <div class="form-control w-full ">
            <label for="email">E-mail</label>
            <input 
            type="email" 
            v-model="form.email"
            class="input-form" 
            placeholder="exemplo@email.com" 
            autocomplete="off"
             />
        </div>
        <div class="form-control w-full ">
            <label for="phone">Telefone</label>
            <input 
            type="phone" 
            v-model="form.phone"
            class="input-form"  
            placeholder="(XX)9XXXX-XXXX" 
            autocomplete="off"/>
        </div>
        <div class="flex flex-col form-control mt-10 ">
            <label for="message" class="mb-2">Mensagem</label>
            <textarea 
            v-model="form.description" 
            class="input-form h-36" 
            placeholder="Escreva uma mensagem aqui"
            autocomplete="off"
            />
        </div>

        <button 
        type="submit" 
        class="button-contact w-56 mt-6"
        @click="submitForm"
        >Enviar</button>
    </form>
</template>
  
<script lang="ts">
export default {
    data() {
        return {
            form: {
                name: '',
                lastName: '',
                email: '',
                description: '',
                phone: ''
            }
        }
    },
    methods: {
        async submit() {
            this.$emit('submit', this.form)
        },
        async submitForm() {
      console.log('UserName:' + this.form.name)
      this.form.name = '';
      console.log('LastName:' + this.form.lastName)
      this.form.lastName = '';
      console.log('Email:' + this.form.email)
      this.form.email = '';
      console.log('Phone:' + this.form.phone)
      this.form.phone = '';
      console.log('Message:' + this.form.description)
      this.form.description = '';
    }
    }
}
</script>