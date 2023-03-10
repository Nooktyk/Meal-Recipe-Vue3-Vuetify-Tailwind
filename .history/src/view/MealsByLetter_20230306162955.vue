<template>
    <v-breadcrumbs :items="items"> </v-breadcrumbs>
    <div class="flex flex-col gap-5 p-8 pt-0 justify-center">
        <div class="p-2 bg-blue-900 rounded-lg">
            <v-tabs v-model="tab" bg-color="deep-purple-darken-4" center-active>
                <v-tab v-for="letter of letters" :key="letter" :value="letter">
                    {{ letter }}
                </v-tab>
            </v-tabs>
        </div>
        <div v-if="total">
            <v-chip class="ma-2" color="blue" label text-color="white">
                <v-icon start icon="mdi-database-search"></v-icon>
                Total {{ total }} items
            </v-chip>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-4 gap-5 px-8">
            <MealDetail v-for="meal of meals" :key="meal.idMeal" :meal="meal" />
        </div>
        <div v-if="total" class="py-5">
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

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const page = ref(1);
const meals = computed(() =>
    store.state.mealsByLetter.slice((page.value - 1) * 8, page.value * 8)
);
const letter = computed(() => store.state.letter);
const total = computed(() => store.state.mealsByLetter.length);

const tab = ref("A");

watch(tab, () => {
    store.dispatch("searchMealsByLetter", tab.value);
    page.value = 1;
});

onMounted(() => {
    store.dispatch("searchMealsByLetter", letter.value || "A");
    if (letter.value) {
        tab.value = letter.value;
    }
});
</script>

<script>
export default {
    data: () => ({
        items: [
            {
                title: "Dashboard",
                disabled: false,
                href: "breadcrumbs_dashboard",
            },
            {
                title: "Link 1",
                disabled: false,
                href: "breadcrumbs_link_1",
            },
            {
                title: "Link 2",
                disabled: true,
                href: "breadcrumbs_link_2",
            },
        ],
    }),
};
</script>
