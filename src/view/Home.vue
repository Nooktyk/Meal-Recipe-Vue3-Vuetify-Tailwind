<template>
    <div class="flex flex-col gap-5">
        <BannerList />
        <RandomMeal />
        <Reccomandation />
        <CategoryList />
        <AreaList />
    </div>
</template>

<script setup>
import BannerList from "../components/BannerList.vue";
import RandomMeal from "../components/RandomMeal.vue";
import Reccomandation from "../components/Reccomandation.vue";
import CategoryList from "../components/CategoryList.vue";
import AreaList from "../components/AreaList.vue";
</script>

<style></style>
