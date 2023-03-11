<template>
    <div class="flex items-center">
        <v-icon icon="mdi-home-circle" color="primary"></v-icon>
        <v-breadcrumbs :items="breadcrumbs">
            <template v-slot:title="{ item }">
                {{ item.title.toUpperCase() }}
            </template>
        </v-breadcrumbs>
    </div>

    <div class="flex flex-col gap-5">
        <div class="flex justify-center">
            <div class="text-2xl font-bold bg-slate-200 px-8 py-4 rounded-xl">
                {{ route.params.category }}
            </div>
        </div>

        <v-divider :thickness="4" class="border-opacity-100"></v-divider>

        <div class="grid grid-cols-1 md:grid-cols-4 gap-10">
            <MealDetail
                v-for="meal of current"
                :key="meal.idMeal"
                :meal="meal"
            />
        </div>

        <div v-if="total">
            <v-pagination
                v-model="page"
                :length="Math.ceil(total / 8)"
                rounded="circle"
            ></v-pagination>
        </div>

        <div v-if="!total" class="flex justify-center">
            <v-progress-linear
                indeterminate
                color="primary"
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

const page = ref(1);
const meals = ref([]);
const breadcrumbs = ref([
    {
        title: "Home",
        disabled: false,
        href: "/",
    },
    {
        title: "Categories",
        disabled: false,
        href: "/categories",
    },
    {
        title: route.params.category,
        disabled: true,
    },
]);

const total = computed(() => {
    return meals.value.length;
});
const current = computed(() => {
    return meals.value.slice((page.value - 1) * 8, page.value * 8);
});

watch(page, () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

onMounted(async () => {
    const { data } = await axiosClient(`filter.php?c=${route.params.category}`);
    meals.value = data.meals;
});
</script>
