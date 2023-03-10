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
                    <router-link :to="{ name: 'home' }"> Home </router-link>
                </v-tab>
                <v-tab value="byName">
                    <router-link :to="{ name: 'byName' }"
                        >Meals By Name</router-link
                    >
                </v-tab>
                <v-tab value="byLetter">
                    <router-link :to="{ name: 'byLetter' }"
                        >Meals By Letter</router-link
                    >
                </v-tab>
                <v-tab value="ingredients">
                    <router-link :to="{ name: 'ingredients' }"
                        >Meals By Ingredients</router-link
                    >
                </v-tab>
            </v-tabs>

            <v-spacer></v-spacer>

            <v-alert
                color="#2A3B4D"
                theme="dark"
                icon="mdi-firework"
                density="compact"
                border
            >
                New Version Release!, explore
                <span class="mdi mdi-webpack"></span>
            </v-alert>

            <v-btn icon>
                <v-icon>mdi-share-variant</v-icon>
            </v-btn>

            <v-btn icon>
                <v-badge dot color="info">
                    <v-icon>mdi-heart</v-icon>
                </v-badge>
            </v-btn>

            <v-btn icon>
                <v-badge content="2" color="error">
                    <v-icon>mdi-bell</v-icon>
                </v-badge>
            </v-btn>

            <v-avatar>
                <v-img
                    src="https://cdn.vuetifyjs.com/images/john.jpg"
                    alt="John"
                ></v-img>
            </v-avatar>

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
            ></v-color-picker>
            <v-card-actions>
                <v-btn color="info" block @click="dialog = false">Close</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script setup>
import { onMounted, ref, watch } from "vue";
import store from "../store";
import { useRoute } from "vue-router";

const dialog = ref(false);
const color = ref("");

const route = useRoute();
const tab = ref("home");

watch(route, () => {
    tab.value = route.name;
});

onMounted(async () => {
    tab.value = route.name;
    color.value = await store.dispatch("getColor");
});

const onchangeColor = () => {
    store.dispatch("setNewColor", color.value);
};
</script>
