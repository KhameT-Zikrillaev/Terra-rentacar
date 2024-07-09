<script setup>
import { computed,ref } from "vue";
import card2 from "@/components/card/card2filter.vue";
import { useCounterStore } from '@/stores/counter';

const CounterStore = useCounterStore()
CounterStore.scrollTop()
CounterStore.loading()

const searchProduct = computed(() => {
  return CounterStore.linkdeep.filter((item) => {
    const modelMatches = item?.model?.name?.toLowerCase()?.includes(CounterStore.search.toLowerCase());
    const brandMatches = item?.brand?.title?.toLowerCase()?.includes(CounterStore.search.toLowerCase());
    
    return modelMatches || brandMatches;
  });
  
});

const btnfilter=ref(false)
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~inputes cheked~~~~~~~~~~~~~~~~~~~
const selectedCategory = ref([]);
const selectedBrands = ref([]);
const allcars = ref([]);
const filtercars = ref([]);
const selectedModel = ref("");
// Загрузка данных с сервера
async function fetchCars() {
  const response = await fetch(`https://realauto.limsa.uz/api/cars`);
  const data = await response.json();
  allcars.value = data?.data;
}
fetchCars();

// Получение уникальных категорий и брендов
const categories = computed(() => {
  const uniqueCategories = new Map();
  allcars.value.forEach(car => {
    uniqueCategories.set(car.category.id, car.category);
  });
  return Array.from(uniqueCategories.values());
});

const brands = computed(() => {
  const uniqueBrands = new Map();
  allcars.value.forEach(car => {
    uniqueBrands.set(car.brand.id, car.brand);
  });
  return Array.from(uniqueBrands.values());
});

// Фильтрация моделей по выбранному бренду
const filteredModels = computed(() => {
  if (selectedBrands.value.length === 0) {
    return allcars.value.map(car => car.model); // Отобразить все модели, если бренд не выбран
  } else {
    const models = new Set();
    allcars.value.forEach(car => {
      if (selectedBrands.value.includes(car.brand.id)) {
        models.add(car.model);
      }
    });
    return Array.from(models);
  }
});

// Фильтрация автомобилей по выбранным параметрам
const filteredCars = computed(() => {
  return filtercars.value.filter(car => {
    const matchesCategory = selectedCategory.value.length === 0 || selectedCategory.value.includes(car.category.id);
    const matchesBrand = selectedBrands.value.length === 0 || selectedBrands.value.includes(car.brand.id);
    const matchesModel = selectedModel.value === "" || selectedModel.value === car.model.id.toString();
    return matchesCategory && matchesBrand && matchesModel;
  });
});



// Обработчики изменений
const handleCategoryChange = (event) => {
  const { value, checked } = event.target;
  if (checked) {
    selectedCategory.value.push(value);
  } else {
    selectedCategory.value = selectedCategory.value.filter(option => option !== value);
  }
};

const handleBrandsChange = (event) => {
  const { value, checked } = event.target;
  if (checked) {
    selectedBrands.value.push(value);
  } else {
    selectedBrands.value = selectedBrands.value.filter(option => option !== value);
  }
  // При выборе бренда сбросить выбранную модель
  selectedModel.value = "";
};

// Применение фильтра и загрузка данных
const applyFilter = async () => {
  const queryParams = new URLSearchParams();
  selectedCategory.value.forEach(category => {
    queryParams.append('category_id', category);
  });
  selectedBrands.value.forEach(brand => {
    queryParams.append('brand_id', brand);
  });
  if (selectedModel.value !== "") {
    queryParams.set('model_id', selectedModel.value);
  }
  
  const response = await fetch(`https://realauto.limsa.uz/api/cars?${queryParams.toString()}`);
  const data = await response.json();
  filtercars.value = data.data; 
  CounterStore.filtercars(filtercars),
  btnfilter.value = false,
  CounterStore.scrollTop()
};

function resetinputes(){
  CounterStore.loading()
  selectedCategory.value = [];
  selectedBrands.value = [];
  selectedModel.value = "";
  document.getElementById("myForm").reset()  
  CounterStore.fletchallcard();
  btnfilter.value = false,
  CounterStore.scrollTop()
  CounterStore.search = ""
}


</script>


<template >
<div class="avtopages bg-[#1E1F27] py-6  relative p992:flex ">
   <button class="p992:hidden cursor-pointer" @click="btnfilter = true"><img  src="@/assets/icon/static.svg" alt=""></button>
    <!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~LEFT~~~~~~~~~~~~~~~~~~ -->
    <div class="avto__left absolute  h-full z-[3]  top-0 mt-[2px] p992:mt-[0px] w-full p992:w-[380px] p992:static p992:h-[100%] "
    :class="{'right-[0%]': btnfilter, 'right-[100%]' : !btnfilter}"
    >
    <button @click="btnfilter = false" class="absolute right-[15px] top-[15px] cursor-pointer p992:hidden"><svg class="filter__close" width="21" height="16" viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.5 7.54688H2M2 7.54688L9 0.546875M2 7.54688L9 14.5469" stroke="white" stroke-width="1.5"></path><path d="M20.5 7.54688H2M2 7.54688L9 0.546875M2 7.54688L9 14.5469" stroke="white" stroke-width="1.5"></path><path d="M20.5 7.54688H2M2 7.54688L9 0.546875M2 7.54688L9 14.5469" stroke="white" stroke-width="1.5"></path></svg></button>
      

    <div class="menu p-[25px] bg-[#272933]  h-100dvh p992:w-[380px]">
      <img class="w-[60%] opacity-85" src="@/assets/images/TerraAvto.png" alt="">
          <h4 class="text-white whitespace-normal break-words text-[28px] font-semibold my-[30px]">{{$t('Filter By')}}<br>
          <span class="offers font-normal">{{$t('Offers')}}</span></h4>
         
          <div class="linears w-full bg-slate-400 h-[1px]"></div>

<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~inputes- 1 Car~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->
<form action="" id="myForm">
          <div class="car__type flex flex-col gap-3 max-w-[300px] w-full">
            <h3 class="text-white  text-[20px] my-[20px]">{{$t('Car type')}}</h3>
            <div v-if="$i18n.locale === 'en'"  class="flex flex-col gap-1">
            <label   class="flex gap-3 text-white cursor-pointer uppercase"  v-for="(item, index) in categories" :key="item.id" :for="'category_' + index">
             <input class="cursor-pointer "  type="checkbox"   :id="'category_' + index" name="optionscategory" :value="item.id" @change="handleCategoryChange">
            {{item.name_en }}
            </label>
            </div>
            <div v-else>
            <label   class="flex gap-3 text-white cursor-pointer uppercase"  v-for="(item, index) in categories" :key="item.id" :for="'category_' + index">
             <input class="cursor-pointer "  type="checkbox"   :id="'category_' + index" name="optionscategory" :value="item.id" @change="handleCategoryChange">
            {{item.name_ru }}
            </label>
          </div>
          </div>
          
          <div class="linears w-full mt-[25px] bg-slate-400 h-[1px]"></div>

<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~inputes- 2 Brand~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->

          <div class="car__brand flex flex-col gap-3 max-w-[300px] w-full">
            <h3 class="text-white text-[20px] my-[20px]">{{$t('Brand')}}</h3>
            <label class="flex gap-3 text-white cursor-pointer"  v-for="(item, index) in brands" :key="item.id" :for="'brand_' + index">
             <input class="cursor-pointer" type="checkbox"    :id="'brand_' + index" name="optionsbrand" :value="item.id" @change="handleBrandsChange">
             {{ item.title }}
            </label>
          </div>
   
<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~inputes- 3 Model~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->

          <div class="car__model mt-[25px] flex flex-col gap-5">
         <h3 class="text-white">{{$t('Model')}}</h3>
         <select v-model="selectedModel" class="w-full p-3 outline-none rounded-lg" name="" id="" >
          <option value="">{{ $t('Select a model') }}</option>
          <option v-for="model in filteredModels" :key="model.id" :value="model.id">{{ model.name }}</option>
         </select>
        </div>
  </form>
<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~BUTTON RESET FILTER~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->

<div class="car__buttons w-full flex gap-2 flex-col-reverse p480:flex-row justify-between mt-[25px]">
  <button class=" text-white border outline-none py-3 px-6 text-[20px] rounded-lg font-extralight" @click="resetinputes()">{{$t('Reset')}}</button>
  <button class=" text-white  outline-none py-3 px-6 text-[20px] rounded-lg font-normal bg-[#009A00]" @click="CounterStore.loading(),applyFilter()">{{$t('Apply filter')}}</button>
</div>

        </div>
 
    </div>


       <!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~RIGHT~~~~~~~~~~~~~~~~~~ -->
    <div class="avto__right">
      <h3 class="text-[#A59F9D] ml-[25px] my-[50px]">{{ $t('Luxury Cars for Rent in Dubai / Hire the latest supercar') }}</h3>
      <div class="avto__right-con flex flex-wrap gap-3  p-2 w-full p992:pl-[25px]">

      <RouterLink  :to="'/product/'  + car.id" class="p768:w-[300px] mx-auto p1024:mx-[0px]" v-for="car in searchProduct" :key="car.id">
        <card2 :car="car" />
      </RouterLink>
     <h3 v-if="searchProduct.length == 0" class="text-white font-semibold ">{{$t("SORRY, WE DON'T HAVE SUCH A CAR MODEL FOR RENT YET")}}</h3>
    </div>
    </div>



</div>

  </template>
  
  <style>
  .avto__left{
    transition: 1s;
  }
  </style>
  