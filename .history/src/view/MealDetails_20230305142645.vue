<template>
    <div class="w-[800px] mx-auto">
        <h1 class="text-5x1 font-bold mb-5">{{ meal.strMeal }}</h1>
        <img :src="meal.strMealThumb" :alt="meal.strMeal" />
        <div class="grid grid-cols-1 md:grid-cols-3 text-lg py-2">
            <div><strong>Category:</strong> {{ meal.strCategory }}</div>
            <div><strong>Area:</strong> {{ meal.strArea }}</div>
            <div><strong>Tags:</strong> {{ meal.strTags }}</div>
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import axiosClient from "../axiosClient";

const route = useRoute();
const meal = ref({});

onMounted(() => {
    if (route.params.id) {
        axiosClient.get(`lookup.php?i=${route.params.id}`).then(({ data }) => {
            meal.value = data.meals[0] || {};
        });
    }
});
</script>
