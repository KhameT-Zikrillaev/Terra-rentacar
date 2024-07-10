<script setup>
import card from "@/components/card/card.vue";
import { Swiper, SwiperSlide } from "swiper/vue";
// Import Swiper styles
import "swiper/css";
import { ref, onMounted, watch } from "vue";
import { useCounterStore } from "@/stores/counter";
const CounterStore = useCounterStore()  
const breakpoints2 = {
  "320": {
    spaceBetween: 70,
    slidesPerView: 1,
  },
  "480": {
    spaceBetween: 70,
    slidesPerView: 2,
  },
  "1024": {
    spaceBetween: 70,
    slidesPerView: 3,
  },
};

const product = ref([]);

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


// Fetch cards and group them on mount


// Watch for changes in product and regroup cars
watch(product, () => {
  groupCars();
});



const bordercard = "border:1px solid transparent"
</script>

<template>
  <div class="swiperPages">
    <div v-if="$i18n.locale === 'en'">
    <div class="container p-2" v-for="(cars, category) in groupedCars" :key="category">
      <div data-aos="fade-right"
          data-aos-offset="100"
       class="links text-white text-center p480:flex items-center my-[30px] w-full justify-between">
        <h3 class="text-[25px] p768:text-[35px] mt-[15px] uppercase " >{{ category }}</h3>
        <RouterLink
          to="/avto"  @click="CounterStore.viewmodels(cars)"
          class="btnRuB mx-auto mt-[15px] flex items-center justify-center p480:mt-[0px] p480:ml-auto p480:mr-[25px] text-[12px] ml-auto gap-2 p992:text-[18px]"
        >
          <p>{{ $t('SEE ALL') }}</p>
          <svg
            class="imgbtn ml-[0px]"
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path class="path" d="M13 10L21 16.5L13 23L17.5714 16.5L13 10Z"></path>
            <circle class="circle" cx="16" cy="16" r="15.5"></circle>
          </svg>
        </RouterLink>
      </div>
      <div>
        <swiper :breakpoints="breakpoints2" class="mySwiper">
          <swiper-slide v-for="(car, index) in cars" :key="index">
            <RouterLink :to="'/product/' + car?.id">
              <card :car="car" :bg="bordercard" />
            </RouterLink>
           
          </swiper-slide>
        </swiper>
      </div>
    </div>
    </div>

    <div v-else>
    <div class="container p-2" v-for="(cars, category) in groupedCarsRu" :key="category">
      <div class="links text-white text-center p480:flex items-center my-[30px] w-full justify-between">
        <h3 class="text-[25px] p768:text-[35px] mt-[15px] uppercase " >{{ category }}</h3>
        <RouterLink
          to="/avto"  @click="CounterStore.viewmodels(cars)"
          class="btnRuB mx-auto mt-[15px] flex items-center justify-center p480:mt-[0px] p480:ml-auto p480:mr-[25px] text-[12px] ml-auto gap-2 p992:text-[18px]"
        >
          <p>{{ $t('SEE ALL') }}</p>
          <svg
            class="imgbtn ml-[0px]"
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path class="path" d="M13 10L21 16.5L13 23L17.5714 16.5L13 10Z"></path>
            <circle class="circle" cx="16" cy="16" r="15.5"></circle>
          </svg>
        </RouterLink>
      </div>
      <div>
        <swiper :breakpoints="breakpoints2" class="mySwiper">
          <swiper-slide v-for="(car, index) in cars" :key="index">
            <RouterLink :to="'/product/' + car?.id">
              <card :car="car" :bg="bordercard" />
            </RouterLink>
           
          </swiper-slide>
        </swiper>
      </div>
    </div>
    </div>
  </div>
</template>

<style scoped>
.imgbtn {
  transition: all 0.3s ease;
}
.path {
  transition: all 0.1s ease;
  fill: white;
}
.btnRuB {
  transition: all 0.2s ease;
  fill: white;
  stroke: white;
}
.btnRuB:hover .imgbtn {
  margin-left: 15px;
}
.btnRuB:hover {
  color: #ea0029;
  fill: #ea0029;
  stroke: #ea0029;
}
.btnRuB:hover .path {
  fill: #ea0029;
}
.category-title {
  margin: 20px 0;
  font-size: 24px;
  text-align: center;
  color: white;
}
</style>
