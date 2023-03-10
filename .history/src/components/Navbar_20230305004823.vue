<template>
    <header
        class="bg-white shadow h-16 flex justify-between items-stretch pl-5 pr-5"
    >
        <div class="flex items-center">
            <div class="p-6">
                <v-icon color="info" size="40px">mdi-food-fork-drink</v-icon>
            </div>
            <v-tabs color="info" v-model="tab">
                <v-tab value="/">
                    <router-link
                        :to="{ name: 'home' }"
                        class="inline-flex items-center h-full px-5"
                    >
                        Home
                    </router-link>
                </v-tab>
                <v-tab value="/By-name">
                    <router-link
                        :to="{ name: 'byName' }"
                        class="inline-flex items-center px-2 h-full transition-colors hover:bg-purple-100"
                        >Meals By Name</router-link
                    >
                </v-tab>
                <v-tab value="/By-Letter">
                    <router-link
                        :to="{ name: 'byLetter' }"
                        class="inline-flex items-center px-2 h-full transition-colors hover:bg-purple-100"
                        >Meals By Letter</router-link
                    >
                </v-tab>
                <v-tab value="/By-Ingredient">
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
                <router-link :to="{ name: 'setting' }">
                    <v-icon>mdi-store-cog</v-icon></router-link
                >
            </v-btn>
        </div>
    </header>
</template>

<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";

const { path } = useRoute();

const tab = computed(() => path);
</script>
