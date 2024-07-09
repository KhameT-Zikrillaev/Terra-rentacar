<template>
  <div class="aboutpages relative">
    <img class="imgCoverAbout hidden p992:flex w-full h-full absolute opacity-30 top-0" src="@/assets/images/mm34.png" alt="">
    <div class="container relative text-white text-center p480:text-left py-[25px] p480:py-[50px] px-2">
      <RouterLink to="/" class="text-[#fff9]">{{ $t('Luxury Cars for Rent in Dubai / aboutUs') }}</RouterLink>
       <h3 class=" text-[26px]  p480:text-[32px] font-semibold my-[15px] p480:my-[50px]">{{ $t('ABOUT US') }}</h3>
       <h4 class=" text-[22px] p480:text-[30px]">{{$t('Welcome to Auto Zoom Car Rental Co LLC – Your Partner in Unforgettable Journeys in Dubai!') }}</h4>
       <p class="text-[#cacaca] text-[19px]   p480:mb-[50px] mt-[15px]">{{ $t('In a world where every trip is an adventure, Auto Zoom Car Rental Co LLC offers you a unique car rental experience in the heart of Dubai.') }}</p>
       <h3 class="text-[26px]  p480:text-[32px] font-semibold mt-[20px] p480:mt-[50px] mb-[30px]">{{$t('Why Auto Zoom?')}}</h3>
   
       <!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~flexall~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->
       <article class="flex flex-col gap-7">
        <div class="txt-con leading-[30px]">
        <h3 class="text-[22px] font-bold inline-block mr-[5px]">{{$t('Elegant Car Fleet:')}} </h3>
        <p class="inline text-[#d8d8d8] text-[18px] font-normal">{{ $t('We provide you the opportunity to choose from our luxurious car fleet – from sleek sedans to powerful SUVs. We have a vehicle to match your style and meet your needs.') }}</p>
      </div>

      <div class="txt-con leading-[30px]">
        <h3 class="text-[22px] font-bold inline-block mr-[5px]">{{$t('Worry-Free Rental:')}} </h3>
        <p class="inline text-[#d8d8d8] text-[18px] font-normal">{{ $t('Our goal is to make your journey as comfortable as possible. Flexible rental terms, the option to hire with a driver, and a wide range of additional services – all for your convenience.') }}</p>
      </div>

      <div class="txt-con leading-[30px]">
        <h3 class="text-[22px] font-bold inline-block mr-[5px]">{{$t('Transparency and Trust:')}} </h3>
        <p class="inline text-[#d8d8d8] text-[18px] font-normal">{{ $t('We value every customer, so our prices are honest and transparent. No hidden fees, no unexpected surprises. Trust us, and we will make your rental experience straightforward and clear.') }}</p>
      </div>

      <div class="txt-con leading-[30px]">
        <h3 class="text-[22px] font-bold inline-block mr-[5px]">{{$t('Service at Your Level:')}} </h3>
        <p class="inline text-[#d8d8d8] text-[18px] font-normal">{{ $t('Our friendly and professional team is ready to bring your ideas to life. We aim not just to provide a car but to create a genuine automotive experience for you.') }}</p>
      </div>



       </article>
  
     <h5 class="text-[22px] font-bold mt-[30px] p480:mt-[100px]">{{$t('Our Mission:')}}</h5>
     <p class="mt-2 text-[18px]">{{ $t('Auto Zoom Car Rental Co LLC is created with one goal – to make every journey unforgettable. We strive to offer you not just a car but the key to new experiences and adventures.') }}</p>
     <h5 class="text-[22px] font-bold mt-[15px]">{{$t('Contact Us:')}}</h5>
     <p class="mt-2 text-[18px]">{{ $t('Trust the professionals – trust Auto Zoom Car Rental Co LLC. Get in touch with us today to start your exciting journey through Dubai in our stylish and reliable cars. Allow yourself to savor every moment of your trip.') }}</p>


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