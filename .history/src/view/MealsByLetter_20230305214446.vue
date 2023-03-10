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
        <div>
            <v-tabs
                class="p-2 bg-blue-900 rounded-lg"
                bg-color="deep-purple-darken-4"
                center-active
            >
                <v-tab v-for="letter of letters" :key="letter">
                    {{ letter }}</v-tab
                >
            </v-tabs>
        </div>
    </div>
</template>

<script setup>
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
</script>
