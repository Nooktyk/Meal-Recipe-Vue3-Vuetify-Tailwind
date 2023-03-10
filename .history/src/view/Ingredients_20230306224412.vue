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
        <div class="flex gap-2 flex-wrap">
            <div v-for="item of type" @click="onClickTag(item)">
                <v-chip :color="keyword === item ? 'red' : 'black'">
                    {{ item }}
                </v-chip>
            </div>
        </div>
        <v-container>
            <v-text-field v-model="keyword" label="Search for Ingredients" />
            <div>Total {{ filteredIngredients.total }} items</div>
            <!-- <div v-for="ingredient of filteredIngredients">
                <div v-if="ingredient.strType">
                    {{ ingredient.strType }}
                </div>
            </div> -->
        </v-container>
        <div class="px-10 pt-0 pb-10">
            <v-list lines="three">
                <v-list-item
                    v-for="ingredient of filteredIngredients.data"
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
                                <div class="text-2xl mb-2">
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
                                <v-divider
                                    :thickness="2"
                                    class="border-opacity-100"
                                ></v-divider>
                                <div class="mt-2">
                                    {{ ingredient.strDescription }}
                                </div>
                            </div>
                        </div>
                    </router-link>
                </v-list-item>
            </v-list>
            <div v-if="filteredIngredients.total" class="py-5">
                <v-pagination
                    v-model="page"
                    :length="Math.ceil(filteredIngredients.total / 8)"
                    rounded="circle"
                ></v-pagination>
            </div>
        </div>
        <div
            class="flex justify-center"
            v-if="filteredIngredients.data.length === 0 && !keyword"
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

const page = ref(1);
const keyword = ref("");
const Ingredients = ref([]);
const filteredIngredients = computed(() => {
    if (!filteredIngredients)
        return {
            data: Ingredients.value.slice((page.value - 1) * 8, page.value * 8),
            total: Ingredients.value.slice(page.value - 1).length,
        };

    return {
        data: Ingredients.value
            .filter(
                (el) =>
                    el.strIngredient
                        ?.toLowerCase()
                        .includes(keyword.value.toLowerCase()) ||
                    el.strType
                        ?.toLowerCase()
                        .includes(keyword.value.toLowerCase())
            )
            .slice((page.value - 1) * 8, page.value * 8),
        total: Ingredients.value.filter(
            (el) =>
                el.strIngredient
                    ?.toLowerCase()
                    .includes(keyword.value.toLowerCase()) ||
                el.strType?.toLowerCase().includes(keyword.value.toLowerCase())
        ).length,
    };
});

const total = computed(() => {
    return Ingredients.value.length;
});

const type = computed(() => {
    return new Set(
        Ingredients.value.map((el) => el.strType).filter((el) => el !== null)
    );
});

const onClickTag = (type) => {
    keyword.value = type;
    page.value = 1;
};

onMounted(async () => {
    const { data } = await axiosClient.get("list.php?i=list");
    Ingredients.value = data.meals.reverse();
});
</script>

<style></style>
