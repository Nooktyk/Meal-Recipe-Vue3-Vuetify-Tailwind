<template>
    <Header title="Ingredients" icon="mdi-palette-swatch" />

    <div class="flex gap-2 flex-wrap py-5">
        <div v-for="item of typeList" @click="onClickTag(item)">
            <v-chip
                :color="
                    keyword.toLowerCase() === item.toLowerCase()
                        ? 'primary'
                        : 'black'
                "
            >
                {{ item }}
            </v-chip>
        </div>
    </div>

    <v-container>
        <v-text-field v-model="keyword" label="Search for Ingredients" />
        <div v-if="filteredIngredients.total">
            <v-chip color="primary">
                <v-icon start icon="mdi-database-search"></v-icon>
                Total {{ filteredIngredients.total }} items
            </v-chip>
        </div>
    </v-container>

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
                            <v-chip v-if="ingredient.strType" color="primary">
                                <v-icon
                                    start
                                    icon="mdi-human-baby-changing-table"
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

    <div
        class="flex justify-center"
        v-if="filteredIngredients.data.length === 0 && !keyword"
    >
        <v-progress-circular
            size="70"
            width="7"
            color="info"
            indeterminate
        ></v-progress-circular>
    </div>
</template>

<script setup>
import { computed, onMounted, ref } from "vue";
import axiosClient from "../axiosClient";
import Header from "../components/Header.vue";

const keyword = ref("");
const page = ref(1);
const Ingredients = ref([]);

const typeList = computed(() => {
    return new Set(
        Ingredients.value.map((el) => el.strType).filter((el) => el !== null)
    );
});

const filteredIngredients = computed(() => {
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
