<template>
    <div class="p-8">
        <v-container color="info">
            <v-text-field
                v-model="keyword"
                label="Search by Name"
                @change="searchMeals"
                color="info"
            />
        </v-container>
        <div v-if="total">
            ผมการค้นหา {{ search }} ทั้งหมด {{ total }} รายการ
        </div>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-4 gap-3 px-8">
        <MealDetail v-for="meal of meals" :key="meal.idMeal" :meal="meal" />
    </div>
    <div v-if="total" class="py-10">
        <v-pagination
            color="info"
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

const route = useRoute();
const keyword = ref("");
const page = ref(1);
const meals = computed(() =>
    store.state.searchedMeals.slice((page.value - 1) * 8, page.value * 8)
);
const total = computed(() => store.state.searchedMeals.length);
const search = computed(() => store.state.searchValue);

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
