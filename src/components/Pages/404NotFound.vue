<script setup>

</script>


<template>
    <div class="container py-12 px-4 flex items-center gap-10 flex-col text-center p768:flex-row p768:text-left">
        <img class="opacity-85 p480:w-[50%]" src="@/assets/images/404.png" alt="">
        <article class="text-white">
            <h1 class="text-white text-3xl text-semibold">{{$t("Ouch! We can't find this page.")}}</h1>
            <RouterLink class="block mt-8 text-red-200" to="/">{{$t('Go back to the main page!')}}</RouterLink>
        </article>
    </div>
 
</template>



<style  scoped>

</style>