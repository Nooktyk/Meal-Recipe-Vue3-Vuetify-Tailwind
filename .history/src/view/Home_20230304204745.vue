<template>
    <div class="flex flex-col p-8 justify-center">
        <div class="flex justify-center gap-2 mt-2">
            <router-link
                v-for="letter of letters"
                :to="{ name: 'byLetter', params: { letter } }"
                :key="letter"
            >
                {{ letter }}
            </router-link>
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import axiosClient from "../axiosClient.js";

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

const ingredients = ref([]);

onMounted(async () => {
    const res = await axiosClient.get("/list.php?i=list");
    console.log(res.data);
    ingredients.value = res.data;
});
</script>

<style></style>
