<template>
    <div class="p-8">
        <h1 class="text-4xl font-bold mb-4">Ingredients</h1>
        <v-container>
            <v-text-field v-model="keyword" label="Search for Ingredients" />
        </v-container>
        <div
            v-for="ingredient of filteredIngredients"
            :key="ingredient.idIngredient"
            class="bg-white rounded p-3 mb-3 shadow"
        >
            <router-link
                :to="{
                    name: 'byIngredient',
                    params: { ingredient: ingredient.strIngredient },
                }"
            >
                <h3 class="text-2xl font-bold mb-2">
                    {{ ingredient.strIngredient }}
                </h3>
                <p>{{ ingredient.strDescription }}</p>
            </router-link>
        </div>
    </div>
</template>

<script setup>
import { computed, onMounted, ref, watch } from "vue";
import axiosClient from "../axiosClient";

const keyword = ref("");
const Ingredients = ref([]);
const filteredIngredients = computed(() => {
    return Ingredients.value.filter(
        (el) =>
            el.strDescription
                ?.toLowerCase()
                .includes(keyword.value.toLowerCase()) ||
            el.strIngredient
                ?.toLowerCase()
                .includes(keyword.value.toLowerCase())
    );
});

onMounted(async () => {
    const { data } = await axiosClient.get("list.php?i=list");
    Ingredients.value = data.meals;
});
</script>
