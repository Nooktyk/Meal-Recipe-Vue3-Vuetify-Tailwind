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
            <v-tabs v-model="tab" bg-color="deep-purple-darken-4" center-active>
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
import { computed, onMounted, ref } from "vue";
import store from "../store";
import { useRoute } from "vue-router";
import MealDetail from "../components/MealDetail.vue";

const route = useRoute();
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const meals = computed(() => store.state.mealsByLetter);

const tab = ref("A");

const onClickLetter = (letter) => {
    store.dispatch("searchMealsByLetter", letter);
};

onMounted(() => {
    store.dispatch("searchMealsByLetter", tab);
});
</script>
