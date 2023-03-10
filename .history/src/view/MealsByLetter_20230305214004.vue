<template>
    <div class="flex flex-col p-8 justify-center">
        <div class="flex justify-center gap-2 mt-2">
            <!-- <router-link
                v-for="letter of letters"
                :to="{ name: 'byLetter', params: { letter } }"
                :key="letter"
            >
            </router-link> -->
        </div>
        <v-tabs color="info" center-active>
            <v-tab v-for="letter of letters" :key="letter"> {{ letter }}</v-tab>
        </v-tabs>
    </div>
</template>

<script setup>
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
</script>
