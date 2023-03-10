<template>
    <pre>{{ categories }}</pre>
    <div class="p-8">
        <h1 class="text-4xl font-bold mb-4">Categories</h1>
        <div
            v-for="cat of categories"
            :key="cat.idCategory"
            class="bg-white rounded p-3 mb-3 shadow"
        >
            <router-link
                :to="{
                    name: 'byCategory',
                    params: { ingredient: cat.strCategory },
                }"
            >
                <div class="flex gap-3">
                    <h3 class="text-2xl font-bold mb-2">
                        {{ cat.strCategory }}
                    </h3>
                    <p>{{ cat.strCategoryDescription }}</p>
                </div>
            </router-link>
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
