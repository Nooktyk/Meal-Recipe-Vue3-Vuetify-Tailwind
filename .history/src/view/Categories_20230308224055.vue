<template>
    <div v-for="cat of categories" :key="cat.idCategory" class="flex flex-wrap">
        <router-link
            :to="{
                name: 'byCategory',
                params: { category: cat.strCategory },
            }"
        >
            <div class="w-[700px] flex gap-10">
                <div>
                    <v-img
                        :src="cat.strCategoryThumb"
                        :lazy-src="cat.strCategoryThumb"
                        aspect-ratio="1"
                        cover
                        class="bg-grey-lighten-2"
                        width="200"
                    ></v-img>
                </div>
                <div class="flex flex-col">
                    <div class="text-2xl mb-5">
                        {{ cat.strCategory }}
                    </div>
                    <div>{{ cat.strCategoryDescription }}</div>
                </div>
            </div>
        </router-link>
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

<style></style>
