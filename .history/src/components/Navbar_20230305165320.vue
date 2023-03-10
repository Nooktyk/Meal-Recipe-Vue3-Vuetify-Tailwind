<template>
    <v-card color="grey-lighten-4" class="px-5 py-2">
        <v-toolbar density="compact">
            <v-app-bar-nav-icon
                ><v-icon color="info" size="40px"
                    >mdi-food-fork-drink</v-icon
                ></v-app-bar-nav-icon
            >

            <v-tabs color="info" v-model="tab">
                <v-tab>
                    <router-link
                        :to="{ name: 'home' }"
                        class="inline-flex items-center h-full px-5"
                    >
                        Home
                    </router-link>
                </v-tab>
                <v-tab value="byName">
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

            <v-spacer></v-spacer>

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
        </v-toolbar>
    </v-card>
</template>

<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router";

console.log(useRoute().name);
</script>

<script>
export default {
    data: () => ({
        tab: useRoute().name,
    }),
};
</script>
