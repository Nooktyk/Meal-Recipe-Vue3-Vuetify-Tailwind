<template>
    <v-carousel
        cycle
        height="679"
        hide-delimiter-background
        show-arrows="hover"
        progress="info"
        interval="3000"
    >
        <v-carousel-item
            src="https://rare-gallery.com/mocahbig/25836-Meal-4k-Ultra-HD-Wallpaper.jpg"
            cover
        ></v-carousel-item>

        <v-carousel-item
            src="https://images2.alphacoders.com/100/1003810.jpg"
            cover
        ></v-carousel-item>

        <v-carousel-item
            src="https://wallpapers.com/images/featured/1pf6px6ryqfjtnyr.jpg"
            cover
        ></v-carousel-item>
    </v-carousel>

    <div class="w-full flex items-center justify-center mt-10">
        <div class="w-[90%] flex items-center">
            <v-parallax
                src="https://i.pinimg.com/originals/d3/6d/46/d36d462db827833805497d9ea78a1343.jpg"
                height="600"
                class="flex items-center"
            >
                <div class="w-full p-10 flex gap-10">
                    <div>
                        <v-card theme="dark" width="400">
                            <v-img
                                class="align-end text-white"
                                height="300"
                                :src="meal.strMealThumb"
                                :alt="meal.strMeal"
                                cover
                            >
                                <v-card-title>
                                    {{ meal.strMeal }}
                                </v-card-title>
                            </v-img>

                            <v-card-subtitle class="pt-4">
                                {{ meal.idMeal }}
                            </v-card-subtitle>

                            <v-card-text>
                                <div>
                                    <v-chip
                                        color="pink"
                                        label
                                        text-color="white"
                                    >
                                        <v-icon
                                            start
                                            icon="mdi-palette-swatch-variant"
                                        ></v-icon>
                                        {{ meal.strCategory }}
                                    </v-chip>
                                    <v-chip
                                        class="ma-2"
                                        color="blue"
                                        label
                                        text-color="white"
                                    >
                                        <v-icon start icon="mdi-earth"></v-icon>
                                        {{ meal.strArea }}
                                    </v-chip>
                                </div>
                            </v-card-text>

                            <v-card-actions>
                                <v-btn color="orange"> Share </v-btn>

                                <v-btn color="orange"> Explore </v-btn>

                                <v-spacer></v-spacer>
                                <v-btn @click="onRandomMeal" icon="mdi-recycle">
                                    <v-tooltip activator="parent" location="top"
                                        >Random</v-tooltip
                                    >
                                    <v-icon icon="mdi-recycle"></v-icon
                                ></v-btn>
                            </v-card-actions>
                        </v-card>
                    </div>
                    <div
                        class="flex flex-col gap-5 bg-black/[.2] p-10 rounded-lg"
                    >
                        <div class="text-2xl font-bold text-white">
                            {{ meal.strMeal }}
                        </div>
                        <div class="bg-black/[.5] text-white p-5">
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            {{ meal.strInstructions?.slice(0, 1200) }}...more
                        </div>
                    </div>
                </div>
            </v-parallax>
        </div>
    </div>

    <div class="w-full flex py-5">
        <div style="width: 960px" class="flex items-center justify-center">
            <iframe
                width="700"
                height="394"
                src="https://www.youtube.com/embed/FTociictyyE?autoplay=1&mute=1"
            ></iframe>
        </div>
        <div>
            <v-card max-width="400" class="mx-auto">
                <v-container>
                    <v-row dense>
                        <v-col cols="12">
                            <v-card color="#26A69A" theme="dark">
                                <v-card-title class="text-h5">
                                    Name
                                </v-card-title>

                                <v-card-subtitle
                                    >explore all meals around the world by
                                    Name</v-card-subtitle
                                >

                                <v-card-actions>
                                    <v-btn variant="text"> Try Now </v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-col>

                        <v-col cols="12">
                            <v-card color="#1A237E" theme="dark">
                                <div
                                    class="d-flex flex-no-wrap justify-space-between"
                                >
                                    <div>
                                        <v-card-title class="text-h5">
                                            Letter
                                        </v-card-title>

                                        <v-card-subtitle
                                            >Only One Letter for
                                            Meals</v-card-subtitle
                                        >

                                        <v-card-actions>
                                            <v-btn
                                                class="ms-2"
                                                variant="outlined"
                                                size="small"
                                            >
                                                START NOW
                                            </v-btn>
                                        </v-card-actions>
                                    </div>

                                    <v-avatar
                                        class="ma-3"
                                        size="125"
                                        rounded="0"
                                    >
                                        <v-img
                                            src="https://1.bp.blogspot.com/-j025bTtVQaQ/XrpI0OErYeI/AAAAAAAAD24/sWZ5RtrscvcskZNcR4QeToTfNgddY6NMQCLcBGAsYHQ/s1600/Best%2B-%2BLetter%2BA%2BName%2BDp%2BImages%2BFor%2BWhatsapp%2B%2B%25282%2529.jpg"
                                        ></v-img>
                                    </v-avatar>
                                </div>
                            </v-card>
                        </v-col>

                        <v-col cols="12">
                            <v-card color="black" theme="dark">
                                <div
                                    class="d-flex flex-no-wrap justify-space-between"
                                >
                                    <div>
                                        <v-card-title class="text-h5">
                                            Ingredients
                                        </v-card-title>

                                        <v-card-subtitle
                                            >500+ ingredients for
                                            you</v-card-subtitle
                                        >

                                        <v-card-actions>
                                            <v-btn
                                                class="ms-2"
                                                icon="mdi-play"
                                                variant="text"
                                            ></v-btn>
                                        </v-card-actions>
                                    </div>

                                    <v-avatar
                                        class="ma-3"
                                        size="125"
                                        rounded="0"
                                    >
                                        <v-img
                                            src="https://images.herzindagi.info/image/2020/Aug/Substitutes-For-Common-Kitchen-Ingredients.jpg"
                                        ></v-img>
                                    </v-avatar>
                                </div>
                            </v-card>
                        </v-col>
                    </v-row>
                </v-container>
            </v-card>
        </div>
    </div>

    <div class="px-8 pt-5">
        <v-divider
            :thickness="3"
            class="border-opacity-100"
            color="info"
        ></v-divider>
    </div>

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

    <div class="p-10 bg-slate-600">
        <v-row justify="space-around" class="px-5">
            <v-col cols="auto">
                <v-sheet elevation="10" class="py-4 px-10" rounded>
                    <v-chip-group
                        mandatory
                        selected-class="text-info"
                        v-model="area"
                    >
                        <v-chip v-for="tag in areaList" :key="tag" :value="tag">
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
