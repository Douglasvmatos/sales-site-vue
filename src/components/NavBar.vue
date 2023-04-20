<template>
  <div class="flex justify-center items-center md:hidden w-8 px-14 cursor-pointer 
             bg-white hover:bg-gray-500 h-12 rounded-xl font-bold" @click="isOpen = !isOpen">
    <i class="fa-solid fa-bars"></i>
    <svg viewBox="0 0 1030 638" width="10">
      <path d="M1017 68L541 626q-11 12-26 12t-26-12L13 68Q-3 49 6 24.5T39 0h952q24 0 33 24.5t-7 43.5z" fill="#FFF"></path>
    </svg>
    <transition name="fade" appear>
      <div class="py-2 absolute text-white px-6 w-max mt-[370px]" v-if="isOpen">
        <div v-for="(item, i) in items" :key="i"
          class="bg-cyan-800  hover:bg-cyan-500 w-28 p-2 mb-2 rounded-xl space-y-7">
          <a :href="item.link" class="flex text-center justify-center">{{ item.title }}</a>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'dropdown',
  props: ['title', 'items'],
  data() {
    return {
      isOpen: false
    }
  }
}
</script>
