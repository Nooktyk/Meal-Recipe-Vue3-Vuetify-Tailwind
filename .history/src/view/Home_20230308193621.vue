<template>
    <BannerList />

    <RandomMeal />

    <Reccomandation />

   

    <div>
        <v-parallax
            src="https://thumbs.dreamstime.com/b/greek-food-background-traditional-different-greek-dishes-set-greek-food-background-traditional-different-greek-dishes-set-top-view-178761927.jpg"
            height="420"
        >
            <div class="p-10">
                <v-sheet
                    class="mx-auto bg-transparent text-5xl"
                    elevation="8"
                    theme="dark"
                >
                    <v-slide-group
                        v-model="model"
                        class="pa-4"
                        selected-class="bg-success"
                        show-arrows
                    >
                        <v-slide-group-item
                            v-for="cat in categories"
                            :key="cat.idCategory"
                            class="px-5"
                        >
                            <v-card
                                color="grey-lighten-1"
                                height="300"
                                width="300"
                                class="mr-10"
                            >
                                <router-link
                                    :to="{
                                        name: 'byCategory',
                                        params: {
                                            category: cat.strCategory,
                                        },
                                    }"
                                >
                                    <v-img
                                        :src="cat.strCategoryThumb"
                                        :lazy-src="cat.strCategoryThumb"
                                        aspect-ratio="1"
                                        cover
                                        class="bg-grey-lighten-2"
                                    >
                                        <v-card-title>
                                            <v-chip
                                                class="mt-1"
                                                label
                                                color="black"
                                            >
                                                <v-icon
                                                    start
                                                    icon="mdi-subtitles-outline"
                                                ></v-icon>
                                                {{ cat.strCategory }}
                                            </v-chip>
                                        </v-card-title>
                                    </v-img>
                                </router-link>
                            </v-card>
                        </v-slide-group-item>
                    </v-slide-group>
                </v-sheet>
            </div>
        </v-parallax>
    </div>

    <div class="px-8 pt-5">
        <v-divider
            :thickness="3"
            class="border-opacity-100"
            color="info"
        ></v-divider>
    </div>

    <div class="p-10">
        <v-row justify="space-around" class="px-5 bg-slate-600 rounded-lg">
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

    <div class="w-full px-10 flex flex-wrap gap-10 justify-center pb-20">
        <v-card
            v-for="meal of meals"
            :key="meal.idMeal"
            elevation="20"
            max-width="400"
            style="width: 500px"
        >
            <div class="d-flex justify-between">
                <v-card-title class="flex-grow-1 flex-column align-start">
                    <div class="text-h6">{{ meal.strMeal?.slice(0, 24) }}</div>

                    <v-chip color="blue"> See More </v-chip>
                </v-card-title>

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
import { computed, onMounted, ref, watch } from "vue";
import axiosClient from "../axiosClient";
import store from "../store";
import BannerList from "../components/BannerList.vue";
import RandomMeal from "../components/RandomMeal.vue";
import Reccomandation from "../components/Reccomandation.vue";

const meal = ref({});
const categories = ref([]);
const areaList = ref([]);
const meals = ref([]);
const area = ref("Thai");
const rating = computed(() => store.state.rating);

watch(area, async () => {
    const { data } = await axiosClient(`filter.php?a=${area.value}`);
    meals.value = data?.meals;
});

onMounted(async () => {
    const { data } = await axiosClient("random.php");
    meal.value = data?.meals[0];

    if (true) {
        const { data } = await axiosClient("categories.php");
        categories.value = data?.categories;
    }

    if (true) {
        const { data } = await axiosClient("list.php?a=list");
        areaList.value = data?.meals.map((el) => el.strArea);
    }

    if (true) {
        const { data } = await axiosClient("filter.php?a=Thai");
        meals.value = data?.meals;
    }
});

const onRandomMeal = async () => {
    const { data } = await axiosClient("random.php");
    meal.value = data?.meals[0];
};

setInterval(onRandomMeal, 4000);
</script>

<style></style>
