<script setup>
const props =defineProps({
    car:{
        type:Object,
        required:true
    },
})
</script>

<template>
    <div :class="`card  w-[290px] p768:h-[500px] py-[30px] px-[15px] flex flex-col justify-between rounded-2xl`">
   <img class="mt-[25px] w-[265px]" :src="'https://realauto.limsa.uz/api/uploads/images/' + car?.car_images[0]?.image.src" alt="">
   <div class="card__article flex flex-col gap-2">
     <h3 class="text-white text-[19px] font-mono ml-[5px]">{{ car?.brand?.title }} {{ car?.model?.name }}</h3>
      <div class="liniya bg-white w-full h-[1px]"></div>
      <h5 class="text-white font-semibold text-[18px]">AED {{car?.price_in_aed}} <span class=" text-[#9e9a9a] text-[16px]">/ $ {{ car?.price_in_usd }}</span> </h5>
      <p class="mt-[15px] text-[#9e9a9a] ">per day</p>
      <div class="btn-browsers text-white flex gap-2 justify-between">
        <a href="https://wa.me/971558462124" class="flex items-center gap-2 bg-[#00c600] py-[10px] px-[7px] rounded-[10px]">
          <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M19.05 4.91A9.816 9.816 0 0012.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01zm-7.01 15.24c-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.264 8.264 0 01-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24 2.2 0 4.27.86 5.82 2.42a8.183 8.183 0 012.41 5.83c.02 4.54-3.68 8.23-8.22 8.23zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.12-.17.25-.64.81-.78.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43s.17-.25.25-.41c.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.22.25-.86.85-.86 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.14-1.18s-.22-.16-.47-.28z"></path></svg>
         <p class="text-[18px]">Whatsapp</p>
        </a>
      <a href="https://t.me/+971558462124" class="flex items-center gap-2 bg-[#2727e0] py-[10px] px-[7px] rounded-[10px]">
        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12.001 22C6.47813 22 2.00098 17.5228 2.00098 12C2.00098 6.47715 6.47813 2 12.001 2C17.5238 2 22.001 6.47715 22.001 12C22.001 17.5228 17.5238 22 12.001 22ZM8.89113 13.1708L8.90378 13.1628C9.48351 15.0767 9.77337 16.0337 9.77337 16.0337C9.88564 16.3442 10.04 16.3996 10.2273 16.3743C10.4145 16.3489 10.5139 16.2476 10.6361 16.1297C10.6361 16.1297 11.0324 15.7472 11.825 14.9823L14.3759 16.8698C14.8407 17.1266 15.1763 16.9941 15.2917 16.4377L16.9495 8.61641C17.1325 7.88842 16.8115 7.59644 16.247 7.82754L6.51397 11.5871C5.84996 11.854 5.85317 12.2255 6.39308 12.3911L8.89113 13.1708Z"></path></svg>
         <p class="text-[18px]">Telegram</p>
      </a>
      </div>
   </div>
 </div>
 </template>

<style scoped>
.card{
  background: linear-gradient(338deg, rgba(41, 41, 41, .266) 31%, hsla(200, 1%, 59%, .152));
}
.card:hover{
  cursor: pointer;
  background: linear-gradient(161.55deg, hsla(0, 0%, 100%, .294) -9.06%, #11121997 39.4%, #111219);
}
</style>