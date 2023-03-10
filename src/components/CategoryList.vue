<template>
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
                    <v-slide-group class="pa-4" show-arrows>
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
</template>

<script setup>
import { onMounted, ref } from "vue";
import axiosClient from "../axiosClient";

const categories = ref([]);

onMounted(async () => {
    const { data } = await axiosClient("categories.php");
    categories.value = data?.categories;
});
</script>
