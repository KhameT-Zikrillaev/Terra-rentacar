<script setup>
import { useCounterStore } from "@/stores/counter";
const CounterStore = useCounterStore() 
CounterStore.scrollTop() 
CounterStore.searchactive = false
</script>



<template>
  <div class="contactpages relative">
    <img class="imgCoverAbout hidden object-cover p992:flex w-full h-full absolute opacity-15 top-0" src="@/assets/images/contactcover.jpg" alt="">
    <div class="container relative py-14 px-4 text-white">
      <RouterLink to="/" class="text-[14px]  text-[#fff9]"><p class="text-center p480:text-left">{{$t('Luxury Cars for Rent in Dubai   /   Contacts')}}</p></RouterLink>
      <h3 class="text-[22px] text-center p480:text-left p480:text-[36px] py-[10px] p768:py-[40px] font-semibold">{{$t('HAVE ANY QUESTIONS?')}}</h3>
      <p class="text-[#fff9]  text-center p480:text-left mb-[10px] p768:mb-[90px]">{{ $t('We will be glad to help') }}</p>
      <h4 class="text-[26px] ml-[45px] font-bold">{{$t('Head office')}}</h4>
      <!-- ~~~~~~~~~~~~~~~~~~~~~liknks~~~~~~~~~~~~~~~~~~~~ -->
      <div class="contact__links flex flex-col gap-2 mt-6">
        <div class="flex items-center gap-7"> 
          <img src="@/assets/icon/location.svg" alt="">
          <p class="text-[18px] font-semibold">{{ $t('Elite 3 Sports City, Dubai 26W8 24J, United Arab Emirates') }}</p>
        </div>
        <a href="tel:+998990000441" class="flex items-center gap-7"> 
          <img src="@/assets/icon/phone.svg" alt="">
          <p class="text-[18px] font-semibold">+998 (99) 000 04 41</p>
        </a>
        <div class="flex items-center gap-7"> 
          <img src="@/assets/icon/mail.svg" alt="">
          <p class="text-[18px] font-semibold">terra-rentacar.mail.ru</p>
        </div>
      </div>


       <div class="linearC my-[30px]"></div>
       <div class="contact__maps w-full rounded-2xl">
        <iframe class="contact_maps-map w-full rounded-2xl" src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d7229.364749795036!2d55.215299!3d25.044851!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjXCsDAyJzQxLjUiTiA1NcKwMTInNTUuMSJF!5e0!3m2!1sen!2s!4v1703261946327!5m2!1sen!2s" width="900" height="500" title="map" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
       </div>

    </div>
  </div>

</template>



<style scoped>
.linearC{
            width: 100%;
            height: 3px;
            opacity: 30%;
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