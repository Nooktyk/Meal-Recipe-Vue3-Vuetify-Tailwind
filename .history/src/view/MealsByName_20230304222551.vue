<template>
    <div class="p-8">
        <v-text-field
            v-model="keyword"
            label="Search by Name"
            @click:append-inner="searchMeals"
            density="compact"
            variant="solo"
            append-inner-icon="mdi-magnify"
            single-line
            hide-details
        />
    </div>
    <div class="flex justify-center">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-3 p-8">
            <div v-for="meal of meals" :key="meal.idMeal">
                <v-card>
                    <v-img
                        :src="meal.strMealThumb"
                        :alt="meal.strMeal"
                        height="250px"
                        cover
                    />
                    <v-card-title class="text-center">
                        {{ meal.strMeal }}
                    </v-card-title>
                    <v-card-actions>
                        <v-btn color="red">
                            <a :href="meal.strYoutube" target="_blank">
                                Youtube
                            </a>
                        </v-btn>
                        <v-spacer></v-spacer>
                        <v-btn icon="mdi-chevron-down"></v-btn>
                    </v-card-actions>
                </v-card>
            </div>
        </div>
    </div>
</template>

<script setup>
import { computed, ref } from "vue";
import store from "../store";

const keyword = ref("");
const meals = computed(() => store.state.searchedMeals);

function searchMeals() {
    store.dispatch("searchMeals", keyword.value);
}
</script>
