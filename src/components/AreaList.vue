<template>
    <div class="px-10 mt-6">
        <v-row justify="space-around" class="px-5 bg-slate-500 rounded-lg">
            <v-col cols="auto">
                <v-sheet
                    elevation="10"
                    class="py-4 px-10 bg-transparent"
                    rounded
                >
                    <v-chip-group
                        mandatory
                        selected-class="text-yellow"
                        v-model="area"
                    >
                        <v-chip
                            v-for="tag in areaList"
                            :key="tag"
                            :value="tag"
                            class="text-white"
                        >
                            {{ tag }}
                        </v-chip>
                    </v-chip-group>
                </v-sheet>
            </v-col>
        </v-row>
    </div>

    <div class="px-10 flex flex-wrap gap-10 justify-center py-10">
        <v-card
            v-for="meal of meals"
            :key="meal.idMeal"
            elevation="20"
            max-width="400"
            style="width: 500px"
        >
            <div class="flex justify-between p-3">
                <div class="flex flex-col gap-2">
                    <div class="text-xl flex items-center gap-2">
                        <v-icon icon="mdi-star-circle"></v-icon
                        >{{ meal.strMeal?.slice(0, 20) }}
                    </div>
                    <v-divider
                        :thickness="3"
                        class="border-opacity-100"
                    ></v-divider>
                    <div>
                        <v-chip> See More </v-chip>
                    </div>
                </div>

                <v-img
                    contain
                    height="125px"
                    :src="meal.strMealThumb"
                    style="flex-basis: 125px"
                    class="flex-grow-0"
                ></v-img>
            </div>

            <v-divider></v-divider>

            <v-card-actions class="pa-4">
                Rate this Meal

                <v-spacer></v-spacer>

                <v-rating
                    active-color="yellow-accent-4"
                    half-increments
                    hover
                    size="18"
                ></v-rating>
            </v-card-actions>
        </v-card>
    </div>
</template>

<script setup>
import { onMounted, ref, watch } from "vue";
import axiosClient from "../axiosClient";

const areaList = ref([]);
const meals = ref([]);
const area = ref("Thai");

watch(area, async () => {
    const { data } = await axiosClient(`filter.php?a=${area.value}`);
    meals.value = data?.meals;
});

onMounted(async () => {
    if (true) {
        const { data } = await axiosClient("list.php?a=list");
        areaList.value = data?.meals.map((el) => el.strArea);
    }

    if (true) {
        const { data } = await axiosClient("filter.php?a=Thai");
        meals.value = data?.meals;
    }
});
</script>
