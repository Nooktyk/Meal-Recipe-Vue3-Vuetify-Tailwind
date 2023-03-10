<template>
    <v-row>
        <v-col
            v-for="cat of categories"
            :key="cat.idCategory"
            class="d-flex child-flex"
            cols="4"
        >
            <router-link
                :to="{
                    name: 'byCategory',
                    params: { ingredient: cat.strCategory },
                }"
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
                            align="center"
                            justify="center"
                        >
                            <v-progress-circular
                                indeterminate
                                color="grey-lighten-5"
                            ></v-progress-circular>
                        </v-row>
                    </template>
                </v-img>
            </router-link>
        </v-col>
    </v-row>
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

<style></style>
