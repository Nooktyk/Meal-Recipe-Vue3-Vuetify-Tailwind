<template>
    <BannerList />

    <RandomMeal />

    <Reccomandation />

    <CategoryList />

    <div class="px-8 pt-5">
        <v-divider
            :thickness="3"
            class="border-opacity-100"
            color="info"
        ></v-divider>
    </div>

    <AreaList />
</template>

<script setup>
import { computed, onMounted, ref, watch } from "vue";
import axiosClient from "../axiosClient";
import store from "../store";
import BannerList from "../components/BannerList.vue";
import RandomMeal from "../components/RandomMeal.vue";
import Reccomandation from "../components/Reccomandation.vue";
import CategoryList from "../components/CategoryList.vue";
import AreaList from "../components/AreaList.vue";

const meal = ref({});
const categories = ref([]);
const areaList = ref([]);
const meals = ref([]);
const area = ref("Thai");
const rating = computed(() => store.state.rating);

watch(area, async () => {
    const { data } = await axiosClient(`filter.php?a=${area.value}`);
    meals.value = data?.meals;
});

onMounted(async () => {
    const { data } = await axiosClient("random.php");
    meal.value = data?.meals[0];

    if (true) {
        const { data } = await axiosClient("categories.php");
        categories.value = data?.categories;
    }

    if (true) {
        const { data } = await axiosClient("list.php?a=list");
        areaList.value = data?.meals.map((el) => el.strArea);
    }

    if (true) {
        const { data } = await axiosClient("filter.php?a=Thai");
        meals.value = data?.meals;
    }
});

const onRandomMeal = async () => {
    const { data } = await axiosClient("random.php");
    meal.value = data?.meals[0];
};

setInterval(onRandomMeal, 4000);
</script>

<style></style>
