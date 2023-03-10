<template>
    <div class="p-8">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-5 px-8">
            <div v-for="meal of meals" :key="meal.idMeal">
                <router-link
                    :to="{ name: 'mealDetails', params: { id: meal.idMeal } }"
                >
                    <div class="text-center">
                        {{ meal.strMeal?.slice(0, 20) }}
                    </div>
                    <img :src="meal.strMealThumb" />
                </router-link>
            </div>
        </div>
    </div>
</template>

<script setup>
import { computed, onMounted } from "vue";
import { useRoute } from "vue-router";
import store from "../store";

const route = useRoute();
const meals = computed(() => store.state.mealsByIngredient);

onMounted(async () => {
    store.dispatch("searchMealsByIngredient", route.params.ingredient);
});
</script>
