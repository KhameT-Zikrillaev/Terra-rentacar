<script setup>
import { ref } from "vue"
import { useCounterStore } from "@/stores/counter";
const CounterStore = useCounterStore() 
CounterStore.searchactive = false
CounterStore.scrollTop() 
const faq1 = ref(false)
const faq2 = ref(false)
const faq3 = ref(false)
const faq4 = ref(false)
const faq5 = ref(false)
function faqt1Click(){
  if(faq1.value == false){
    faq1.value = true
    faq2.value = false
    faq3.value = false
    faq4.value = false
    faq5.value = false
  } else if(faq1.value == true){
    faq1.value = false
  }
}
function faqt2Click(){
  if(faq2.value == false){
    faq2.value = true
    faq1.value = false
    faq3.value = false
    faq4.value = false
    faq5.value = false
  } else if(faq2.value == true){
    faq2.value = false
  }
}
function faqt3Click(){
  if(faq3.value == false){
    faq3.value = true
    faq1.value = false
    faq2.value = false
    faq4.value = false
    faq5.value = false
  } else if(faq3.value == true){
    faq3.value = false
  }
}
function faqt4Click(){
  if(faq4.value == false){
    faq4.value = true
    faq1.value = false
    faq2.value = false
    faq3.value = false
    faq5.value = false
  } else if(faq4.value == true){
    faq4.value = false
  }
}
function faqt5Click(){
  if(faq5.value == false){
    faq5.value = true
    faq1.value = false
    faq2.value = false
    faq3.value = false
    faq4.value = false
  } else if(faq5.value == true){
    faq5.value = false
  }
}

</script>


<template>
<section class="Section-6 bg-[#1E1F27]">
  <div class="container desc py-[60px]">

    <h3 class="text-[32px] text-white font-semibold text-center">{{ $t('FAQ') }}</h3>
<!-- ~~~~~~~~~~~~~~~~~~faq-1~~~~~~~~~~~~~~~~ -->
  <div class="blog__text-con mx-auto flex flex-col items-center max-w-[900px] w-full">
    <div  class="card-1 w-full flex flex-col p-4 justify-center relative">

   <div @click="faqt1Click()" class="blog__text-con-open mx-auto flex cursor-pointer ">   
    <div class="leftstrelka">
      <svg width="22px" class="anim"  :class="{'bottomanimation' : faq1,'leftanimation' : !faq1}"  viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><g id="Layer_67" data-name="Layer 67"><path d="m35.21 62a2 2 0 0 1 -1.54-.72l-23.21-28a2 2 0 0 1 0-2.55l23.21-28a2 2 0 1 1 3.08 2.55l-22.15 26.72 22.15 26.72a2 2 0 0 1 -1.54 3.28z"/><path d="m52 62a2 2 0 0 1 -1.54-.72l-23.21-28a2 2 0 0 1 0-2.55l23.21-28a2 2 0 1 1 3.08 2.55l-22.16 26.72 22.16 26.72a2 2 0 0 1 -1.54 3.28z"/></g></svg>
     </div>
     <p class="text-[20px] text-center p480:text-[24px] p480:text-left mx-[5px] -mt-[8px] text-white  adaptiv ">{{$t('What is the minimum age requirements to rent a car in Dubai ?')}}</p>
     <div class="rightstrelka">
      <svg width="22px" class="anim" :class="{'bottomanimation' : faq1,'rightanimation' : !faq1}"  viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><g id="Layer_67" data-name="Layer 67"><path d="m35.21 62a2 2 0 0 1 -1.54-.72l-23.21-28a2 2 0 0 1 0-2.55l23.21-28a2 2 0 1 1 3.08 2.55l-22.15 26.72 22.15 26.72a2 2 0 0 1 -1.54 3.28z"/><path d="m52 62a2 2 0 0 1 -1.54-.72l-23.21-28a2 2 0 0 1 0-2.55l23.21-28a2 2 0 1 1 3.08 2.55l-22.16 26.72 22.16 26.72a2 2 0 0 1 -1.54 3.28z"/></g></svg>
     </div>
   </div>

   <div class="blog__text-con-view absolute  p-4 rounded-md"
    :class="{'td2' : faq1,'td1' : !faq1}"
   
   > 
      <p class="text-[18px] text-white ">{{ $t('Drivers under 25 must have a license for a minimum of three years. The same applies for the person(s) whose name(s) is/are mentioned as additional driver.') }}</p>

    </div>
   <div class="linearb mx-auto  h-[1px] mt-[15px]" :class="{'w-[0px]': faq1 , 'w-full': !faq1}"></div>
    </div>

  
  </div>

<!-- ~~~~~~~~~~~~~~~~~~faq-2~~~~~~~~~~~~~~~~ -->
  <div class="blog__text-con mx-auto flex flex-col items-center max-w-[900px] w-full">
    <div  class="card-1 w-full flex flex-col p-4 justify-center relative">
   <div @click="faqt2Click()" class="blog__text-con-open mx-auto flex cursor-pointer ">   
    <div class="leftstrelka">
      <svg width="22px" class="anim"  :class="{'bottomanimation' : faq2,'leftanimation' : !faq2}"  viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><g id="Layer_67" data-name="Layer 67"><path d="m35.21 62a2 2 0 0 1 -1.54-.72l-23.21-28a2 2 0 0 1 0-2.55l23.21-28a2 2 0 1 1 3.08 2.55l-22.15 26.72 22.15 26.72a2 2 0 0 1 -1.54 3.28z"/><path d="m52 62a2 2 0 0 1 -1.54-.72l-23.21-28a2 2 0 0 1 0-2.55l23.21-28a2 2 0 1 1 3.08 2.55l-22.16 26.72 22.16 26.72a2 2 0 0 1 -1.54 3.28z"/></g></svg>
     </div>
     <p class="text-[20px] text-center p480:text-[24px] p480:text-left mx-[5px] -mt-[8px] text-white">{{$t('What do you need for a luxury car rental in Dubai ?')}}</p>
     <div class="rightstrelka">
      <svg width="22px" class="anim" :class="{'bottomanimation' : faq2,'rightanimation' : !faq2}"  viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><g id="Layer_67" data-name="Layer 67"><path d="m35.21 62a2 2 0 0 1 -1.54-.72l-23.21-28a2 2 0 0 1 0-2.55l23.21-28a2 2 0 1 1 3.08 2.55l-22.15 26.72 22.15 26.72a2 2 0 0 1 -1.54 3.28z"/><path d="m52 62a2 2 0 0 1 -1.54-.72l-23.21-28a2 2 0 0 1 0-2.55l23.21-28a2 2 0 1 1 3.08 2.55l-22.16 26.72 22.16 26.72a2 2 0 0 1 -1.54 3.28z"/></g></svg>
     </div>
   </div>

   <div class="blog__text-con-view absolute  p-4 rounded-md"
    :class="{'td2' : faq2,'td1' : !faq2}"
   
   > 
      <p class="text-[18px] text-white ">{{ $t("Drivers shall be required to have a valid driver's license and Passport copy.") }}</p>
     </div>
     <div class="linearb mx-auto  h-[1px] mt-[15px]"
   :class="{'w-[0px]': faq2 , 'w-full': !faq2}"></div>
  

     
    </div>
  </div>

<!-- ~~~~~~~~~~~~~~~~~~faq-3~~~~~~~~~~~~~~~~ -->
<div class="blog__text-con mx-auto flex flex-col items-center max-w-[900px] w-full">
    <div  class="card-1 w-full flex flex-col p-4 justify-center relative">
   <div @click="faqt3Click()" class="blog__text-con-open mx-auto flex cursor-pointer ">   
    <div class="leftstrelka">
      <svg width="22px" class="anim"  :class="{'bottomanimation' : faq3,'leftanimation' : !faq3}"  viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><g id="Layer_67" data-name="Layer 67"><path d="m35.21 62a2 2 0 0 1 -1.54-.72l-23.21-28a2 2 0 0 1 0-2.55l23.21-28a2 2 0 1 1 3.08 2.55l-22.15 26.72 22.15 26.72a2 2 0 0 1 -1.54 3.28z"/><path d="m52 62a2 2 0 0 1 -1.54-.72l-23.21-28a2 2 0 0 1 0-2.55l23.21-28a2 2 0 1 1 3.08 2.55l-22.16 26.72 22.16 26.72a2 2 0 0 1 -1.54 3.28z"/></g></svg>
     </div>
     <p class="text-[20px] text-center p480:text-[22px] p480:text-left mx-[5px] -mt-[8px] text-white">{{$t('How much is the Insurance limit on luxury car rental Dubai?')}}</p>
     <div class="rightstrelka">
      <svg width="22px" class="anim" :class="{'bottomanimation' : faq3,'rightanimation' : !faq3}"  viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><g id="Layer_67" data-name="Layer 67"><path d="m35.21 62a2 2 0 0 1 -1.54-.72l-23.21-28a2 2 0 0 1 0-2.55l23.21-28a2 2 0 1 1 3.08 2.55l-22.15 26.72 22.15 26.72a2 2 0 0 1 -1.54 3.28z"/><path d="m52 62a2 2 0 0 1 -1.54-.72l-23.21-28a2 2 0 0 1 0-2.55l23.21-28a2 2 0 1 1 3.08 2.55l-22.16 26.72 22.16 26.72a2 2 0 0 1 -1.54 3.28z"/></g></svg>
     </div>
   </div>

   <div class="blog__text-con-view absolute  p-4 rounded-md"
    :class="{'td2' : faq3,'td1' : !faq3}"
   
   > 
      <p class="text-[18px] text-white ">{{ $t('Includes an overall Motor Vehicle Insurance. 3000-5000 AED for Excess Luxury Cars. 7000-10000 AED for Sports Cars.') }}</p>
     </div>
     <div class="linearb mx-auto  h-[1px] mt-[15px]"
   :class="{'w-[0px]': faq3 , 'w-full': !faq3}"></div>
  

     
    </div>
  </div>


<!-- ~~~~~~~~~~~~~~~~~~faq-4~~~~~~~~~~~~~~~~ -->
<div class="blog__text-con mx-auto flex flex-col items-center max-w-[900px] w-full">
    <div  class="card-1 w-full flex flex-col p-4 justify-center relative">
   <div @click="faqt4Click()" class="blog__text-con-open mx-auto flex cursor-pointer ">   
    <div class="leftstrelka">
      <svg width="22px" class="anim"  :class="{'bottomanimation' : faq4,'leftanimation' : !faq4}"  viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><g id="Layer_67" data-name="Layer 67"><path d="m35.21 62a2 2 0 0 1 -1.54-.72l-23.21-28a2 2 0 0 1 0-2.55l23.21-28a2 2 0 1 1 3.08 2.55l-22.15 26.72 22.15 26.72a2 2 0 0 1 -1.54 3.28z"/><path d="m52 62a2 2 0 0 1 -1.54-.72l-23.21-28a2 2 0 0 1 0-2.55l23.21-28a2 2 0 1 1 3.08 2.55l-22.16 26.72 22.16 26.72a2 2 0 0 1 -1.54 3.28z"/></g></svg>
     </div>
     <p class="text-[20px] text-center p480:text-[24px] p480:text-left mx-[5px] -mt-[8px] text-white">{{ $t('What are the driving licenses that can be used in Arab countries ?') }}</p>
     <div class="rightstrelka">
      <svg width="22px" class="anim" :class="{'bottomanimation' : faq4,'rightanimation' : !faq4}"  viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><g id="Layer_67" data-name="Layer 67"><path d="m35.21 62a2 2 0 0 1 -1.54-.72l-23.21-28a2 2 0 0 1 0-2.55l23.21-28a2 2 0 1 1 3.08 2.55l-22.15 26.72 22.15 26.72a2 2 0 0 1 -1.54 3.28z"/><path d="m52 62a2 2 0 0 1 -1.54-.72l-23.21-28a2 2 0 0 1 0-2.55l23.21-28a2 2 0 1 1 3.08 2.55l-22.16 26.72 22.16 26.72a2 2 0 0 1 -1.54 3.28z"/></g></svg>
     </div>
   </div>

   <div class="blog__text-con-view absolute  p-4 rounded-md"
    :class="{'td2' : faq4,'td1' : !faq4}"
   
   > 
      <p class="text-[18px] text-white ">{{ $t('Local driving license for UAE citizens. International driving licenses issued by the following countries: 1. Kingdom of Saudi Arabia, 2. Egypt, 3. Bahrain, 4. Jordan, 5. Kuwait, 6. Tunisia, 7. Sultanate of Oman, 8. Algeria, 9. Qatar, 10. Morocco, 11. Sudan, 12. Somalia, 13. Palestine, 14. Lebanon, 15. Libya, 16. Syria, 17 Yemen, 18. Iraq, 19. Djibouti, 20. Comoros, 21. Mauritania.') }}</p>
     </div>
     <div class="linearb mx-auto  h-[1px] mt-[15px]"
   :class="{'w-[0px]': faq4 , 'w-full': !faq4}"></div>
  

     
    </div>
  </div>

<!-- ~~~~~~~~~~~~~~~~~~faq-5~~~~~~~~~~~~~~~~ -->
<div class="blog__text-con mx-auto flex flex-col items-center max-w-[900px] w-full">
    <div class="card-1 w-full flex flex-col p-4 justify-center relative">
   <div @click="faqt5Click()" class="blog__text-con-open mx-auto flex cursor-pointer ">   
    <div class="leftstrelka">
      <svg width="22px" class="anim"  :class="{'bottomanimation' : faq5,'leftanimation' : !faq5}"  viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><g id="Layer_67" data-name="Layer 67"><path d="m35.21 62a2 2 0 0 1 -1.54-.72l-23.21-28a2 2 0 0 1 0-2.55l23.21-28a2 2 0 1 1 3.08 2.55l-22.15 26.72 22.15 26.72a2 2 0 0 1 -1.54 3.28z"/><path d="m52 62a2 2 0 0 1 -1.54-.72l-23.21-28a2 2 0 0 1 0-2.55l23.21-28a2 2 0 1 1 3.08 2.55l-22.16 26.72 22.16 26.72a2 2 0 0 1 -1.54 3.28z"/></g></svg>
     </div>
     <p class="text-[20px] text-center p480:text-[22px] p480:text-left mx-[5px] -mt-[8px] text-white">{{ $t('Can anyone else drive the car i rent?') }}</p>
     <div class="rightstrelka">
      <svg width="22px" class="anim" :class="{'bottomanimation' : faq5,'rightanimation' : !faq5}"  viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><g id="Layer_67" data-name="Layer 67"><path d="m35.21 62a2 2 0 0 1 -1.54-.72l-23.21-28a2 2 0 0 1 0-2.55l23.21-28a2 2 0 1 1 3.08 2.55l-22.15 26.72 22.15 26.72a2 2 0 0 1 -1.54 3.28z"/><path d="m52 62a2 2 0 0 1 -1.54-.72l-23.21-28a2 2 0 0 1 0-2.55l23.21-28a2 2 0 1 1 3.08 2.55l-22.16 26.72 22.16 26.72a2 2 0 0 1 -1.54 3.28z"/></g></svg>
     </div>
   </div>

   <div class="blog__text-con-view absolute  p-4 rounded-md"
    :class="{'td2' : faq5,'td1' : !faq5}"
   
   > 
      <p class="text-[18px] text-white ">{{ $t("The contract prescribes two drivers, but at the time of filling out the contract, you must provide a driver's license and passport.") }}</p>
     </div>
     <div class="linearb mx-auto  h-[1px] mt-[15px]"
   :class="{'w-[0px]': faq5 , 'w-full': !faq5}"></div>
  

     
    </div>
  </div>



  </div>



</section>


</template>



<style scoped>
.desc{
  position: relative;
}
.desc::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%; /* Растягиваем по всей ширине блока */
  height: 100%; /* Растягиваем по всей высоте блока */
  background-image: url(@/assets/images/FerrariOpenD.png);
  background-position: 50%;
  background-size: contain;
  background-repeat: no-repeat;
  opacity: 0.3; /* Задаем прозрачность 30% для фонового изображения */
   /* Помещаем псевдоэлемент под содержимое основного блока */
}
.linearb{
            transition: 1s;
            opacity: 50%;
            background: linear-gradient(90deg, #878788, #e73c7e, #23a6d5, #ffffff);
            background-size: 400% 400%;
            animation: gradient 10s ease infinite;
            transform: translate3d(0, 0, 0);
}
.blog__text-con-view{
  transition: 0.3s;
  background: linear-gradient(90deg, #272933, #272933,#272933, #002b38, #273233, #272933, #272933);
    background-size: 300% 100%;
    animation: gradient 7s ease infinite;
    transform: translate3d(0, 0, 0);
}
.td1{
  top:0%;
  z-index: -1;
  opacity: 0;

}
.td2{
  top:100%;
  z-index: 2;
  opacity: 1;
}
.leftstrelka{
 width:30px;
 height: 30px;
 transition: 1s;
 position: relative;
 display: flex;
 justify-content: center;
 align-content: center;
}

.leftanimation{
  animation: 1s leftcurved alternate-reverse infinite;
  position: absolute;
  transform: rotate(180deg)translateX(50%);
}

.bottomanimation{
  animation: 1s bottomanimationcurved alternate-reverse infinite;
  position: absolute;
  transform: rotate(-90deg)translateX(100%);
}
.bottomanimation{
  animation: 1s bottomanimationcurved alternate-reverse infinite;
  position: absolute;
  transform: rotate(-90deg)translateX(100%);
}

.rightstrelka{
 width:30px;
 height: 30px;
 position: relative;
 transition: 1s;
 display: flex;
 justify-content: center;
 align-content: center;
}
.rightanimation{
  animation: 1s rightcurved alternate-reverse infinite;
  position: absolute;
  transform: translateX(-50%)
}
@keyframes rightcurved {
    0% {
      margin-left: 100%;
      fill:rgb(201, 198, 198);
    }
    100%{
      margin-left: 50%;
      fill:#7C7C7C;
    }
}
@keyframes leftcurved {
    0% {
      margin-left: 50%;
      fill:rgb(201, 198, 198);
    }
    100%{
      margin-left: 100%;;
      fill:#7C7C7C;
    }
}

@keyframes bottomanimationcurved {
    0% {
      margin-top: 50%;
      fill:rgb(201, 198, 198);
    }
    100%{
      margin-top: 100%;
      fill:#7C7C7C; 
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