<template>
    <div class="p-8">
        <div class="text-2xl font-bold text-center py-5">
            {{ route.params.category }}
        </div>
        <div class="grid grid-cols-1 md:grid-cols-4 gap-5 px-8">
            <div v-for="meal of currentMeals" :key="meal.idMeal">
                <router-link
                    :to="{ name: 'mealDetails', params: { id: meal.idMeal } }"
                >
                    <div class="text-center">
                        {{ meal.strMeal?.slice(0, 40) }}
                    </div>
                    <img :src="meal.strMealThumb" />
                </router-link>
            </div>
        </div>
        <div v-if="total" class="py-5">
            <v-pagination
                v-model="page"
                :length="Math.ceil(total / 8)"
                rounded="circle"
            ></v-pagination>
        </div>
    </div>
</template>

<script setup>
import { computed, onMounted, ref, watch } from "vue";
import { useRoute } from "vue-router";
import axiosClient from "../axiosClient";

const route = useRoute();
const meals = ref([]);
const total = computed(() => {
    return meals.value.length;
});
const page = ref(1);
const currentMeals = ref([]);

watch(page, () => {
    currentMeals.value = meals.value.slice((page - 1) * 8, page * 8);
});

onMounted(async () => {
    const { data } = await axiosClient(`filter.php?c=${route.params.category}`);
    meals.value = data.meals;
});
</script>
