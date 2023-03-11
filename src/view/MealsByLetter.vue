<template>
    <Header title="Search by First Letter of Meals" icon="mdi-alpha-a-circle" />

    <div class="flex flex-col gap-5">
        <div class="p-2 rounded-lg text-xl">
            <v-tabs v-model="tab" center-active color="primary">
                <v-tab v-for="letter of letters" :key="letter" :value="letter">
                    {{ letter }}
                </v-tab>
            </v-tabs>
        </div>

        <div v-if="total">
            <v-chip color="primary">
                <v-icon start icon="mdi-database-search"></v-icon>
                Total {{ total }} items
            </v-chip>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-4 gap-10">
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
import store from "../store";
import MealDetail from "../components/MealDetail.vue";
import Header from "../components/Header.vue";

const tab = ref("A");
const page = ref(1);
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

const letter = computed(() => store.state.letter);
const total = computed(() => store.state.mealsByLetter.length);
const meals = computed(() =>
    store.state.mealsByLetter.slice((page.value - 1) * 8, page.value * 8)
);

watch(tab, () => {
    store.dispatch("searchMealsByLetter", tab.value);
    page.value = 1;
});

watch(page, () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

onMounted(() => {
    store.dispatch("searchMealsByLetter", letter.value || "A");
    if (letter.value) {
        tab.value = letter.value;
    }
});
</script>
