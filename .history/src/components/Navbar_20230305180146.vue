<template>
    <v-card color="grey-lighten-4" class="px-5 py-2">
        <v-toolbar density="compact">
            <v-app-bar-nav-icon
                ><v-icon color="info" size="40px"
                    >mdi-food-fork-drink</v-icon
                ></v-app-bar-nav-icon
            >

            <v-tabs color="info" v-model="tab">
                <v-tab value="home">
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
                <v-tab value="byLetter">
                    <router-link
                        :to="{ name: 'byLetter' }"
                        class="inline-flex items-center px-2 h-full transition-colors hover:bg-purple-100"
                        >Meals By Letter</router-link
                    >
                </v-tab>
                <v-tab value="byIngredient">
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

            <v-btn icon @click="dialog = true">
                <v-icon>mdi-store-cog</v-icon>
            </v-btn>
        </v-toolbar>
    </v-card>
    <v-dialog v-model="dialog" width="auto">
        <v-card>
            <v-color-picker
                v-model="color"
                hide-inputs
                show-swatches
                hide-sliders
                hide-canvas
                @click="onchangeColor"
                width="100%"
            ></v-color-picker>
            <v-card-actions>
                <v-btn color="primary" block @click="dialog = false"
                    >Close Dialog</v-btn
                >
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import store from "../store";

const tab = ref(useRoute().name);
const dialog = ref(false);
const color = ref("");

onMounted(async () => {
    color.value = await store.dispatch("getColor");
});

const onchangeColor = () => {
    store.dispatch("setNewColor", color.value);
};
</script>
