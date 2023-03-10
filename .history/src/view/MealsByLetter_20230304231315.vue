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
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
</script>
