<template>
    <div class="p-8">
        <input
            type="text"
            class="rounded border-2 border-gray-200 w-full"
            placeholder="Search for Meals"
            v-model="keyword"
            @change="searchMeals"
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
                        <v-btn color="orange-lighten-2" variant="text">
                            Explore
                        </v-btn>
                        <v-spacer></v-spacer>
                    </v-card-actions>
                    <v-expand-transition>
                        <div v-show="false">
                            <v-divider></v-divider>
                            <v-card-text>
                                I'm a thing. But, like most politicians, he
                                promised more than he could deliver. You won't
                                have time for sleeping, soldier, not with all
                                the bed making you'll be doing. Then we'll go
                                with that data file! Hey, you add a one and two
                                zeros to that or we walk! You're going to do his
                                laundry? I've got to find a way to escape.
                            </v-card-text>
                        </div>
                    </v-expand-transition>
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
