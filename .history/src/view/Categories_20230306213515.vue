<template>
    <div class="p-10">
        <v-list lines="three">
            <v-list-item v-for="cat of categories" :key="cat.idCategory">
                <v-img
                    :src="cat.strCategoryThumb"
                    :lazy-src="cat.strCategoryThumb"
                    aspect-ratio="1"
                    cover
                    class="bg-grey-lighten-2"
                    width="300"
                ></v-img>
            </v-list-item>
        </v-list>
    </div>
    <!-- <v-row>
        <v-col
            v-for="cat of categories"
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
                width="400"
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
        </v-col>
    </v-row> -->
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
