<template>
    <v-card color="grey-lighten-3" class="px-5 py-3">
        <v-toolbar density="compact">
            <v-app-bar-nav-icon
                ><v-icon color="primary" size="40px">mdi-noodles</v-icon>
            </v-app-bar-nav-icon>

            <v-tabs color="primary" v-model="tab">
                <v-tab value="home">
                    <router-link :to="{ name: 'home' }"> Home </router-link>
                </v-tab>
                <v-tab value="byName">
                    <router-link :to="{ name: 'byName' }">Search</router-link>
                </v-tab>
                <v-tab value="byLetter">
                    <router-link :to="{ name: 'byLetter' }">Letter</router-link>
                </v-tab>
                <v-tab value="ingredients">
                    <router-link :to="{ name: 'ingredients' }"
                        >Ingredients</router-link
                    >
                </v-tab>
                <v-tab value="categories">
                    <router-link :to="{ name: 'categories' }"
                        >Categories</router-link
                    >
                </v-tab>
            </v-tabs>

            <v-spacer></v-spacer>

            <router-link :to="{ name: 'formregister' }">
                <v-alert
                    color="primary"
                    icon="mdi-firework"
                    density="compact"
                    border
                    class="rounded-lg"
                >
                    Register Now!
                </v-alert>
            </router-link>

            <v-btn icon>
                <v-icon>mdi-share-variant</v-icon>
            </v-btn>

            <v-btn icon>
                <v-badge content="2" color="primary">
                    <v-icon>mdi-bell</v-icon>
                </v-badge>
            </v-btn>

            <v-btn rounded="pill" color="primary" variant="tonal" class="mx-3">
                Meals Around The World
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

    <v-dialog v-model="dialog" width="auto" transition="dialog-top-transition">
        <v-card>
            <v-card-title>
                ss
            </v-card-title>
            <v-color-picker
                v-model="color"
                hide-inputs
                show-swatches
                hide-sliders
                hide-canvas
                @click="onchangeColor"
            ></v-color-picker>
            <v-card-actions>
                <v-btn color="primary" block @click="dialog = false"
                    >Close</v-btn
                >
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script setup>
import { onMounted, ref, watch } from "vue";
import { useRoute } from "vue-router";
import store from "../store";

const route = useRoute();

const dialog = ref(false);
const color = ref("");
const tab = ref("home");

const onchangeColor = () => {
    store.dispatch("setNewColor", color.value);
};

watch(route, () => {
    tab.value = route.name;
});

onMounted(async () => {
    tab.value = route.name;
    color.value = await store.dispatch("getColor");
});
</script>
