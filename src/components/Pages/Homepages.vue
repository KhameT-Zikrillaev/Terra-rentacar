<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Grid, Pagination, Autoplay,Navigation} from 'swiper/modules';
import { useCounterStore } from "@/stores/counter";
const CounterStore = useCounterStore()  
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import swpages from "@/components/swiper/swiper.vue"
import swiperIntro from "@/components/swiper/swiperIntro.vue"
import Faq from "@/components/Pages/Faqpages.vue"
import Uslug from "@/components/Pages/Uslugpages.vue"
import Brand from "@/components/Pages/Brandpages.vue"
CounterStore.scrollTop()
import { ref, onMounted, watch } from "vue";
CounterStore.searchactive = false
// ~~~~~~~~~~~~~~~~~~~~~images photos~~~~~~~~~~~~~~~~~~~~
import photo1 from "@/assets/images/1T.jpg"
import photo2 from "@/assets/images/2T.jpg"
import photo3 from "@/assets/images/3T.webp"
import photo4 from "@/assets/images/4T.jpg"
import photo5 from "@/assets/images/5T.jpg"
import photo6 from "@/assets/images/6T.webp"
import photo7 from "@/assets/images/7T.webp"
import photo8 from "@/assets/images/8T.webp"
import photo9 from "@/assets/images/9T.webp"
import photo10 from "@/assets/images/10T.webp"
function scrollTop(){
          window.scrollTo({
            behavior:'smooth',
            top:0,
          })
        }
scrollTop()
const modules = [Grid, Pagination, Autoplay,Navigation]
const breakpoints2={
      '320': {
        slidesPerView: 1,
      },  
      '480': {
        slidesPerView: 2,
      }, 
      '768': {
        slidesPerView: 4,
      },

      '1024': {
        slidesPerView: 6,
      },

    }

const photos=[
  {
    images:photo1
  },
  {
    images:photo2
  },
  {
    images:photo3
  },
  {
    images:photo4
  },
  {
    images:photo5
  },
  {
    images:photo6
  },
  {
    images:photo7
  },
  {
    images:photo8
  },
  {
    images:photo9
  },
  {
    images:photo10
  }
]
const photoOne=ref("")
const screenModal = ref(false)
function changeImages(item){
  photoOne.value = item
}



// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~location share~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const productlocation = ref("")
async function fetchCards() {
  const res = await fetch("https://realauto.limsa.uz/api/cars");
  const data = await res.json();
  productlocation.value = data?.data || [];
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~Group cars by Location~~~~~~~~~~~~~~~~~~
const carslocation = ref({});
function groupCarsloC() {
  carslocation.value = productlocation.value.reduce((acc, car) => {
    const location = car?.location?.name;
    if (!acc[location]) {
      acc[location] = [];
    }
    acc[location].push(car);
    return acc;
  }, {});
}
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~Group cars by City~~~~~~~~~~~~~~~~~~~
const carscity = ref({});
function groupCarsCity() {
  carscity.value = productlocation.value.reduce((acc, car) => {
    const city = car?.city?.name;
    if (!acc[city]) {
      acc[city] = [];
    }
    acc[city].push(car);
    return acc;
  }, {});
}


onMounted(async () => {
  await fetchCards();
  groupCarsloC();
  groupCarsCity();
});



watch(productlocation, () => {
  groupCarsloC();
  groupCarsCity();
});













</script>

<template>
  <div class="HomePages">
   <!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~section-1 Header Corusel~~~~~~~~~~~~~~~~~~~~~~~~~~~~ --> 
 <section class="Section-1">
    <article class="text-white text-center flex flex-col gap-2 px-[10px] relative z-0">
    <h1 class="mx-auto text-[24px] relative z-[1] tracking-[5px] mt-[25px] p992:mt-[100px] leading-[50px] font-[Merriweather-Regular] font-semibold max-w-[840px]  p768:text-[34px]">{{$t('TOP LUXURY CAR RENTAL EMIRATES')}} <br> №<span class="font-mono">1</span></h1>
   <h3 class="text-[#ffffff] relative z-[1] ">{{ $t('Best sports car & supercar rental Emirates, Exclusive offers on luxury car rental Emirates Cheap price') }}</h3>
    <RouterLink to="/avto" @click="CounterStore.fletchallcard()" class="btnRuB flex items-center text-[12px] mx-auto max-w-[400px] gap-2 relative z-[1] p992:text-[16px] mt-[15px]"><p>{{ $t('RENT A CAR EMIRATES CATALOG') }}</p>
      <svg class="imgbtn ml-[0px] " width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path class="path" d="M13 10L21 16.5L13 23L17.5714 16.5L13 10Z"  ></path>
        <circle class="circle" cx="16" cy="16" r="15.5" ></circle></svg></RouterLink>
    </article>

 <swiperIntro/>

  </section>

<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~section-2 Brand~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->
<section class="Section-2  p1024:pt-[100px]">
 <Brand/>
</section>

<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~section-3 avtostatic~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->
<section class="Section-3">
  <swpages/>
</section>

<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~section-4 uslug~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->
 <section class="Section-4">
   <Uslug/>
 </section>

<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~section-4 Article~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->
<section class="Section-5 bg-[#272933] relative">
<div class="container text-white  p-[15px] p768:py-[70px] p768:px-[10px] relative z-[1]">
  <h3 class="text-[28px]  p768:text-[40px] font-semibold">{{$t('LUXURY CAR RENTAL IN EMIRATES')}}</h3>
  <p class="leading-[30px]  p768:mt-[15px]">{{ $t('Are you ready to feel the adrenaline rush and unleash your inner speed demon? Look no further than Terra luxury car rental Dubai, the city where dreams become reality. In this ultimate guide to sports car rental Dubai, we will take you on a thrilling journey through the world of luxury and supercar rental Dubai. Imagine cruising down the iconic Sheikh Zayed Road in a sleek and powerful sports car rental Dubai style, turning heads and leaving everyone in awe of your style. Whether you are a car enthusiast or simply looking to') }}</p>

  <h3 class="text-[28px]  p768:text-[40px] font-semibold mt-[30px]">{{$t('What are the requirements to rent a luxury car in Dubai?')}}</h3>
  <p class="leading-[30px]  p768:mt-[15px]">{{ $t("To rent a car Dubai, it's enough to have a valid driving license and enough funds. & you'll need to show your foreign passport and prove that you have come of age and have driving experience.The age limit and the requirements for the license depend on where you're from. Visitors from Europe, the UK, the US and the Middle East can drive with their national licenses. People from other parts of the world need an international license. The age limit for the driver might vary from 21 to 25 years. Please get in touch with us before placing an order to discuss your individual situation.Cars in the UAE have steering wheels on the left side. Drivers stick to the right side of the road.If needed, you can add a second driver to your rental contract. The requirements for this person will be the same as for the first driver. If you let someone who isn't mentioned in your rental contract take a place behind the wheel, you can get a fine.The duration of a premium car rental in Dubai can vary from one day to several weeks. Discounts are common for luxury car rental Dubai monthly car rental plan. Use this chance to have fun, increase your high social status and please your dearest and nearest!Please avoid smoking inside the rented vehicle.") }}</p>
</div>
<img class="ferra absolute object-contain h-full top-0 right-0 hidden p480:block opacity-35 p768:opacity-75" src="@/assets/images/leftBanner.png" alt="">
<img class="ferra absolute object-contain h-full top-0 left-0  hidden p480:block opacity-35 p768:opacity-75" src="@/assets/images/rightBanner.png" alt="">
</section>
<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~section-5 MOVIE~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->

<section class="Section-6 relative">
  <div class="container px-[15px] py-[30px]">
    <div class="blog-1movie   p768:flex">

    <div class="movie   mx-auto   p992:w-[57%]  p992:absolute p992:left-0  p992:min-h-[400px]">
n
<iframe class="w-full  h-[250px]  p768:h-[500px]"  src="https://www.youtube.com/embed/rsHmvxJ86PA" title="Terra-rentacar" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

<article class="max-w-[440px] ml-auto mr-auto w-full mt-[20px]  p768:mt-0 text-center p768:text-left p768:ml-auto p768:mr-0  text-white">
 <h3 class=" text-[28px]  p768:text-[38px] leading-[40px] tracking-[1px] relative z-[2]">{{ $t('SPORTS CAR RENTAL DUBAI') }}</h3>
 <p class="text-[20px] mt-[10px] leading-[30px] tracking-[1.2px] relative z-[2] ">{{ $t('Terra L L C a Car is a Top Luxury Car Rental Dubai based company, We offer sports car rental, and supercar rental in Dubai. The best luxury car rental process provided by our fleet . We own a diverse range of luxury supercar rental and sports car rental Dubai style , including Rolls Royce, Lamborghini, Maserati, Ferrari, Mercedes Benz, Porsche, and Range Rover, to name a few. Rent a car with the best car rental company in Dubai.') }}</p>
 <div class="mx-auto w-full flex justify-center p768:justify-start">
  <RouterLink to="/avto" @click="CounterStore.fletchallcard()" class="btnRuB  relative z-[2] flex items-center text-[12px] gap-2 p992:text-[18px] mt-[30px]">
  <p>{{$t('ALL CARS')}}</p>
  <svg class="imgbtn ml-[0px] " width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path class="path" d="M13 10L21 16.5L13 23L17.5714 16.5L13 10Z"  ></path>
        <circle class="circle" cx="16" cy="16" r="15.5" ></circle></svg>
</RouterLink>
 </div>
 <img class="dubaikhalife hidden p768:flex absolute opacity-50 w-[400px] top-0 right-[5%] z-[1]" src="@/assets/images/halifa.png " alt="">



</article>
    </div>

  </div>

  <div class="blog-2photos flex flex-col p992:mt-[110px] p768:flex-row">
      <div class="blog-2photos-lambo w-[100%] p768:w-[50%] h-[269px]">

      </div>
      
      <article class="  p768:w-[50%]  text-white bg-[#343744] p-[30px]">
      <p class="text-[24px] p480:text-[32px] p992:text-[40px] max-w-[500px] font-bold">{{$t('SUPERCAR RENTAL DUBAI')}}</p>
      <p class="text-[18px]">{{$t('Hire the latest supercar')}}</p>
      <RouterLink to="/avto" @click="CounterStore.fletchallcard()" class="btnRuB flex items-center text-[12px] gap-2 p992:text-[18px] mt-[30px]">
  <p>{{$t('SEE ALL2')}}</p>
  <svg class="imgbtn ml-[0px] " width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path class="path" d="M13 10L21 16.5L13 23L17.5714 16.5L13 10Z"  ></path>
        <circle class="circle" cx="16" cy="16" r="15.5" ></circle></svg>
</RouterLink>
      </article>
    </div>


</section>

<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~section-6 FAQ~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->
<section class="Section-7">
  <Faq id="faq"/>
</section>



<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~section-7 INSTA PHOTOS~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->

<section class="Section-8 bg-[#1E1F27] py-[10px] p768:py-[35px] px-[30px]">
  <div class="container">
    <h3 data-aos="fade-left"
          data-aos-offset="100"  class="p320:text-2xl p768:text-3xl font-semibold text-white">{{ $t('FOLLOW US ON INSTAGRAM') }}</h3>
    <swiper
  :slidesPerView="2"
  :breakpoints="breakpoints2"
    :pagination="{
      type: 'fraction',
    }"
   :spaceBetween="10"
    :modules="modules"
    class="mySwiperImages p320:px-[25px] p992:px-[0px]"
    data-aos="fade-up"
    data-aos-offset="100"
  >
    <swiper-slide class="swiper-slideImages hover:" v-for="item in photos" :key="item" @click="screenModal = true,changeImages(item.images)" >
    <img class="imgstatic cursor-pointer object-center w-[100%] p480:w-[100%] h-[100%]" :src="item.images" alt=""></swiper-slide>
     </swiper>


 <div class="location-con flex flex-col text-center gap-2 p480:justify-center p768:justify-start p480:gap-10 p480:flex-row p480:text-left">
   <div class="blog-1">
    <h3 class="p320:text-[26px] p768:text-[36px] text-white font-semibold">{{ $t('LOCATION') }}</h3>
    <div class="links-location flex flex-col gap-3 mt-[15px]">
      <RouterLink 
      class="block text-[16px] leading-[120%] mt-[5px]  text-[#fff9]"
      v-for="(cars, location) in carslocation" :key="location" 
      to="/avto" @click="CounterStore.viewmodels(cars)"
      >{{location}}</RouterLink>
     </div>
   </div>

   <div class="blog-1">
    <h3 class="p320:text-[26px] p768:text-[36px] text-white font-semibold">{{$t('CITY')}}</h3>
     <div class="links-location flex flex-col gap-3 mt-[15px]">
      <RouterLink 
      class="block text-[16px] leading-[120%] mt-[5px]  text-[#fff9]" 
      v-for="(cars, city) in carscity" :key="city"
      to="/avto" @click="CounterStore.viewmodels(cars)"
      >{{city}}</RouterLink>
     </div>
   </div>


 </div>




  </div>

<div @click="screenModal = false"
class="screen-photos w-full h-[100dvh] transition duration-1000 ease-in-out bg-gray-900 bg-opacity-50 p-6 fixed top-0 left-0 justify-center items-center"
 :class="{'flex z-[99] opacity-1':screenModal, 'opacity-0 -z-[99] ': !screenModal,}"
>
  <button class="absolute text-white top-3 right-6 text-[32px] font-mono">X</button>
  <img class="rounded-[12px] max-w-[600px] w-full  max-h-[300px] p480:max-h-[600px] h-full" :src="photoOne" alt="">
</div>
</section>

  </div>
  




</template>



<style scoped>

.Section-2{
  background: linear-gradient(0deg, #24242400 .10%, #343744 73.51%, #343744);
}
.Section-3{
  background: linear-gradient(0deg, #343744 .26%, #160000 73.51%, #24242400);
}
.mySwiperAVTO{
  width: 50% !important;
  background: #000;
}
.ferra{
  animation: 5s ferraanimation alternate-reverse infinite;
}


@keyframes ferraanimation {
    0% {
      filter:drop-shadow(1px 1px 155px #ff0000);
    }
    50%{
      filter:drop-shadow(1px 1px 155px #00eeff);
    }
    100%{
      filter:drop-shadow(1px 1px 155px #3700ff);
    }
}


.imgbtn{
  transition: all 0.3s ease;

}
.path{
  transition: all 0.1s ease;
  fill:white;
}
.btnRuB{
  transition: all 0.2s ease;
  fill: white;
  stroke: white;
}
.btnRuB:hover .imgbtn{
  margin-left: 15px;
}
.btnRuB:hover{
  color:#EA0029;
  fill: #EA0029;
  stroke: #EA0029;
}
.btnRuB:hover .path{
  fill: #EA0029;
}

.swiper {
  width: 100%;
  height: 450px;
  margin-left: auto;
  margin-right: auto;
  padding:15px;
}
.mySwiperImages{
  width: 100%;
  height: 270px;
  margin-left: auto;
  margin-right: auto;
  padding-bottom: 50px;
  margin-top: 25px;
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
.blog-2photos-lambo{
  background-image: url(@/assets/images/lambocurrent.webp);
  background-position: 50%;
  background-repeat: no-repeat;
  background-size: cover;
  filter: sepia(100%) saturate(15) grayscale(10%);
}

</style>