<script setup>
import { useCounterStore } from "@/stores/counter";
const CounterStore = useCounterStore() 
CounterStore.scrollTop() 
</script>


<template>
    <div class="uslugSportCar bg-[#1E1F27]">
<div class="container py-[50px]">
    <p class=" text-[#fff9] text-[14px] text-center p768:text-left mx-2">{{ $t('Luxury Cars for Rent in Dubai/ Services/ Ride a buggy in Dubai and have fun') }}</p>
    <h3 class="text-white text-[32px] text-center p768:text-left my-[10px] p768:my-[50px] mx-2 font-semibold">{{ $t('Ride a buggy in Dubai and have fun') }}</h3>
    <div class="card-con flex  gap-2 flex-wrap justify-center p1200:justify-between p-2">

        <div data-aos="fade-right"
          data-aos-offset="20" class="cards w-[300px] p768:w-[380px]  rounded-lg pb-[25px]">
          <img class="w-full h-[230px] rounded-lg" src="@/assets/images/uslug-sport-1.jpg" alt="">
          <div class="text-container px-[25px]">

            <h3 class="text-white mt-[25px]">{{$t('BASIC')}}</h3>
          <div class="text-white mt-[30px] flex items-center gap-5"><p class="border border-solid text-[18px] border-[#11d198] py-1 px-5 rounded-lg">1000</p><p>{{$t('one person')}}</p></div>

            <p class="text-white mt-[25px]">{{ $t('Dune buggies in Dubai Book your ride on the most exciting adventure activity to hit the desert and later pamper your self to a traditional Arabian hospitality.') }}</p>
            <p class="text-white text-[26px] font-semibold my-[25px]">{{$t('Package Inclusions:')}}</p>
            <div class="flex items-center gap-5 mt-[15px]"><img src="@/assets/icon/check.png" alt=""><p class="text-white text-[18px] font-semibold">{{ $t('Premium Transfer to camp') }}</p></div>
            <div class="flex items-center gap-5 mt-[15px]"><img src="@/assets/icon/check.png" alt=""><p class="text-white text-[18px] font-semibold">{{ $t('Dune Buggy riding 1.5 hours') }}</p></div>
            <div class="flex items-center gap-5 mt-[15px]"><img src="@/assets/icon/check.png" alt=""><p class="text-white text-[18px] font-semibold">{{$t('Falcone shoting')}}</p></div>
            <div class="flex items-center gap-5 mt-[15px]"><img src="@/assets/icon/check.png" alt=""><p class="text-white text-[18px] font-semibold">{{ $t('Camel') }}</p></div>
            <div class="flex items-center gap-5 mt-[15px]"><img src="@/assets/icon/check.png" alt=""><p class="text-white text-[18px] font-semibold">{{ $t('VIP room') }}</p></div>
            <div class="flex items-center gap-5 mt-[15px]"><img src="@/assets/icon/check.png" alt=""><p class="text-white text-[18px] font-semibold">{{ $t('Fruits, Drinks, BBQ') }}</p></div>
            <a href="tel:+998990000441"><button class="w-full bg-[#fe363b] mt-[15px] text-white py-3 font-bold text-[26px] rounded-2xl">{{$t('BOOK NOW')}}</button></a>
          </div>
         
        </div>


        <div data-aos="fade-up"
          data-aos-offset="20" class="cards w-[300px] p768:w-[380px]  rounded-lg pb-[25px]">
          <img class="w-full h-[230px] rounded-lg" src="@/assets/images/uslug-sport-2.jpg" alt="">
          <div class="text-container px-[25px]">

            <h3 class="text-white mt-[25px]">{{$t('BASIC')}}</h3>
          <div class="text-white mt-[30px] flex items-center gap-5"><p class="border border-solid text-[18px] border-[#11d198] py-1 px-5 rounded-lg">2000</p><p>{{$t('two person')}}</p></div>

            <p class="text-white mt-[25px]">{{ $t('Dune buggies in Dubai Book your ride on the most exciting adventure activity to hit the desert and later pamper your self to a traditional Arabian hospitality.') }}</p>
            <p class="text-white text-[26px] font-semibold my-[25px]">{{$t('Package Inclusions:')}}</p>
            <div class="flex items-center gap-5 mt-[15px]"><img src="@/assets/icon/check.png" alt=""><p class="text-white text-[18px] font-semibold">{{ $t('Premium Transfer to camp') }}</p></div>
            <div class="flex items-center gap-5 mt-[15px]"><img src="@/assets/icon/check.png" alt=""><p class="text-white text-[18px] font-semibold">{{ $t('Dune Buggy riding 1.5 hours') }}</p></div>
            <div class="flex items-center gap-5 mt-[15px]"><img src="@/assets/icon/check.png" alt=""><p class="text-white text-[18px] font-semibold">{{$t('Falcone shoting')}}</p></div>
            <div class="flex items-center gap-5 mt-[15px]"><img src="@/assets/icon/check.png" alt=""><p class="text-white text-[18px] font-semibold">{{ $t('Camel') }}</p></div>
            <div class="flex items-center gap-5 mt-[15px]"><img src="@/assets/icon/check.png" alt=""><p class="text-white text-[18px] font-semibold">{{ $t('VIP room') }}</p></div>
            <div class="flex items-center gap-5 mt-[15px]"><img src="@/assets/icon/check.png" alt=""><p class="text-white text-[18px] font-semibold">{{ $t('Fruits, Drinks, BBQ') }}</p></div>
            <a href="tel:+998990000441"><button class="w-full bg-[#fe363b] mt-[15px] text-white py-3 font-bold text-[26px] rounded-2xl">{{$t('BOOK NOW')}}</button></a>
          </div>
         
        </div>

        <div data-aos="fade-left"
          data-aos-offset="20" class="cards w-[300px] p768:w-[380px]  rounded-lg pb-[25px]">
          <img class="w-full h-[230px] rounded-lg" src="@/assets/images/uslug-sport-3.jpg" alt="">
          <div class="text-container px-[25px]">

            <h3 class="text-white mt-[25px]">{{$t('BASIC')}}</h3>
          <div class="text-white mt-[30px] flex items-center gap-5"><p class="border border-solid text-[18px] border-[#11d198] py-1 px-5 rounded-lg">3000</p><p>{{$t('three person')}}</p></div>

            <p class="text-white mt-[25px]">{{ $t('Dune buggies in Dubai Book your ride on the most exciting adventure activity to hit the desert and later pamper your self to a traditional Arabian hospitality.') }}</p>
            <p class="text-white text-[26px] font-semibold my-[25px]">{{$t('Package Inclusions:')}}</p>
            <div class="flex items-center gap-5 mt-[15px]"><img src="@/assets/icon/check.png" alt=""><p class="text-white text-[18px] font-semibold">{{ $t('Premium Transfer to camp') }}</p></div>
            <div class="flex items-center gap-5 mt-[15px]"><img src="@/assets/icon/check.png" alt=""><p class="text-white text-[18px] font-semibold">{{ $t('Dune Buggy riding 1.5 hours') }}</p></div>
            <div class="flex items-center gap-5 mt-[15px]"><img src="@/assets/icon/check.png" alt=""><p class="text-white text-[18px] font-semibold">{{$t('Falcone shoting')}}</p></div>
            <div class="flex items-center gap-5 mt-[15px]"><img src="@/assets/icon/check.png" alt=""><p class="text-white text-[18px] font-semibold">{{ $t('Camel') }}</p></div>
            <div class="flex items-center gap-5 mt-[15px]"><img src="@/assets/icon/check.png" alt=""><p class="text-white text-[18px] font-semibold">{{ $t('VIP room') }}</p></div>
            <div class="flex items-center gap-5 mt-[15px]"><img src="@/assets/icon/check.png" alt=""><p class="text-white text-[18px] font-semibold">{{ $t('Fruits, Drinks, BBQ') }}</p></div>
            <a href="tel:+998990000441"><button class="w-full bg-[#fe363b] mt-[15px] text-white py-3 font-bold text-[26px] rounded-2xl">{{$t('BOOK NOW')}}</button></a>
          </div>
         
        </div>





      
    </div>
</div>
</div>
</template>



<style >
.cards{
    background: linear-gradient(62.37deg, #ffffff36 -7.76%, #0000000f 41.78%, #5050500d 102.46%);
}
</style>