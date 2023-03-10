<template>
    <div class="p-10">
        <v-list lines="three">
            <v-list-item v-for="cat of categories" :key="cat.idCategory">
                <router-link
                    :to="{
                        name: 'byCategory',
                        params: { category: cat.strCategory },
                    }"
                >
                    <div class="flex gap-10">
                        <div>
                            <v-img
                                :src="cat.strCategoryThumb"
                                :lazy-src="cat.strCategoryThumb"
                                aspect-ratio="1"
                                cover
                                class="bg-grey-lighten-2"
                                width="200"
                            ></v-img>
                        </div>
                        <div class="flex flex-col">
                            <div class="text-2xl mb-5">
                                {{ cat.strCategory }}
                            </div>
                            <div>{{ cat.strCategoryDescription }}</div>
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
</template>

<script setup>
import { onMounted, ref } from "vue";
import axiosClient from "../axiosClient";

const categories = ref([]);
const total = computed(() => {
    return categories.value.length;
});
const page = ref(1);

onMounted(async () => {
    const { data } = await axiosClient("categories.php");
    categories.value = data?.categories;
});
</script>

<style></style>
