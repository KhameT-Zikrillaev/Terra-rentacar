<script setup>
const props =defineProps({
    car:{
        type:Object,
        required:true
    },
    bg:{
       type:String,
       required:true
    },
})
</script>

<template>
    <div :class="`card min-h-[450px] p768:w-[300px] py-[30px] px-[15px] flex flex-col justify-between rounded-2xl`"
    :style="bg"
    >
   <img class="mt-[25px] w-[265px]" :src="'https://realauto.limsa.uz/api/uploads/images/' + car?.car_images[0].image.src" alt="">
   <div class="card__article flex flex-col gap-2">
     <h3 class="text-white text-[19px] font-mono ml-[5px]">{{ car?.brand?.title }}  {{ car?.model.name }}</h3>
      <div class="liniya bg-white w-full h-[1px]"></div>
      <h5 class="text-white font-semibold text-[18px]">AED {{car?.price_in_aed}} <span class=" text-[#9e9a9a] text-[16px]">/ $ {{ car?.price_in_usd }}</span> </h5>
      <p class="mt-[15px] text-[#9e9a9a] ">per day</p>
   </div>
 </div>
 </template>

<style scoped>

.card:hover{
  cursor: pointer;
  background: linear-gradient(161.55deg, hsla(0, 0%, 100%, .294) -9.06%, #11121997 39.4%, #111219);
  border:1px solid #7C7C7C;
}
</style>