<template>
    <div class="flex gap-2 flex-wrap">
        <div v-for="item of type" @click="onClickTag(item)">
            <v-chip color="info" class="customChip">
                {{ item }}
            </v-chip>
        </div>
    </div>
    <div class="p-8">
        <h1 class="text-4xl font-bold mb-4">Ingredients</h1>
        <v-container>
            <v-text-field v-model="keyword" label="Search for Ingredients" />
            <div>{{ filteredIngredients.length }}</div>
            <!-- <div v-for="ingredient of filteredIngredients">
                <div v-if="ingredient.strType">
                    {{ ingredient.strType }}
                </div>
            </div> -->
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
                <div class="flex gap-3">
                    <h3 class="text-2xl font-bold mb-2">
                        {{ ingredient.strIngredient }}
                    </h3>
                    <v-chip v-if="ingredient.strType" color="info">
                        <v-icon
                            start
                            icon="mdi-palette-swatch-variant"
                        ></v-icon>
                        {{ ingredient.strType }}
                    </v-chip>
                </div>
                <!-- <p>{{ ingredient.strDescription }}</p> -->
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
    if (!filteredIngredients) return Ingredients;
    return Ingredients.value.filter(
        (el) =>
            el.strIngredient
                ?.toLowerCase()
                .includes(keyword.value.toLowerCase()) ||
            el.strType?.toLowerCase().includes(keyword.value.toLowerCase())
    );
});
const type = computed(() => {
    return new Set(
        Ingredients.value.map((el) => el.strType).filter((el) => el !== null)
    );
});

const onClickTag = (type) => {
    keyword.value = type;
};

onMounted(async () => {
    const { data } = await axiosClient.get("list.php?i=list");
    Ingredients.value = data.meals;
});
</script>
