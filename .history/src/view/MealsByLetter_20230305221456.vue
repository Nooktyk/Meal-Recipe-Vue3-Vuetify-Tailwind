<template>
    <div class="flex flex-col p-8 justify-center">
        <div class="flex justify-center gap-2 mt-2">
            <!-- <router-link
                v-for="letter of letters"
                :to="{ name: 'byLetter', params: { letter } }"
                :key="letter"
            >
            </router-link> -->
        </div>
        <div class="p-2 bg-blue-900 rounded-lg">
            <v-tabs bg-color="deep-purple-darken-4" center-active>
                <v-tab v-for="letter of letters" :key="letter" :value="letter">
                    <v-btn variant="text" @click="onClickLetter(letter)">
                        {{ letter }}
                    </v-btn>
                </v-tab>
            </v-tabs>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-4 gap-3 px-8 mt-10">
            <MealDetail v-for="meal of meals" :key="meal.idMeal" :meal="meal" />
        </div>
    </div>
</template>

<script setup>
import { computed, onMounted } from "vue";
import store from "../store";
import MealDetail from "../components/MealDetail.vue";

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const meals = computed(() => store.state.mealsByLetter);
const letter = computed(() => store.state.letter);

const onClickLetter = (letter) => {
    store.dispatch("searchMealsByLetter", letter);
};

onMounted(() => {
    console.log(letter);
    store.dispatch("searchMealsByLetter", letter || "A");
});
</script>
