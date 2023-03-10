<template>
    <div>
        <div
            v-for="ingredient of Ingredients"
            :key="ingredient.id"
            class="bg-white rounded p-3 mb-3"
        >
            <h3 class="text-2xl font-bold">{{ ingredient.strIngredient }}</h3>
            <p>{{ ingredient.strDescription }}</p>
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import axiosClient from "../axiosClient";

const Ingredients = ref([]);

onMounted(async () => {
    const { data } = await axiosClient.get("list.php?i=list");
    Ingredients.value = data.meals;
});
</script>
