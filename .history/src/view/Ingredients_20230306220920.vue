<template>
    <!-- <div class="flex gap-2 flex-wrap">
        <div v-for="item of type" @click="onClickTag(item)">
            <v-chip color="info" class="customChip">
                {{ item }}
            </v-chip>
        </div>
    </div> -->
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
        <div class="p-10">
            <v-list lines="three">
                <v-list-item
                    v-for="ingredient of filteredIngredients"
                    :key="ingredient.idIngredient"
                >
                    <router-link
                        :to="{
                            name: 'byIngredient',
                            params: { ingredient: ingredient.strIngredient },
                        }"
                    >
                        <div class="flex gap-10">
                            <div>
                                <v-img
                                    :src="`https://www.themealdb.com/images/ingredients/${ingredient.strIngredient}.png`"
                                    :lazy-src="`https://www.themealdb.com/images/ingredients/${ingredient.strIngredient}.png`"
                                    aspect-ratio="1"
                                    cover
                                    class="bg-grey-lighten-2"
                                    width="200"
                                ></v-img>
                            </div>
                            <div class="flex flex-col">
                                <div class="text-2xl mb-5">
                                    {{ ingredient.strIngredient }}
                                    <v-chip
                                        v-if="ingredient.strType"
                                        color="info"
                                    >
                                        <v-icon
                                            start
                                            icon="mdi-palette-swatch-variant"
                                        ></v-icon>
                                        {{ ingredient.strType }}
                                    </v-chip>
                                </div>
                                <div>{{ ingredient.strDescription }}</div>
                            </div>
                        </div>
                    </router-link>
                </v-list-item>
            </v-list>
            <div v-if="total" class="py-5">
                <v-pagination
                    v-model="page"
                    :length="Math.ceil(total / 8)"
                    rounded="circle"
                ></v-pagination>
            </div>
        </div>
        <div
            class="flex justify-center"
            v-if="filteredIngredients.length === 0 && !keyword"
        >
            <v-progress-circular
                :size="70"
                :width="7"
                color="info"
                indeterminate
            ></v-progress-circular>
        </div>
    </div>
</template>

<script setup>
import { computed, onMounted, ref, watch } from "vue";
import axiosClient from "../axiosClient";

const total = computed(() => {
    return categories.value.length;
});
const page = ref(1);

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

<style>
.customChip {
    cursor: pointer;
}
</style>
