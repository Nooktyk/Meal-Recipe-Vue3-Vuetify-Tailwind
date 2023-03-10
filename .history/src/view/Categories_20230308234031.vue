<template>
    <Header title="Categories" icon="mdi-cat" />

    <div class="flex justify-end gap-2 items-center">
        <v-icon icon="mdi mdi-sort"></v-icon>
        <v-chip-group filter v-model="sort" color="primary">
            <v-chip value="a-z">A - Z</v-chip>
            <v-chip value="z-a">Z - A</v-chip>
        </v-chip-group>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-5 py-4">
        <div
            v-for="cat of categories"
            :key="cat.idCategory"
            class="w-[700px] flex gap-8"
        >
            <div>
                <v-img
                    :src="cat.strCategoryThumb"
                    :lazy-src="cat.strCategoryThumb"
                    aspect-ratio="1"
                    cover
                    class="bg-grey-lighten-2 rounded-lg"
                    width="200"
                ></v-img>
            </div>
            <div class="flex flex-col gap-3">
                <div class="text-2xl hover:text-gray-500 text-3xl">
                    <router-link
                        :to="{
                            name: 'byCategory',
                            params: { category: cat.strCategory },
                        }"
                    >
                        {{ cat.strCategory }}
                    </router-link>
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
import { onMounted, ref, watch } from "vue";
import axiosClient from "../axiosClient";
import Header from "../components/Header.vue";

const categories = ref([]);
const sort = ref("a-z");

watch(sort, () => {
    if (sort.value === "a-z") {
        categories.value.sort((a, b) =>
            a.strCategory.localeCompare(b.strCategory)
        );
    } else {
        categories.value.sort((a, b) =>
            b.strCategory.localeCompare(a.strCategory)
        );
    }
});

onMounted(async () => {
    const { data } = await axiosClient("categories.php");
    categories.value = data?.categories.sort((a, b) =>
        a.strCategory.localeCompare(b.strCategory)
    );
});
</script>

<style></style>
