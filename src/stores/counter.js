import { ref, computed } from 'vue';
import { defineStore } from 'pinia';

export const useCounterStore = defineStore('counter',{
  state:()=>({
    music:false,
    linkdeep:[],
    allcars:[],
    search: '',
    brandcar:[],
    locationcar:[],
    animated:false,
    searchactive:false
  }),

  actions:{
    viewmodels(item){
      this.linkdeep = item;
    },
    inputsearch(text){
      this.search = text;
    },
    filtercars(item){
      this.linkdeep = item
    },
    async  fletchallcard(){
      const res = await fetch(
        "https://realauto.limsa.uz/api/cars"
      );
      const data = await res.json();
      this.allcars = data?.data;
      this.linkdeep =  this.allcars  
    },
    
    async  fletchallcardAvto(){
      const res = await fetch(
        "https://realauto.limsa.uz/api/cars"
      );
      const data = await res.json();
      this.allcars = data?.data;
    },
    async fetchCarsByBrand(brandId) {
      try {
        const res = await fetch(`https://realauto.limsa.uz/api/cars?brand_id=${brandId}`);
        const data = await res.json();
        this.brandcar= data?.data || [];
        this.linkdeep = this.brandcar
   
      } catch (error) {
   
      }
    },
    loading(){
      this.animated = true;
      setTimeout(() => {
        this.animated = false;
      }, 1000);
    },
    scrollTop(){
      window.scrollTo({
        behavior:'smooth',
        top:0,
      })
    }
  },
  persist: true,
});