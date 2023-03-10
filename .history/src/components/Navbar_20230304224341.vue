<template>
    <header class="bg-white shadow h-16 flex justify-between items-stretch">
        <div>
            <router-link
                :to="{ name: 'home' }"
                class="inline-flex items-center h-full px-5"
            >
                <v-btn prepend-icon="mdi-home" color="info">Home </v-btn>
            </router-link>
            <v-tabs v-model="tab" align-tabs="title">
                <v-tab>
                    <router-link
                        :to="{ name: 'byName' }"
                        class="inline-flex items-center px-2 h-full transition-colors hover:bg-purple-100"
                        >Search Meals</router-link
                    >
                </v-tab>
            </v-tabs>
        </div>
        <div class="flex items-center gap-1">
            <!-- <router-link
                :to="{ name: 'byName' }"
                class="inline-flex items-center px-2 h-full transition-colors hover:bg-purple-100"
                >Search Meals</router-link
            >
            <router-link
                :to="{ name: 'byLetter' }"
                class="inline-flex items-center px-2 h-full transition-colors hover:bg-purple-100"
                >Meals By Letter</router-link
            >
            <router-link
                :to="{ name: 'byIngredient' }"
                class="inline-flex items-center px-2 h-full transition-colors hover:bg-purple-100"
                >Meals By Ingredients</router-link
            > -->
            <v-btn icon>
                <v-icon>mdi-magnify</v-icon>
            </v-btn>

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
