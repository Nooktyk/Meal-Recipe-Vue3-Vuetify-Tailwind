<template>
    <div class="flex flex-col gap-10 p-8 justify-center">
        <div class="p-2 bg-blue-900 rounded-lg">
            <v-tabs v-model="tab" bg-color="deep-purple-darken-4" center-active>
                <v-tab v-for="letter of letters" :key="letter" :value="letter">
                    <v-btn variant="text" @click="onClickLetter(letter)">
                        {{ letter }}
                    </v-btn>
                </v-tab>
            </v-tabs>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-4 gap-5 px-8">
            <MealDetail v-for="meal of meals" :key="meal.idMeal" :meal="meal" />
        </div>
    </div>
</template>

<script setup>
import { computed, onMounted, ref } from "vue";
import store from "../store";
import MealDetail from "../components/MealDetail.vue";

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const meals = computed(() => store.state.mealsByLetter);
const letter = computed(() => store.state.letter);

const tab = ref("A");

watch(tab, () => {
    store.dispatch("searchMealsByLetter", tab.value);
});

const onClickLetter = (letter) => {
    // store.dispatch("searchMealsByLetter", letter);
};

onMounted(() => {
    store.dispatch("searchMealsByLetter", letter.value || "A");
});
</script>
