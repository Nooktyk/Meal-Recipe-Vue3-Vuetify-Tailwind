<template>
    <Header title="Categories" icon="mdi-cat" />

    <div>
        <v-chip-group filter>
            <v-chip>A - Z</v-chip>

            <v-chip>Z - A</v-chip>
        </v-chip-group>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-5 py-4">
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
            <div class="flex flex-col gap-3">
                <div class="text-2xl">
                    {{ cat.strCategory }}
                </div>
                <v-divider
                    :thickness="2"
                    class="border-opacity-100"
                ></v-divider>
                <div>
                    {{ cat.strCategoryDescription?.slice(0, 300)
                    }}{{
                        cat.strCategoryDescription?.length > 300 ? "....." : ""
                    }}
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import axiosClient from "../axiosClient";
import Header from "../components/Header.vue";

const categories = ref([]);

onMounted(async () => {
    const { data } = await axiosClient("categories.php");
    categories.value = data?.categories.sort((a, b) =>
        a.strCategory.localeCompare(b.strCategory)
    );
});
</script>

<style></style>
