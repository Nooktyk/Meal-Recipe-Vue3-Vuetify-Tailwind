<template>
    <div class="p-8">
        <input
            type="text"
            class="rounded border-2 border-gray-200 w-full"
            placeholder="Search for Meals"
            v-model="keyword"
            @change="searchMeals"
        />
    </div>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-3 p-8">
        <div v-for="meal of meals" :key="meal.idMeal">
            <v-card>
                <v-img
                    :src="meal.strMealThumb"
                    :alt="meal.strMeal"
                    height="200px"
                    cover
                />
                <v-card-title> {{ meal.strMeal }} </v-card-title>
            </v-card>
        </div>
    </div>
</template>

<script setup>
import { computed, ref } from "vue";
import store from "../store";

const keyword = ref("");
const meals = computed(() => store.state.searchedMeals);

function searchMeals() {
    store.dispatch("searchMeals", keyword.value);
}
</script>
