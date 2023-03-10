<template>
    <div class="p-8">
        <v-text-field
            v-model="keyword"
            label="Search by Name"
            @change="searchMeals"
        />
    </div>
    <div class="grid grid-cols-1 md:grid-cols-4 gap-3 px-8 py-0">
        <MealDetail v-for="meal of meals" :key="meal.idMeal" :meal="meal" />
    </div>
</template>

<script setup>
import { computed, ref } from "vue";
import store from "../store";
import MealDetail from "../components/MealDetail.vue";

const keyword = ref("");
const meals = computed(() => store.state.searchedMeals);

function searchMeals() {
    store.dispatch("searchMeals", keyword.value);
}
</script>
