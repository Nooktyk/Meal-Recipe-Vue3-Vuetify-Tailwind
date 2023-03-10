<template>
    <div class="p-8">
        <input
            type="text"
            class="rounded border-2 border-gray-200 w-full"
            placeholder="Search for Meals"
            v-model="keyword"
            @change="searchMeals"
        />
    </div>
</template>

<script setup>
import { ref } from "vue";
import axiosClient from "../axiosClient";

const keyword = ref("");

function searchMeals() {
    axiosClient.get(`search.php?s=${keyword.value}`);
}
</script>
