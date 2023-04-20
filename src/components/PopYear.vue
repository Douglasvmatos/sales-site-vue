<template>
    <div id="popYear" class="h-10">
        <button class="" @click="showModal = true">
            <i class="fa-solid fa-eye"></i>
        </button>
        <transition name="fade" appear>
            <div class="modal-overlay" v-if="showModal" @click="showModal = false"></div>
        </transition>
        <transition name="slide" appear>
            <div class="modal-extern" v-if="showModal">
                <div class="modal border-2 border-black">
                    <tr v-for="(product, index) in products" :key="index" class="flex flex-col text-xl ">
                        <td v-if="index === 3" class="py-2"><span class="font-bold">Código: </span>{{ product.codigo }}</td>
                        <td v-if="index === 3" :key="index" class="py-2"><span class="font-bold">Ano/Modelo:</span> {{
                            product.nome }}</td>
                        <button v-if="index === 3" class="button rounded-lg bg-gray-100 mt-4 " @click="showModal = false">
                            Sair
                        </button>
                    </tr>
                </div>
            </div>
        </transition>
    </div>
</template>

<script lang="ts">

import Product from '../services/product'

type IPopYer = {
    codigo: string,
    nome: string,
}

export default {
    name: 'PopYear',
    data() {
        return {
            products: [] as IPopYer[],
            showModal: false
        }
    },
    mounted() {
        Product.list().then(response => {
            this.products = response.data.anos
        })
    }
}
</script>


<style scoped>
#popYear {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow-x: hidden;
}

.modal-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
}

.modal-extern {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 99;
    width: 100%;
    height: 100%;
    background-color: rgb(0, 0, 0, .6);
    border-radius: 16px;
    padding: 25px;
}

.modal {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 99;
    width: 100%;
    /* height: 100%; */
    max-width: 400px;
    background-color: rgb(94, 141, 194);
    border-radius: 16px;
    padding: 25px;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity .5s
}

.fade-enter,
.fade-leave-to {
    opacity: 0
}

.slide-enter-active,
.slide-leave-active {
    transition: transform .5s
}

.slide-enter,
.slide-leave-to {
    transform: translateY(-50%) translateX(100vw)
}</style>