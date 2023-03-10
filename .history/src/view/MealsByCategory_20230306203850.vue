<template>
    <div class="p-8">
        <div class="text-2xl font-bold text-center py-5">
            {{ route.params.category }}
        </div>
        <div class="grid grid-cols-1 md:grid-cols-4 gap-5 px-8">
            <div v-for="meal of meals" :key="meal.idMeal">
                <router-link
                    :to="{ name: 'mealDetails', params: { id: meal.idMeal } }"
                >
                    <div class="text-center">
                        {{ meal.strMeal?.slice(0, 47) }}
                    </div>
                    <img :src="meal.strMealThumb" />
                </router-link>
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import axiosClient from "../axiosClient";

const route = useRoute();
const meals = ref([]);

onMounted(async () => {
    const { data } = await axiosClient(`filter.php?c=${route.params.category}`);
    meals.value = data.meals;
});
</script>
