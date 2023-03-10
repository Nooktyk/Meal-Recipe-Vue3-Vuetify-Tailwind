<template>
    <div class="p-8">
        <div class="text-2xl font-bold text-center py-5">
            {{ route.params.category }}
        </div>
        <div class="grid grid-cols-1 md:grid-cols-4 gap-5 px-8">
            <MealDetail
                v-for="meal of current"
                :key="meal.idMeal"
                :meal="meal"
            />
        </div>
        <div v-if="total" class="py-5">
            <v-pagination
                v-model="page"
                :length="Math.ceil(total / 8)"
                rounded="circle"
            ></v-pagination>
        </div>
        <div v-if="!total" class="w-full flex items-center justify-center">
            <v-progress-linear
                indeterminate
                color="yellow-darken-2"
            ></v-progress-linear>
        </div>
    </div>
</template>

<script setup>
import { computed, onMounted, ref, watch } from "vue";
import { useRoute } from "vue-router";
import axiosClient from "../axiosClient";
import MealDetail from "../components/MealDetail.vue";

const route = useRoute();
const meals = ref([]);
const total = computed(() => {
    return 0;
});
const page = ref(1);

const current = computed(() => {
    return meals.value.slice((page.value - 1) * 8, page.value * 8);
});

onMounted(async () => {
    const { data } = await axiosClient(`filter.php?c=${route.params.category}`);
    meals.value = data.meals;
});
</script>
