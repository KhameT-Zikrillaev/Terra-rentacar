<script setup>
 import { Swiper, SwiperSlide } from 'swiper/vue';
 import { EffectCoverflow, Navigation} from 'swiper/modules';
 import { useCounterStore } from '@/stores/counter';
const CounterStore = useCounterStore()
 import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation'
import { ref } from 'vue';
const modules = ref([Navigation,EffectCoverflow])
const breakpoints3={
      '320': {
        spaceBetween: 70,
        slidesPerView: 1
    
      },  
      '480': {
        slidesPerView: 1, 
    
      }, 

      '1024': {
        spaceBetween: 30,
        slidesPerView: 3
      },

    }

const navigationButtons = {
  nextEl: '.sales__button-next',
  prevEl: '.sales__button-prev',
};


</script>


<template>

<div class="swiper__con relative">
    <swiper
    :loop="true"
    :navigation="navigationButtons"
    :breakpoints="breakpoints3"
     effect="coverflow"
    :slidesPerView="1"
    :spaceBetween="30"
    :coverflowEffect="{
            scale: 0.1,
            rotate: 0,
            stretch: -50,
            depth: 20,
            modifier: 0.4,
            slideShadows: false,
          }"
    :modules="modules"
    class="mySwiperComp"
  >
    <swiper-slide>
      <RouterLink to="/avto" @click="CounterStore.fletchallcard()" class="routerspawn cursor-pointer">
        <img class="img w-full h-full"
        src="@/assets/images/2W.png" />
      </RouterLink>
    </swiper-slide>
    <swiper-slide >
      <RouterLink to="/avto" @click="CounterStore.fletchallcard()" class="routerspawn cursor-pointer">
        <img class="img w-full h-full"
        src="@/assets/images/1W.png" />
      </RouterLink>
    </swiper-slide>
    <swiper-slide >
      <RouterLink to="/avto" @click="CounterStore.fletchallcard()" class="routerspawn cursor-pointer">
        <img class="img w-full h-full"
        src="@/assets/images/3W.png" />
      </RouterLink>
    </swiper-slide>
    <swiper-slide>
      <RouterLink to="/avto" @click="CounterStore.fletchallcard()" class="routerspawn cursor-pointer">
        <img class="img w-full h-full"
        src="@/assets/images/4W.png" />
      </RouterLink>
    </swiper-slide> 
 <div class="sales__swiper-buttons">
<button class="sales__swiper-prev">
 <img src="@/assets/icon/logoTerra5.png" alt="">
</button>
<button class="sales__swiper-next">
  <img src="@/assets/icon/logoTerra5.png" alt="">
</button>
 </div>

    <div class="sales__button-next absolute cursor-pointer bottom-0 z-[50] left-[5%] p480:left-[10%] p992:left-[20%] p1200:left-[30%]">
      <img src="@/assets/icon/arrow-left.svg" alt="">
    </div>
    <div class="sales__button-prev absolute cursor-pointer bottom-0 z-[50] right-[5%] p480:right-[10%] p992:right-[20%] p1200:right-[30%]">
      <img src="@/assets/icon/arrow-right.svg" alt="">
    </div>

  </swiper>

</div>
</template>


<style scoped >
.sales__button-next:hover{
  filter:drop-shadow(1px 5px 10px #ff0000);
  transform: scale(1.1);
}
.sales__button-prev:hover{
  filter:drop-shadow(1px 5px 10px #ff0000);
  transform: scale(1.1);
}
.routerspawn:hover{
  animation: 5s animationspawn alternate-reverse infinite;
}
@keyframes animationspawn {
    0% {
      filter:drop-shadow(1px 1px 10px #000b47);
    }
    50%{
      filter:drop-shadow(1px 1px 10px #af5e5e);
    }
    100%{
      filter:drop-shadow(1px 1px 10px #8d8c8c);
    }
}
.mySwiperComp{
    outline: hidden;
    width: 100%;
    height: 300px; 
    padding:0px; 
    margin-top: 100px;
}
@media (max-width: 1024px) {
  .mySwiperComp {
    padding:0 100px; 
  }
}
@media (max-width: 768px) {
  .mySwiperComp {
    padding:0 30px; 
    height: 200px; 
  }
}
  .swiper__con{
    background: linear-gradient(0deg, #343744 .26%, #343744 73.51%, #24242400);
    margin: 0 auto;
    /* padding: 0 0 45px; */
    position: relative;
    width: 100%
  }

</style>