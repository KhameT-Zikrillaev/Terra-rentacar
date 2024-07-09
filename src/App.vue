<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HeaderLayout from '@/components/Layouts/HeaderLayout.vue'
import MainLayout from '@/components/Layouts/MainLayout.vue'
import FooterLayout from '@/components/Layouts/FooterLayout.vue'
import { useCounterStore } from '@/stores/counter';
const CounterStore = useCounterStore()
CounterStore.animated = true
CounterStore.fletchallcard()



setTimeout(function () {
    CounterStore.animated = false;
  }, 4000); 



</script>

<template> 
    <div class="wrapper bg-[#111219] ">
   <div v-if="CounterStore.animated" class="loading fixed w-full z-[99]">
    <img class="logoLoading  p768:w-[30%]  absolute opacity-5 bottom-0 right-0" src="@/assets/images/McLaren.png" alt="">
    <div class="pl">
	<div class="pl__dot"></div>
	<div class="pl__dot"></div>
	<div class="pl__dot"></div>
	<div class="pl__dot"></div>
	<div class="pl__dot"></div>
	<div class="pl__dot"></div>
	<div class="pl__dot"></div>
	<div class="pl__dot"></div>
	<div class="pl__dot"></div>
	<div class="pl__dot"></div>
	<div class="pl__dot"></div>
	<div class="pl__dot"></div>
	<div class="pl__text"><img class="logoLoading" src="@/assets/icon/logoTerra5.png" alt=""></div>
    
</div>


  </div>
    <HeaderLayout/>
    <MainLayout/>
    <FooterLayout/>




    </div>



</template>

<style scoped>

</style>
