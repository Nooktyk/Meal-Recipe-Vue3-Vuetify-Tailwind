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
                            <v-card color="#385F73" theme="dark">
                                <v-card-title class="text-h5">
                                    Unlimited music now
                                </v-card-title>

                                <v-card-subtitle
                                    >Listen to your favorite artists and albums
                                    whenever and wherever, online and
                                    offline.</v-card-subtitle
                                >

                                <v-card-actions>
                                    <v-btn variant="text"> Listen Now </v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-col>

                        <v-col cols="12">
                            <v-card color="#1F7087" theme="dark">
                                <div
                                    class="d-flex flex-no-wrap justify-space-between"
                                >
                                    <div>
                                        <v-card-title class="text-h5">
                                            Supermodel
                                        </v-card-title>

                                        <v-card-subtitle
                                            >Foster the People</v-card-subtitle
                                        >

                                        <v-card-actions>
                                            <v-btn
                                                class="ms-2"
                                                variant="outlined"
                                                size="small"
                                            >
                                                START RADIO
                                            </v-btn>
                                        </v-card-actions>
                                    </div>

                                    <v-avatar
                                        class="ma-3"
                                        size="125"
                                        rounded="0"
                                    >
                                        <v-img
                                            src="https://cdn.vuetifyjs.com/images/cards/foster.jpg"
                                        ></v-img>
                                    </v-avatar>
                                </div>
                            </v-card>
                        </v-col>

                        <v-col cols="12">
                            <v-card color="#952175" theme="dark">
                                <div
                                    class="d-flex flex-no-wrap justify-space-between"
                                >
                                    <div>
                                        <v-card-title class="text-h5">
                                            Halcyon Days
                                        </v-card-title>

                                        <v-card-subtitle
                                            >Ellie Goulding</v-card-subtitle
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
                                            src="https://cdn.vuetifyjs.com/images/cards/halcyon.png"
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

    <div class="p-10">
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
                    <v-card-title>
                        <v-chip class="mt-4" label>
                            <v-icon start icon="mdi-subtitles-outline"></v-icon>
                            {{ cat.strCategory }}
                        </v-chip>
                    </v-card-title>
                </v-img>
            </v-col>
        </v-row>
    </div>

    <div class="flex pb-10">
        <v-card
            v-for="item of [1, 2, 3]"
            :key="item"
            class="mx-auto"
            color="red"
            theme="dark"
            max-width="400"
            prepend-icon="mdi-twitter"
            title="Twitter"
        >
            <template v-slot:prepend>
                <v-icon size="x-large"></v-icon>
            </template>

            <v-card-text class="text-h5 py-2">
                "Turns out semicolon-less style is easier and safer in TS
                because most gotcha edge cases are type invalid as well."
            </v-card-text>

            <v-card-actions>
                <v-list-item class="w-100">
                    <template v-slot:prepend>
                        <v-avatar
                            color="grey-darken-3"
                            image="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
                        ></v-avatar>
                    </template>

                    <v-list-item-title>Evan You</v-list-item-title>

                    <v-list-item-subtitle>Vue Creator</v-list-item-subtitle>

                    <template v-slot:append>
                        <div class="justify-self-end">
                            <v-icon class="me-1" icon="mdi-heart"></v-icon>
                            <span class="subheading me-2">256</span>
                            <span class="me-1">·</span>
                            <v-icon
                                class="me-1"
                                icon="mdi-share-variant"
                            ></v-icon>
                            <span class="subheading">45</span>
                        </div>
                    </template>
                </v-list-item>
            </v-card-actions>
        </v-card>
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

const onRandomMeal = async () => {
    const { data } = await axiosClient("random.php");
    meal.value = data?.meals[0];
};

setInterval(onRandomMeal, 4000);
</script>

<style></style>
