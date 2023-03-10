<template>
    <Header title="Serach by Name of Meals" icon="mdi-note-search-outline" />

    <div class="flex flex-col gap-5">
        <v-container>
            <v-text-field v-model="keyword" label="Search by Name" />
            <div v-if="total && keyword">
                <v-chip color="primary">
                    <v-icon start icon="mdi-database-search"></v-icon>
                    results for {{ search }} Total {{ total }} items
                </v-chip>
            </div>
        </v-container>

        <div class="grid grid-cols-1 md:grid-cols-4 gap-5">
            <MealDetail v-for="meal of meals" :key="meal.idMeal" :meal="meal" />
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
import Header from "../components/Header.vue";

const route = useRoute();

const keyword = ref("");
const page = ref(1);

const meals = computed(() =>
    store.state.searchedMeals.slice((page.value - 1) * 8, page.value * 8)
);
const total = computed(() => store.state.searchedMeals.length);
const search = computed(() => store.state.searchValue);

watch(keyword, () => {
    store.dispatch("searchMeals", keyword.value);
    page.value = 1;
});

onMounted(() => {
    keyword.value = route.params.name || store.state.searchValue;
    if (keyword.value) {
        store.dispatch("searchMeals", keyword.value);
    } else {
        store.dispatch("searchMeals", "");
    }
});
</script>
