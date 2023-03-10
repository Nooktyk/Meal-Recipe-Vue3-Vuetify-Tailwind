<template>
    <div class="p-8">
        <v-text-field
            v-model="keyword"
            label="Search by Name"
            @change="searchMeals"
        />
    </div>
    <div class="grid grid-cols-1 md:grid-cols-4 gap-3 px-8">
        <MealDetail v-for="meal of meals" :key="meal.idMeal" :meal="meal" />
    </div>
    <div v-if="total">
        <v-pagination
            v-model="page"
            :length="Math.ceil(total / 8)"
            rounded="circle"
        ></v-pagination>
    </div>
</template>

<script setup>
import { computed, onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import store from "../store";
import MealDetail from "../components/MealDetail.vue";

const page = ref(2);
const route = useRoute();
const keyword = ref("");
const meals = computed(() =>
    store.state.searchedMeals.slice((page.value - 1) * 8, page.value * 8)
);
const total = computed(() => store.state.searchedMeals.length);

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
