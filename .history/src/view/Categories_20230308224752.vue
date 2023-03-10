<template>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div
            v-for="cat of categories"
            :key="cat.idCategory"
            class="w-[700px] flex gap-10"
        >
            <div>
                <router-link
                    :to="{
                        name: 'byCategory',
                        params: { category: cat.strCategory },
                    }"
                >
                    <v-img
                        :src="cat.strCategoryThumb"
                        :lazy-src="cat.strCategoryThumb"
                        aspect-ratio="1"
                        cover
                        class="bg-grey-lighten-2 rounded-lg"
                        width="200"
                    ></v-img>
                </router-link>
            </div>
            <div class="flex flex-col">
                <div class="text-2xl mb-5">
                    {{ cat.strCategory }}
                </div>
                <div>{{ cat.strCategoryDescription?.slice(0, 500) }}</div>
            </div>
        </div>
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
