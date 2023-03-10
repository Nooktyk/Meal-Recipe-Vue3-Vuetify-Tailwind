<template>
    <div class="flex flex-col p-8 justify-center">
        <input
            type="text"
            class="rounded border-2 border-gray-200 w-full"
            placeholder="Search for Meals"
        />
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
import { onMounted } from "vue";
import axiosClient from "../axiosClient.js";

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

onMounted(async () => {
    const res = await axiosClient.get("/list.php?i=list");
    console.log(res.data);
});
</script>

<style></style>
