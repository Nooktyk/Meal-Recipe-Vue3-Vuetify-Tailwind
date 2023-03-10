<template>
    <v-carousel
        cycle
        height="600"
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
                                <v-btn
                                    @click="onClickRandom"
                                    icon="mdi-recycle"
                                >
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

    <div class="p-10 bg-black">
        <v-row>
            <v-col
                v-for="cat in categories"
                :key="cat.idCategory"
                class="d-flex child-flex"
                cols="4"
            >
                <v-img
                    :src="cat.strCategoryThumb"
                    :lazy-src="cat.strCategoryThumb"
                    aspect-ratio="1"
                    cover
                    class="bg-grey-lighten-2"
                >
                    <template v-slot:placeholder>
                        <v-row
                            class="fill-height ma-0"
                            justify="center"
                            align="center"
                        >
                            <v-progress-circular
                                indeterminate
                                color="grey-lighten-5"
                            ></v-progress-circular>
                        </v-row>
                    </template>
                </v-img>
            </v-col>
        </v-row>
    </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import axiosClient from "../axiosClient";

const meal = ref({});
const categories = ref([]);

onMounted(async () => {
    const { data } = await axiosClient("random.php");
    meal.value = data?.meals[0];

    if (true) {
        const { data } = await axiosClient("categories.php");
        categories.value = data?.categories.slice(0, 9);
    }
});

const onClickRandom = async () => {
    const { data } = await axiosClient("random.php");
    meal.value = data?.meals[0];
};
</script>

<style></style>
