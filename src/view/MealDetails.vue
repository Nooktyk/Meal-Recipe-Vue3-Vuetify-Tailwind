<template>
    <div class="flex items-center">
        <v-icon icon="mdi-home-circle" color="primary"></v-icon>
        <v-breadcrumbs :items="breadcrumbs">
            <template v-slot:title="{ item }">
                {{ item?.title?.toUpperCase() }}
            </template>
        </v-breadcrumbs>
    </div>

    <div class="flex items-center gap-2 text-3xl font-bold">
        <v-icon color="primary" icon="mdi-food-variant"></v-icon>
        {{ meal.strMeal }}
    </div>

    <div class="py-5">
        <v-divider :thickness="4" class="border-opacity-100"></v-divider>
    </div>

    <div class="flex flex-col gap-5">
        <div class="grid grid-cols-2 gap-10">
            <div class="flex justify-center">
                <img
                    :src="meal.strMealThumb"
                    :alt="meal.strMeal"
                    class="w-[100%]"
                />
            </div>
            <div class="flex flex-col gap-5">
                <div class="flex justify-center">
                    <iframe
                        v-if="meal.strYoutube"
                        class="w-[100%] h-[420px]"
                        :src="`${
                            meal.strYoutube.replace('watch?v=', 'embed/') +
                            '?autoplay=1&mute=1'
                        }`"
                    >
                    </iframe>
                </div>

                <div class="flex gap-2">
                    <v-chip color="primary">
                        <v-icon
                            start
                            icon="mdi-palette-swatch-variant"
                        ></v-icon>
                        {{ meal.strCategory }}
                    </v-chip>
                    <v-chip color="primary">
                        <v-icon start icon="mdi-earth"></v-icon>
                        {{ meal.strArea }}
                    </v-chip>
                </div>

                <div class="flex gap-2 items-center">
                    <v-chip v-if="meal.strTags" label>
                        <v-icon start icon="mdi-label"></v-icon>
                        Tags
                    </v-chip>
                    {{ meal?.strTags?.replaceAll(",", ", ") }}
                </div>

                <a :href="meal.strSource" target="_blank">
                    <v-btn
                        prepend-icon="mdi-webhook"
                        variant="flat"
                        color="error"
                        >Website</v-btn
                    >
                </a>
            </div>
        </div>

        <v-expansion-panels variant="accordion">
            <v-expansion-panel
                title="Instructions"
                :text="meal.strInstructions"
            ></v-expansion-panel>
        </v-expansion-panels>

        <div class="flex justify-center">
            <div class="w-[80%]">
                <v-table density="compact">
                    <thead class="bg-slate-400">
                        <tr class="">
                            <th class="text-left text-white">Ingredients</th>
                            <th class="text-left text-white">Measures</th>
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
        </div>
    </div>
</template>

<script setup>
import { computed, onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import axiosClient from "../axiosClient";

const route = useRoute();
const meal = ref({});

const breadcrumbs = computed(() => {
    return [
        {
            title: "Home",
            disabled: false,
            href: "/",
        },
        {
            title: meal.value.strMeal,
            disabled: true,
        },
    ];
});

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
