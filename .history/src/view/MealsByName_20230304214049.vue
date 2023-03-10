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
    <div>
        <div v-for="meal of meals" :key="meal.idMeal">
            <img :src="meal.strMealThumb" :alt="meal.strMeal" />
            <h1>{{ meal.strMeal }}</h1>
            <div>
                <a :href="meal.strYoutube" target="_blank">Youtube</a>
                <router-link to="/">View</router-link>
            </div>
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
