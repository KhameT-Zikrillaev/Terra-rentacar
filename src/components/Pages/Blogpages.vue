<template>
<div class="blogpages bg-[#1e1f27]">
  <div class="container py-6 px-4">
    <RouterLink to="/" class="text-[14px]  text-[#fff9]"><p class="text-center p480:text-left">{{ $t('Luxury Cars for Rent in Dubai / Blog') }}</p></RouterLink>
    <h4 class="text-white text-[22px] text-center p480:text-left p480:text-[36px] py-[20px] font-semibold">{{$t('Blog')}}</h4>

<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~menu-con~~~~~~~~~~~~~ -->
<div class="blog-con-menu bg-[#272933] flex flex-col gap-14 text-white p-[20px] p768:p-[30px]">


  <!-- ~~~~~~~~~~~~~~~~~card-1~~~~~~~~~~~~~~~~~~~~ -->
<div class="blog-con-card p768:flex gap-8">
  <img class=" mx-auto p768:mx-0 p768:w-[220px] p768:h-[250px]" src="@/assets/images/blog-1.jpg" alt="">
 <div class="info flex flex-col justify-between mt-6 p768:mt-0">
  <h2 class=" text-[20px] p480:text-[36px] mb-3 p768:mb-[35px] leading-[110%] font-semibold mt-2">{{ $t('Top 3 Destinations to Visit in Dubai in a Rental Car') }}</h2>
  <p class="text-[16px] p480:text-[18px] font-serif">{{ $t('One of the main reasons to hire a car in Dubai is the quality of the UAE roads. According to the World Economic Forum, the Emirates belong to the top seven countries with the most exemplary road infrastructure.') }}</p>
  <div class="flex mt-[20px] p768:mt-0  items-center justify-between"><span>{{ $t('25 Seb 2022') }}</span> <RouterLink to="/blogview1" class="transform  hover:scale-110"><img src="@/assets/icon/strella.svg" alt=""></RouterLink></div>
 </div>
</div>
 <!-- ~~~~~~~~~~~~~~~~~card-2~~~~~~~~~~~~~~~~~~~~ -->
<div class="blog-con-card p768:flex gap-8">
  <img class=" mx-auto p768:mx-0 p768:w-[220px] p768:h-[250px]" src="@/assets/images/blog-2.jpg" alt="">
 <div class="info flex flex-col justify-between mt-6 p768:mt-0">
  <h2 class=" text-[20px] p480:text-[36px] mb-3 p768:mb-[35px] leading-[110%] font-semibold mt-2">{{ $t('Top 5 wonderful spots for a car photo session in Dubai') }}</h2>
  <p class="text-[16px] p480:text-[18px] font-serif">{{ $t('There are so many wonderful things to do in Dubai, but when you rent a car your opportunities are nearly doubled. The number of places you will die to go to and make memorable pictures is such that it makes you impossible to resist to hire a mode of transportation, if not for a day or two, then at least for a couple of hours. And, while doing so, who could prove against the weakness of taking a photo of themselves inside or near the car they’ve rented?') }}</p>
  <div class="flex mt-[20px] p768:mt-0  items-center justify-between"><span>{{ $t('11 Feb 2022') }}</span> <RouterLink to="/blogview2" class="transform  hover:scale-110"><img src="@/assets/icon/strella.svg" alt=""></RouterLink></div>
 </div>
</div>
<!-- ~~~~~~~~~~~~~~~~~card-3~~~~~~~~~~~~~~~~~~~~ -->
<div class="blog-con-card p768:flex gap-8">
  <img class=" mx-auto p768:mx-0 p768:w-[220px] p768:h-[250px]" src="@/assets/images/blog-3.jpg" alt="">
 <div class="info flex flex-col justify-between mt-6 p768:mt-0">
  <h2 class=" text-[20px] p480:text-[36px] mb-3 p768:mb-[35px] leading-[110%] font-semibold mt-2">{{ $t('Top 5 Reasons to Rent a Car Dubai Style this Summer') }}</h2>
  <p class="text-[16px] p480:text-[18px] font-serif">{{ $t("Summer is more than just a beach and a body, and Autozoom Luxury Car Rental is more than just a regular car hire business. We're your one-stop four-wheel solution to making the most of your time in Dubai.") }}</p>
  <div class="flex mt-[20px] p768:mt-0  items-center justify-between"><span>{{ $t('31 Jul 2022') }}</span> <RouterLink to="/blogview3" class="transform  hover:scale-110"><img src="@/assets/icon/strella.svg" alt=""></RouterLink></div>
 </div>
</div>

</div>


  </div>


</div>
  

</template>

<script setup>
import { useCounterStore } from '@/stores/counter';
const CounterStore = useCounterStore()
CounterStore.scrollTop()
CounterStore.searchactive = false
</script>

<style lang="scss" scoped>


</style>