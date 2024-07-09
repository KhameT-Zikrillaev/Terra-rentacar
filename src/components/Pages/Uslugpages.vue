<template>
  <div class="uslugpages bg-[#1e1f27]">
    <div class="container py-14 px-4">
    <RouterLink to="/" class="text-[14px]  text-[#fff9]"><p class="text-center p480:text-left">{{$t('Luxury Cars for Rent in Dubai / Services')}}</p></RouterLink>
    <h3 class="text-white text-[22px] text-center p480:text-left p480:text-[36px] py-[40px] font-semibold">{{ $t('SERVICES') }}</h3>

    <div class="uslug__con flex flex-wrap gap-6">

         <div class="uslug__con-card  p-2 p768:w-[360px]">
          <img class="mx-auto p768:mx-0" src="@/assets/images/uslug-1.jpg" alt="">
          <h4 class="text-white text-[24px] my-[25px] font-semibold leading-[100%]">{{ $t('Ride a buggy in Dubai and have fun') }}</h4>
          <p class="text-white text-[18px] leading-[160%] mb-[40px]">{{ $t('Experience the thrill of a dune buggy tour in Dubai with us. We offer free hotel pick-up & drop-off service. Book now') }}</p>

          <RouterLink to="/uslugbuggies" class="linkuslug flex items-center justify-evenly w-[200px] hover:ml-4"><p class="text-white font-bold">{{$t('LEARN MORE')}}</p> <img src="@/assets/icon/strella.svg" alt=""></RouterLink>
         </div>

         <div class="uslug__con-card  p-2 p768:w-[360px]">
          <img class="mx-auto p768:mx-0" src="@/assets/images/uslug-2.jpg" alt="">
          <h4 class="text-white text-[24px] my-[25px] font-semibold leading-[100%]">{{$t('Photoshoot with luxury car rental Dubai')}}</h4>
          <p class="text-white text-[18px] leading-[160%] mb-[40px]">{{ $t('Professional car photoshoot as an additional type of service at Auto Zoom Car Rental') }}</p>

          <RouterLink to="/uslugcar" class="linkuslug flex items-center justify-evenly w-[200px] hover:ml-4"><p class="text-white font-bold">{{$t('LEARN MORE')}}</p> <img src="@/assets/icon/strella.svg" alt=""></RouterLink>
         </div>

    </div>
  </div>
  </div>


</template>

<script setup>
import { RouterLink,RouterView } from 'vue-router';
import { useCounterStore } from "@/stores/counter";
const CounterStore = useCounterStore() 
CounterStore.scrollTop() 
CounterStore.searchactive = false
</script>

<style lang="scss" scoped>
.linkuslug{
  transition: 1s;
}
</style>