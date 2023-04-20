<template>
    <div class="flex flex-row alinhar-ao-centro h-full w-full bg-blue-200 justify-around space-x-48">
        <div class="w-max p-20 h-max flex flex-col justify-center bg-gray-200 align-center rounded-2xl">
             <div class="my-10">
                <strong class="text-2xl text-center flex justify-center">Autentique-se para acessar</strong>
                <strong class="text-2xl text-center flex justify-center"> a central do Cliente</strong>
            </div>
            <form  
            @submit="Submit" 
            method="post" 
            class="flex flex-col justify-center items-center w-full"
            >
                <div >
                    <label for="uname"><b>Email</b></label>
                    <input 
                    type="email" 
                    id='email' 
                    placeholder="exemplo@mail.com" 
                    v-model="form.email" 
                    class="input-form min-w-min-[150px] w-[350px] bg-gray-500"
                    autocomplete="off"
                    >
                </div>
                <div class="mt-5">
                    <label for="psw"><b>Password</b></label>
                    <input 
                    type="password" 
                    placeholder="Entrar com senha" 
                    v-model="form.password" 
                    required 
                    class="input-form min-w-min-[150px] w-[350px] bg-gray-500"
                    autocomplete="off">
                </div>
                <button type="submit" class="button-contact w-44 justify-center mt-10">Login</button>
            </form>
            <br>
        </div>
        <div class="flex align-center text-center justify-center space-x-3 text-2xl p-5 ">
            <div v-if="!$store.state.email !== true" id="profile">
                <strong > Você está logado com e-mail:</strong>
                <br><br>
                <div>{{$store.state.email}}</div>
            </div>
            <div v-else>
                <strong > Você não está logado!</strong>
            </div>
        </div>
    </div>
</template>
    
<script>
    export default {
        name: 'Login',
        data() {
        return {
          form: {
                email:"",
                password:""
            },
        }
        },
        methods :{
            Submit(event){
                event.preventDefault()
                this.$store.commit('login',this.form.email)
                console.log(response)
            }
        }  
    }
</script>