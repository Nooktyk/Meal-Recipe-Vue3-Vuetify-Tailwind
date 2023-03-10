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

    <div class="w-full flex items-center justify-center my-10">
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
                    <div>
                        <img
                            src="https://banner2.cleanpng.com/20180311/rww/kisspng-hot-pot-cartoon-maocai-vegetable-food-5aa5170ebef516.8780385015207687827822.jpg"
                        />
                    </div>
                </div>
            </v-parallax>
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import axiosClient from "../axiosClient";

const meal = ref({});

onMounted(async () => {
    const { data } = await axiosClient("random.php");
    meal.value = data?.meals[0];
});

const onClickRandom = async () => {
    const { data } = await axiosClient("random.php");
    meal.value = data?.meals[0];
};
</script>

<style></style>
