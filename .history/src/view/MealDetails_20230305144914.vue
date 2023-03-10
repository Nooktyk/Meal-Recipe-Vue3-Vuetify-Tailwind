<template>
    <div class="w-[800px] mx-auto p-8">
        <h1>{{ meal.strYoutube }}</h1>
        <iframe
            width="420"
            height="315"
            :src="`${
                meal?.strYoutube?.replace(`watch?v=`, `embed/`) +
                '?autoplay=1&mute=1'
            }`"
        >
        </iframe>
        <h1 class="text-5x1 font-bold mb-5">{{ meal.strMeal }}</h1>
        <img :src="meal.strMealThumb" :alt="meal.strMeal" />
        <div class="grid grid-cols-1 sm:grid-cols-3 text-lg py-2">
            <div><strong>Category:</strong> {{ meal.strCategory }}</div>
            <div><strong>Area:</strong> {{ meal.strArea }}</div>
            <div><strong>Tags:</strong> {{ meal.strTags }}</div>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2">
            <div>
                <h2 class="text-2x1 font-semibold mb-2">Ingredients</h2>
                <ul>
                    <template v-for="(el, idx) of new Array(20)">
                        <li v-if="meal[`strIngredient${idx + 1}`]">
                            {{ idx + 1 }}. {{ meal[`strIngredient${idx + 1}`] }}
                        </li>
                    </template>
                </ul>
            </div>
            <div>
                <h2 class="text-2x1 font-semibold mb-2">Measures</h2>
                <ul>
                    <template v-for="(el, idx) of new Array(20)">
                        <li
                            v-if="
                                meal[`strMeasure${idx + 1}`] &&
                                meal[`strMeasure${idx + 1}`] !== ' '
                            "
                        >
                            {{ idx + 1 }}. {{ meal[`strMeasure${idx + 1}`] }}
                        </li>
                    </template>
                </ul>
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import axiosClient from "../axiosClient";

const route = useRoute();
const meal = ref({});

onMounted(() => {
    if (route.params.id) {
        axiosClient.get(`lookup.php?i=${route.params.id}`).then(({ data }) => {
            meal.value = data.meals[0] || {};
        });
    }
});
</script>
