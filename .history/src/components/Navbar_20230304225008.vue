<template>
    <header class="bg-white shadow h-16 flex justify-between items-stretch">
        <div class="flex items-center">
            <router-link
                :to="{ name: 'home' }"
                class="inline-flex items-center h-full px-5"
            >
                <v-btn prepend-icon="mdi-home" color="info">Home </v-btn>
            </router-link>
            <v-icon>mdi-magnify</v-icon>
            <v-tabs>
                <v-tab>
                    <router-link
                        :to="{ name: 'byName' }"
                        class="inline-flex items-center px-2 h-full transition-colors hover:bg-purple-100"
                        >Meals By Name</router-link
                    >
                </v-tab>
                <v-tab>
                    <router-link
                        :to="{ name: 'byLetter' }"
                        class="inline-flex items-center px-2 h-full transition-colors hover:bg-purple-100"
                        >Meals By Letter</router-link
                    >
                </v-tab>
                <v-tab>
                    <router-link
                        :to="{ name: 'byIngredient' }"
                        class="inline-flex items-center px-2 h-full transition-colors hover:bg-purple-100"
                        >Meals By Ingredients</router-link
                    >
                </v-tab>
            </v-tabs>
        </div>
        <div class="flex items-center gap-1">
            <v-btn icon>
                <v-icon>mdi-heart</v-icon>
            </v-btn>

            <v-btn icon>
                <v-icon>mdi-dots-vertical</v-icon>
            </v-btn>
        </div>
    </header>
</template>

<script setup></script>
