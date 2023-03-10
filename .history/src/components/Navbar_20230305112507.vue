<template>
    <!-- <header
        class="bg-white shadow h-16 flex justify-between items-stretch pl-5 pr-5"
    ></header> -->
    <v-app-bar :elevation="12" class="bg-white shadow h-16 flex justify-between items-stretch pl-5 pr-5">
        <div class="flex items-center">
            <div class="p-6">
                <v-icon color="info" size="40px">mdi-food-fork-drink</v-icon>
            </div>
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
                <v-icon>mdi-share-variant</v-icon>
            </v-btn>
            <v-btn icon>
                <v-icon>mdi-heart</v-icon>
            </v-btn>
            <v-btn icon>
                <router-link :to="{ name: 'setting' }">
                    <v-icon>mdi-store-cog</v-icon></router-link
                >
            </v-btn>
        </div>
    </v-app-bar>
</template>

<script setup></script>
