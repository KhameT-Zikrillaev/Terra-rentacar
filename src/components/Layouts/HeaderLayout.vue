<script setup>
import { computed, ref } from "vue";
const productsbrand = ref([]);
import { useCounterStore } from "@/stores/counter";
import { useRouter } from "vue-router";

const CounterStore = useCounterStore() 
async function fletchcard() {
  const res = await fetch(
    "https://realauto.limsa.uz/api/brands"
  );
  const data = await res.json();
  productsbrand.value = data?.data;
}
fletchcard()
const router = useRouter()

const modalburgermenu = ref(false)
const views = ref(false)

function avtochange(){
  CounterStore.fletchallcard()
  router.push(`/avto`);
  
}
function avtoreset(){
  CounterStore.fletchallcard()
  CounterStore.search = ""
}

</script>

<template>
  <header class="header p-[10px]">
    <div class="container">
      <nav class="navbar mt-[15px]">
        <div class="navbar-navigation p320:flex items-center gap-2">
          <div class="navbar-navigation-left flex gap-2 w-[60px]">
            <button @click="$i18n.locale = 'en'">
              <img class="w-[25px]" src="@/assets/icon/flagen.png" alt="" />
            </button>
            <button @click="$i18n.locale = 'ru'">
              <img class="w-[25px]" src="@/assets/icon/flagrus.png" alt="" />
            </button>

<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~Search~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->

          </div>
          <div
            class="formsearch hidden p992:flex cursor-pointer p-2 mx-[10px] items-center max-w-[380px] w-full rounded-[12px] gap-2 bg-gradient-to-r from-[#2d2e31] to-[#111219]"
           
          >
            <img
              class="w-[24px] h-[24px]"
              src="@/assets/icon/search.png"
              alt=""
              @click="avtochange()"
            />
            <input
              @keyup.enter="avtochange()"
              class="w-full text-white text-lg p-1 border-none outline-none bg-transparent"
              type="text"
              :placeholder="$t('Search...')"     
              @input="CounterStore.inputsearch($event.target.value)"
            />
        </div>
      
          <form action="" class="formadaptiv  p992:hidden">  
            <div @click="CounterStore.searchactive = true" class="absolute left-[80px] mt-[-12px]">
              <img
              class="w-[24px] h-[24px]"
              src="@/assets/icon/search.png"
              alt=""
            />
            </div>

             <div class="search-adaptive  flex items-center absolute left-[10%]  gap-2 w-[80%] transform -translate-y-1/2 text-white text-lg p-2 rounded-xl bg-gradient-to-r from-[#242527] via-[#5B5B5E] to-[#38393D] "   
             :class="{ 'search-adaptive-active': CounterStore.searchactive }">
              
              <RouterLink to="/avto"  @click="CounterStore.searchactive = false,avtochange()" class="">
              <img
              class="w-[24px] h-[24px]"
              src="@/assets/icon/search.png"
              alt=""
            />
            </RouterLink>
  
              <input
              class="w-full outline-none bg-transparent text-[14px]"
              type="text"
              :placeholder="$t('Search...')"
              @input="CounterStore.inputsearch($event.target.value)"
            />

          <div @click="CounterStore.searchactive = false" class="w-[25px] h-[22px] cursor-pointer border border-solid border-b-white flex justify-center items-center text-[14px] rounded-[12px] font-sans">
            X
          </div>
             </div>
          
        
        </form>
        <RouterLink  to="/" @click="CounterStore.loading()" class="max-w-[110px] w-full mx-auto" >
          <img  
            src="@/assets/icon/logoTerra5.png"
            alt=""
          />
        </RouterLink>
       
<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~BURGER HIDDEN~~~~~~~~~~~~~~~~ -->
           <div class="p992:hidden">
            <button class="burger" @click="modalburgermenu = true">
             <span class="sp"></span>
            <span class="sp" ></span>
            <span class="sp" ></span>
            </button> 
            <!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~burger---menu~~~~~~~~~~~~~~~~~~~~ -->
            <div class="burger-menu flex flex-col fixed gap-10 justify-center h-[100dvh] top-0 px-[40px] py-[20px] max-w-[500px] w-full bg-[#0B0B0B] text-[22px] text-white"
            :class="{ 'burger-menu-activated': modalburgermenu }"
            
            >
              <button @click="modalburgermenu = false" class="absolute w-[40px] h-[40px] right-[10px] top-[10px]">
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" class="navbar_close_button" height="40px" width="40px" xmlns="http://www.w3.org/2000/svg"><path d="M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z"></path></svg>
              </button>
               <RouterLink to="/avto" @click="modalburgermenu = false,CounterStore.fletchallcard()">{{$t('CARS')}}</RouterLink>
               <RouterLink to="/brand" @click="modalburgermenu = false">{{$t('BRAND')}}</RouterLink>
               <RouterLink to="/uslug" @click="modalburgermenu = false">{{$t('SERVICES')}}</RouterLink>
               <RouterLink to="/about" @click="modalburgermenu = false">{{$t('ABOUT US')}}</RouterLink>
               <RouterLink to="/contact" @click="modalburgermenu = false">{{$t('CONTACTS')}}</RouterLink>
               <RouterLink to="/blog" @click="modalburgermenu = false">{{$t('BLOG')}}</RouterLink>
               <a href="tel:+998990000441">+998 (99) 000 04 41</a>
            </div>
           </div>
       

<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~NAVBAR~~~~~~~~~~~~~~~~~~~~~~~~~~     -->

          <div
            class="navbar-navigation-right hidden p992:flex flex-col max-w-[400px] h-[80px] ml-auto  p1200:max-w-[550px] w-full text-[14px]"
          >
            <ul class="flex gap-2 justify-between relative">
              <li class="navmenubtn">
                <RouterLink class="text-white" to="/avto" @click="avtoreset()">{{$t('CARS')}}</RouterLink>
                <div class="linearnav mx-auto  h-[1px] mt-[5px]"></div>
              </li>
              <li class="brendrout navmenubtn mb-[-10px]">  
              <RouterLink to="/brand" class=" text-white cursor-pointer ">{{$t('BRAND')}}</RouterLink> 
              <div class="linearnav mx-auto  h-[1px] mt-[5px]"></div>
              <div class="brandmenu view grid grid-cols-1 gap-5 rounded-[30px] pt-[30px] pr-[25px] pb-[20px] pl-[25px] flex-wrap absolute z-[5] bg-gradient-to-br from-[#272933] via-[#272933] to-gray-[#272933]   w-[145%] ml-[-45%] left-0  mt-[10px] text-white p992:grid-cols-2 p1200:grid-cols-3"
              :class="{'view' : views}"
              >

                    <RouterLink to="/avto" @click="CounterStore.fetchCarsByBrand(item.id),views = true,CounterStore.loading()" v-for="item in productsbrand" :key="item" class="branditem flex items-center gap-2">
                      <img class="w-[40px] h-[40px] object-contain" 
                      :src="
                     'https://realauto.limsa.uz/api/uploads/images/' +
                     item.image_src
                    " 
                      alt="">
                      <p class="text-[#A9A9AD] font-bold">{{ $t('Rent') }} <span class="text-white">{{item.title}}</span> {{ $t('Emirates') }}</p>
           
                    </RouterLink>
                 
                 
                   
              </div>
              </li>
             
              <li class="navmenubtn">
                <RouterLink class="text-white" to="/uslug">{{$t('SERVICES')}}</RouterLink>
                <div class="linearnav mx-auto  h-[1px] mt-[5px]"></div>
              </li>
              <li class="navmenubtn">
                <RouterLink class="text-white" to="/about">{{$t('ABOUT US')}}</RouterLink>
                <div class="linearnav mx-auto  h-[1px] mt-[5px]"></div>
              </li>
              <li class="navmenubtn">
                <RouterLink class="text-white" to="/contact">{{$t('CONTACTS')}}</RouterLink>
                <div class="linearnav mx-auto  h-[1px] mt-[5px]"></div>
              </li>
              <li class="navmenubtn">
                <RouterLink class="text-white" to="/blog">{{$t('BLOG')}}</RouterLink>
                <div class="linearnav mx-auto  h-[1px] mt-[5px]"></div>
              </li>
            </ul>
            
            <button class="text-white block mt-[20px] ml-auto">
              <a href="tel:+998990000441">+998 (99) 000 04 41</a>
            </button>
          </div>
        </div>
      </nav>
    </div>
  </header>
</template>



<style scoped>
.router-link-active{
  color:#cc0221;
}
.header{
  transition: 0.3s;
  background: linear-gradient(90deg, #111219, #111219,#111219, #25020b, #111219, #111219, #111219);
    background-size: 300% 100%;
    animation: gradient 7s ease infinite;

}

@keyframes gradient {
    0% {
        background-position: 0% 50%;
        box-shadow: 0px 0px 15px 5px #470000;
    }

    50% {
        background-position: 100% 50%;
        box-shadow: 0px 0px 15px 5px #003f3a;
    }

    100% {
        background-position: 0% 50%;
        box-shadow: 0px 0px 15px 5px #5d0000;
    }
}
.h1test{
  transition: 1s;
}
.search-adaptive{
                transition: 0.5s; 
                opacity: 0%;
                margin-top: 5px;
                z-index: -99;
}
.search-adaptive-active{
  z-index: 99;
  opacity: 100%;
  margin-top: 60px;
}
.brandmenu{
  z-index: -99;
  opacity: 0%;
}
.view{
  z-index: -99;
  opacity: 0%
}

.brendrout:hover .brandmenu {
 opacity: 100%;
 z-index: 5;
}
.branditem:hover{
  filter:drop-shadow(1px 3px 3px #eaeaea);
}
.burger {
  width: 40px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  transition: 0.5s;
}
.burger-menu{
  transition: 1s;
  right:-100%;
  z-index: 99;
}
.burger-menu-activated{
  right:0
}
.sp {
  background: white;
}
.sp.active {
  background: black;
}
.sp:nth-child(1) {
  display: block;
  width: 100%;
  height: 3px;

  position: absolute;
  top: 0;
  left: 0;
  border-radius: 8px;
  transition: 0.5s;
}
.sp:nth-child(2) {
  display: block;
  width: 80%;
  height: 3px;

  border-radius: 8px;
  transition: 0.5s;
}
.sp:nth-child(3) {
  display: block;
  width: 100%;
  height: 3px;
  position: absolute;
  bottom: 0;
  right: 0;
  border-radius: 8px;
  transition: 0.5s;
}
.linearnav{
            width: 0;
            transition: 1s;
            opacity: 50%;
            background: linear-gradient(90deg, #878788, #e73c7e, #23a6d5, #ffffff);
            background-size: 400% 400%;
            animation: gradientnav 10s ease infinite;
            transform: translate3d(0, 0, 0);
}
.navmenubtn:hover .linearnav{
  width: 100%;
}
@keyframes gradientnav {
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