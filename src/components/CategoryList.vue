<template>
    <v-parallax src="/images/category-bg.jpg" height="420">
        <div class="p-10">
            <v-sheet class="mx-auto bg-transparent text-5xl" elevation="8">
                <v-slide-group class="pa-4" show-arrows>
                    <v-slide-group-item
                        v-for="cat in categories"
                        :key="cat.idCategory"
                    >
                        <v-card
                            height="300"
                            width="300"
                            class="mr-10 bg-transparent"
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
                                    class="rounded-full"
                                >
                                    <div
                                        class="flex justify-center items-center text-4xl font-bold text-white bg-black/[0.3] h-[300px]"
                                    >
                                        {{ cat.strCategory }}
                                    </div>
                                </v-img>
                            </router-link>
                        </v-card>
                    </v-slide-group-item>
                </v-slide-group>
            </v-sheet>
        </div>
    </v-parallax>
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
