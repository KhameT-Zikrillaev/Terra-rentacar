<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Grid, Pagination, Autoplay,Navigation} from 'swiper/modules';
import { useCounterStore } from "@/stores/counter";
const CounterStore = useCounterStore() 
CounterStore.scrollTop() 
CounterStore.searchactive = false
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { ref } from 'vue';
const modules = [Grid, Pagination, Autoplay,Navigation]

const productsbrand = ref([]);

async function fletchcard() {
  const res = await fetch(
    "https://realauto.limsa.uz/api/brands"
  );
  const data = await res.json();
  productsbrand.value = data?.data;
}
fletchcard()
const breakpoints={
      '320': {
        grid:{
          rows:2
        },
        slidesPerView: 2,
        spaceBetween: 20
      },  
      '768': {
        grid:{
          rows:2
        },
        slidesPerView: 4,
        spaceBetween: 30
      },

      '1024': {
        grid:{
          rows:2
        },
        slidesPerView: 6,
      },

    }



</script>

<template>
  
 <div class="container py-[50px]"> 
  <h1 class=" p320:text-[20px] p320:text-center p480:text-left p480:text-[30px]  p768:text-[40px] ml-[15px] font-semibold text-white">{{$t('BRANDS')}}</h1>
  
  <div class="swiper-con mt-[25px]">
    <swiper
    :slidesPerView="2"
    :breakpoints="breakpoints"
    :grid="{
      rows: 2,
    }"
    :spaceBetween="30"
    :pagination="{
      clickable: true,
    }"
    :modules="modules"
    :autoplay="{
      delay: 2500
    }"
    class="mySwiper"
  >
  
    <swiper-slide class="swiper-slidebrand" v-for="item in productsbrand" :key="item">
      <RouterLink class="w-full h-full flex flex-col justify-center" to="/avto" @click="CounterStore.fetchCarsByBrand(item.id)">
        <img class="imgswiper mx-auto object-contain w-[40px] h-[40px]"
        :src="'https://realauto.limsa.uz/api/uploads/images/' + item.image_src" alt="">
      <h3 class="text-[#7E7E7E] font-bold">{{ item.title }}</h3>
      </RouterLink>
    </swiper-slide>

    <swiper-slide class="swiper-slidebrand" v-for="item in productsbrand" :key="item">
      <RouterLink class="w-full h-full flex flex-col justify-center" to="/avto" @click="CounterStore.fetchCarsByBrand(item.id)" >
        <img class="imgswiper mx-auto object-contain w-[40px] h-[40px]"
        :src="'https://realauto.limsa.uz/api/uploads/images/' + item.image_src" alt="">
      <h3 class="text-[#7E7E7E] font-bold">{{ item.title }}</h3>
      </RouterLink>
    </swiper-slide>

  </swiper>
  </div>
 </div>




</template>



<style scoped>

.swiper {
  width: 100%;
  height: 450px;
  margin-left: auto;
  margin-right: auto;
  padding:15px;
}
.swiper-slidebrand {
  text-align: center;
  font-size: 18px;
  color:white;
  gap:5px;
  display: flex;
  box-shadow: 0px 0px 2px 1px #4d4c4c;
  position: relative;
}
.swiper-slidebrand::after{
        z-index: -1;
        content: '';
        position: absolute;
        width: calc(100% + 6px);
        height: calc(100% + 6px);
        top:-3px;
        left:-3px;
        background: linear-gradient(45deg,#1e1f27,#1e1f27,#111219,#111219);
        background-size: 300%;
        animation: shadow 5s linear infinite;
    }
.swiper-slidebrand:hover{
  background: linear-gradient(161.55deg, hsla(0, 0%, 100%, .294) -9.06%, #11121997 39.4%, #111219);
  background-size: 300%;
  animation: shadow 5s linear infinite;
}
@keyframes shadow {
    0% {
       background-position: 0 0;
    }
    50%{
        background-position: 100%;
    }
    100%{
        background-position: 0 0;
    }
}
@keyframes gradient {
    0% {
        background-position: 0% 50%;
    }

    50% {
        background-position: 100% 50%;
    }

    100% {
        background-position: 0% 50%;
    }
}

</style>