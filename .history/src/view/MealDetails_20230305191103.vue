<template>
    <div class="max-w-[1400px] mx-auto p-8 flex gap-5">
        <div class="flex-3">
            <img :src="meal.strMealThumb" :alt="meal.strMeal" />
        </div>
        <div class="flex-2">
            <iframe
                v-if="meal.strYoutube"
                width="520"
                height="295"
                :src="`${
                    meal.strYoutube.replace(`watch?v=`, `embed/`) +
                    '?autoplay=1&mute=1'
                }`"
            >
            </iframe>
            <div class="mt-5">
                <h1 class="text-5x1 font-bold mb-5">{{ meal.strMeal }}</h1>
            </div>
            <div>
                <v-chip class="ma-2" color="pink" label text-color="white">
                    <v-icon start icon="mdi-palette-swatch-variant"></v-icon>
                    {{ meal.strCategory }}
                </v-chip>
                <v-chip class="ma-2" color="blue" label text-color="white">
                    <v-icon start icon="mdi-earth"></v-icon>
                    {{ meal.strArea }}
                </v-chip>
            </div>
            <div>
                <v-chip v-if="meal.strTags" class="ma-2" label>
                    <v-icon start icon="mdi-label"></v-icon>
                    Tags
                </v-chip>
                {{ meal?.strTags?.replaceAll(",", ", ")?.slice(0, -2) }}
            </div>
            <div class="p-2">
                <v-btn prepend-icon="mdi-webhook" variant="flat" color="error"
                    >Website</v-btn
                >
            </div>
        </div>
    </div>
    <div class="max-w-[1400px] mx-auto p-8 flex flex-col gap-10">
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
        </v-table>
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
