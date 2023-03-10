<template>
    <div class="p-8">
        <v-text-field
            v-model="keyword"
            label="Search by Name"
            @change="searchMeals"
        />
    </div>
    <div>{{ meals.length }}</div>
    <div class="grid grid-cols-1 md:grid-cols-4 gap-3 px-8">
        <MealDetail v-for="meal of meals" :key="meal.idMeal" :meal="meal" />
    </div>
    <div>
        <v-pagination
            :length="meals.length / 10"
            rounded="circle"
        ></v-pagination>
    </div>
</template>

<script setup>
import { computed, onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import store from "../store";
import MealDetail from "../components/MealDetail.vue";

const route = useRoute();
const keyword = ref("");
const meals = computed(() => store.state.searchedMeals);

function searchMeals() {
    store.dispatch("searchMeals", keyword.value);
}

onMounted(() => {
    keyword.value = route.params.name;
    if (keyword.value) {
        searchMeals();
    }
});
</script>
