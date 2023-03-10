<template>
    <header
        class="bg-white shadow h-16 flex justify-between items-stretch pl-5 pr-5"
    >
        <div class="flex items-center">
            <v-icon>mdi-home</v-icon>
            <v-tabs color="info">
                <v-tab>
                    <router-link
                        :to="{ name: 'home' }"
                        class="inline-flex items-center h-full px-5"
                    >
                        Home
                    </router-link>
                </v-tab>
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
        <div class="flex items-center gap-3">
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
