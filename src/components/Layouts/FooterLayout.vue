<script setup>
import { onMounted, ref, watch } from "vue";
const product = ref([]);
import { useCounterStore } from "@/stores/counter";
const CounterStore = useCounterStore()  
async function fetchCards() {
  const res = await fetch("https://realauto.limsa.uz/api/cars");
  const data = await res.json();
  product.value = data?.data || [];
}

// Group cars by category
const groupedCars = ref({});

function groupCars() {
  groupedCars.value = product.value.reduce((acc, car) => {
    const category = car?.category?.name_en;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(car);
    return acc;
  }, {});
}
const groupedCarsRu = ref({});
function groupCarsRU() {
  groupedCarsRu.value = product.value.reduce((acc, car) => {
    const categoryRU = car?.category?.name_ru;
    if (!acc[categoryRU]) {
      acc[categoryRU] = [];
    }
    acc[categoryRU].push(car);
    return acc;
  }, {});
}


// Fetch cards and group them on mount
onMounted(async () => {
  await fetchCards();
  groupCars();
  groupCarsRU();
});

// Watch for changes in product and regroup cars
watch(product, () => {
  groupCars();
  groupCarsRU();
});
</script>

<template>
    <footer class="footer bg-[#111219]  p480:pt-[50px] pb-[100px] relative z-[1]">
        <div class="container relative z-[1]">
          <div class="footer__box grid grid-cols-1 gap-2  p768:grid-cols-3 p1024:grid-cols-4 p-4">

            <div class="col-span-1 footer__box-card-1">
                <img class="w-[110px] mx-auto p768:mx-0" src="@/assets/icon/logoTerra5.png" alt="">
                <h3 class="text-[30px] text-white max-w-[256px]  font-bold pt-[15px]  p480:pt-[30px] leading-[100%] mx-auto text-center   p768:mx-0 p768:text-left p1024:text-[32px]">{{ $t('LUXURY CAR RENTAL IN EMIRATES') }}</h3>
                <p class="text-[18px] p480:text-[14px] max-w-[256px] text-[#fff9] mt-[15px] p480:mt-[50px] text-center mx-auto p768:mx-0 p768:text-left">{{ $t('Rent sports and luxury cars directly without intermediaries. Rent a car in Dubai with Auto Zoom Car Rental - safety and driving pleasure') }}</p> 
            </div>
            
            <div class="col-span-2  footer__box-card-2 mt-[18px] flex flex-col gap-4 p480:gap-10 text-center p768:flex-row  mx-0 p768:text-left">
                <div class="blog-1 mx-auto p768:mx-0">
                    <RouterLink class="text-white transition duration-300 ease-in-out  hover:text-red-700"  to="/avto" @click="CounterStore.fletchallcard()">{{$t('CARS')}}</RouterLink>
                  <ul v-if="$i18n.locale === 'en'" class="text-[#fff9]  p480:w-[200px] text-[18px] p480:text-[14px] flex flex-col gap-2 p480:gap-5 mt-[15px]">
                   
                    <li  class="transition duration-300 ease-in-out hover:text-white" v-for="(cars, category) in groupedCars" :key="category" ><RouterLink to="/avto" @click="CounterStore.viewmodels(cars),CounterStore.loading(),CounterStore.scrollTop()">{{category}}</RouterLink></li>

                </ul>
                <ul v-else class="text-[#fff9]  p480:w-[200px] text-[18px] p480:text-[14px] flex flex-col gap-2 p480:gap-5 mt-[15px]">
 
                   <li class="transition duration-300 ease-in-out hover:text-white" v-for="(cars, category) in groupedCarsRu" :key="category" ><RouterLink to="/avto" @click="CounterStore.viewmodels(cars),CounterStore.loading(),CounterStore.scrollTop()">{{category}}</RouterLink></li>
              
               </ul>
                </div>

                <div  class="blog-2 flex flex-col text-white">
                    <RouterLink  class="transition duration-300 ease-in-out hover:text-red-700"  to="/blog">{{ $t('BLOG') }}</RouterLink>
                    <RouterLink class=" mt-[15px]  p480:mt-[50px] transition duration-300 ease-in-out hover:text-red-700" to="/uslug">{{ $t('SERVICES') }}</RouterLink>
                    <RouterLink class=" mt-[15px]  p480:mt-[50px] transition duration-300 ease-in-out hover:text-red-700" to="/contact">{{ $t('CONTACTS') }}</RouterLink>
                    <p class="text-[18px] p480:text-[14px] text-[#fff9] mt-[5px]">{{ $t('Elite 3 Sports City, Dubai 26W8 24J, United Arab') }}<br> {{ $t('Emirates') }} <br>
                      +998 99 0000441 <br>
                      {{ $t('Working hours: 24/7') }}</p>
                 
                </div>
              
                
            </div>

            <div class="col-span-1 footer__box-card-3 mt-[18px] mx-auto  text-center p480:flex p480:text-left p1024:flex-col">
                <div class="blog-1">
                    <RouterLink class="text-white transition duration-300 ease-in-out hover:text-red-700"  to="/about">{{ $t('ABOUT US') }}</RouterLink>
                  <ul class="text-[#fff9]  w-[200px] text-[18px] p480:text-[14px] flex flex-col gap-5 mt-[15px]">
                    <li class="transition duration-300 ease-in-out hover:text-white"><RouterLink to="/">{{$t('Our Team')}}</RouterLink></li>
                    <li class="transition duration-300 ease-in-out hover:text-white"><RouterLink to="/faq" @click="CounterStore.scrollTop()">{{ $t('FAQ') }}</RouterLink></li>
                  </ul>
                </div>
                <div class="blog-2">
                    <p class="text-white block p1024:mt-[100px]  " >{{$t('Follow Us')}}</p>
                  <div class="browsers flex gap-2 items-center mt-[25px] justify-center p1024:justify-start">
                    <a href="" class="browsers-btn"><svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 0.487793C2.243 0.487793 0 2.73079 0 5.48779V13.4878C0 16.2448 2.243 18.4878 5 18.4878H13C15.757 18.4878 18 16.2448 18 13.4878V5.48779C18 2.73079 15.757 0.487793 13 0.487793H5ZM5 2.48779H13C14.654 2.48779 16 3.83379 16 5.48779V13.4878C16 15.1418 14.654 16.4878 13 16.4878H5C3.346 16.4878 2 15.1418 2 13.4878V5.48779C2 3.83379 3.346 2.48779 5 2.48779ZM14 3.48779C13.7348 3.48779 13.4804 3.59315 13.2929 3.78069C13.1054 3.96822 13 4.22258 13 4.48779C13 4.75301 13.1054 5.00736 13.2929 5.1949C13.4804 5.38244 13.7348 5.48779 14 5.48779C14.2652 5.48779 14.5196 5.38244 14.7071 5.1949C14.8946 5.00736 15 4.75301 15 4.48779C15 4.22258 14.8946 3.96822 14.7071 3.78069C14.5196 3.59315 14.2652 3.48779 14 3.48779ZM9 4.48779C6.243 4.48779 4 6.73079 4 9.48779C4 12.2448 6.243 14.4878 9 14.4878C11.757 14.4878 14 12.2448 14 9.48779C14 6.73079 11.757 4.48779 9 4.48779ZM9 6.48779C10.654 6.48779 12 7.83379 12 9.48779C12 11.1418 10.654 12.4878 9 12.4878C7.346 12.4878 6 11.1418 6 9.48779C6 7.83379 7.346 6.48779 9 6.48779Z" fill="white" fill-opacity="0.6"></path></svg></a>
                    <a href="" class="browsers-btn"><svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M2.80519 2.98366C4.60132 1.24739 7.0374 0.271973 9.57752 0.271973C12.1176 0.271973 14.5537 1.24739 16.3499 2.98366C18.146 4.71992 19.155 7.0748 19.155 9.53024C19.155 11.9857 18.146 14.3406 16.3499 16.0768C14.8621 17.515 12.9353 18.4311 10.874 18.7033V11.9842H13.3526L13.7417 9.55024H10.8735V8.21997C10.8735 7.20887 11.2153 6.31228 12.1937 6.31228H13.7659V4.18824L13.7511 4.1863C13.469 4.14943 12.8861 4.07324 11.8015 4.07324C9.49639 4.07324 8.14495 5.25002 8.14495 7.93102V9.55024H5.77527V11.9842H8.14495V18.6844C6.13501 18.3905 4.26014 17.4833 2.80519 16.0768C1.00906 14.3406 0 11.9857 0 9.53024C0 7.0748 1.00906 4.71992 2.80519 2.98366Z" fill="white" fill-opacity="0.6"></path></svg></a>
                    <a href="" class="browsers-btn"><svg width="22" height="17" viewBox="0 0 22 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M19.0065 15.9746C20.1376 15.813 21.0532 14.9513 21.2687 13.8202C21.4841 12.5814 21.6996 10.7501 21.7534 8.48789C21.7534 6.22571 21.4841 4.39443 21.2687 3.15562C21.0532 2.02453 20.1376 1.16275 19.0065 1.00117C17.1752 0.73186 14.2667 0.408691 10.9273 0.408691C7.58789 0.408691 4.62552 0.73186 2.8481 1.00117C1.71701 1.16275 0.801365 2.02453 0.58592 3.15562C0.370475 4.39443 0.155029 6.22571 0.155029 8.48789C0.155029 10.7501 0.370475 12.5814 0.58592 13.8202C0.801365 14.9513 1.71701 15.813 2.8481 15.9746C4.67938 16.2439 7.64175 16.5671 10.9273 16.5671C14.2667 16.5671 17.2291 16.2439 19.0065 15.9746ZM15.2362 8.48804L8.77281 4.71774V12.2583L15.2362 8.48804Z" fill="white" fill-opacity="0.6"></path></svg></a>
                  </div>
                </div>
            </div>

          </div>



           <div class="footer__box-2 px-[10px]  p480:flex gap-2 ">

            <a href="tel:+998990000441" class="btn-cal block mt-[20px] text-center  text-white rounded-[15px] px-[30px] py-[25px] border border-solid border-white mx-auto p768:mx-0 hover:bg-[#A70720] hover:border-[#A70720]">{{ $t('GET BEST OFFER') }}</a>
            
            <div class="footer__box-info  px-[10px]   p480:w-[73%] p480:ml-auto p480:px-[0px]">
          
              <div class="linear p320:mt-[25px] p480:mt-[0px]"></div>

              <article class="text-center  p480:flex gap-2 justify-between p480:pr-[50px] mt-[30px] p480:text-left">
                <h4 class="mx-auto   p480:w-[200px] text-[#fff9] text-[14px]">{{ $t('© 2024 Terra Car Rental. United Arab Emirates.') }}</h4>
                <RouterLink to="/condition" @click="CounterStore.scrollTop()" class="p320:mt-[20px]   p480:mt-[0px]    text-[#fff9]  text-[14px]">{{ $t('Terms and Conditions') }}</RouterLink>
              </article>
            </div>
           </div>

        </div>
        <img class="hidden p480:flex  absolute w-full max-w-[800px]  bottom-0 right-0 opacity-45 " src="@/assets/images/McLaren.png" alt="">
    </footer>
</template>



<style scoped>
.btn-cal {
  transition: 0.5s;
}
.browsers-btn:hover{
  transform: scale(1.1);
}
.linear{
            width: 100%;
            height: 1px;
            opacity: 50%;
            margin-left:auto;
            background: linear-gradient(90deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
            background-size: 400% 400%;
            animation: gradient 10s ease infinite;
            transform: translate3d(0, 0, 0);
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