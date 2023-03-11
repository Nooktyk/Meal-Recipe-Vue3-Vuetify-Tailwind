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
                {{ route.params.ingredient }}
            </div>
        </div>

        <v-divider :thickness="4" class="border-opacity-100"></v-divider>

        <div class="grid grid-cols-1 md:grid-cols-4 gap-10">
            <meal-detail
                v-for="meal of meals"
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
    </div>
</template>

<script setup>
import { computed, onMounted, ref, watch } from "vue";
import { useRoute } from "vue-router";
import store from "../store";
import MealDetail from "../components/MealDetail.vue";

const route = useRoute();

const page = ref(1);
const breadcrumbs = ref([
    {
        title: "Home",
        disabled: false,
        href: "/",
    },
    {
        title: "Ingredients",
        disabled: false,
        href: "/ingredients",
    },
    {
        title: route.params.ingredient,
        disabled: true,
    },
]);

const total = computed(() => store.state.mealsByIngredient?.length);
const meals = computed(() =>
    store.state.mealsByIngredient?.slice((page.value - 1) * 8, page.value * 8)
);

watch(page, () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

onMounted(async () => {
    store.dispatch("searchMealsByIngredient", route.params.ingredient);
});
</script>
