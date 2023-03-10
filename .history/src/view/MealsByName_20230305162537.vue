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
const meals = computed(() => store.state.searchedMeals.slice(8, 16));
const total = computed(() => store.state.searchedMeals.length);

const page = ref(1);

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

<!-- <script>
export default {
    data() {
        return {
            page: 1,
        };
    },
    watch: {
        page(value) {
            this.page = value;
            this.onChangePage(value);
        },
    },
    methods: {
        onChangePage(value) {
            page = value;
        },
    },
};
</script> -->
