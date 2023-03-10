<template>
    <div class="max-w-[1400px] mx-auto p-8 flex gap-20">
        <div class="flex-3">
            <img
                :src="meal.strMealThumb"
                :alt="meal.strMeal"
                class="max-w-[100%]"
            />
        </div>
        <div class="flex-2">
            <iframe
                v-if="meal.strYoutube"
                width="420"
                height="315"
                :src="`${
                    meal.strYoutube.replace(`watch?v=`, `embed/`) +
                    '?autoplay=1&mute=1'
                }`"
            >
            </iframe>
        </div>

        <!-- <h1 class="text-5x1 font-bold mb-5">{{ meal.strMeal }}</h1>
        <img
            :src="meal.strMealThumb"
            :alt="meal.strMeal"
            class="max-w-[100%]"
        />
        <div class="grid grid-cols-1 sm:grid-cols-3 text-lg py-2">
            <div><strong>Category:</strong> {{ meal.strCategory }}</div>
            <div><strong>Area:</strong> {{ meal.strArea }}</div>
            <div><strong>Tags:</strong> {{ meal.strTags }}</div>
        </div>
        <div>
            {{ meal.strInstructions }}
        </div>
        <v-table density="compact">
            <thead>
                <tr>
                    <th class="text-left">Ingredients</th>
                    <th class="text-left">Measures</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(el, idx) of new Array(20)" :key="idx">
                    <td v-if="meal[`strIngredient${idx + 1}`]">
                        {{ meal[`strIngredient${idx + 1}`] }}
                    </td>
                    <td
                        v-if="
                            meal[`strMeasure${idx + 1}`] &&
                            meal[`strMeasure${idx + 1}`] !== ' '
                        "
                    >
                        {{ meal[`strMeasure${idx + 1}`] }}
                    </td>
                </tr>
            </tbody>
        </v-table> -->
    </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import axiosClient from "../axiosClient";

const route = useRoute();
const meal = ref({});

onMounted(async () => {
    if (route.params.id) {
        await axiosClient
            .get(`lookup.php?i=${route.params.id}`)
            .then(({ data }) => {
                meal.value = data.meals[0] || {};
            });
    }
});
</script>
