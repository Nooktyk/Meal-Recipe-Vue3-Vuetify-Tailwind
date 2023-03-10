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

            <v-expansion-panels variant="popout" class="pa-4">
                <v-expansion-panel hide-actions>
                    <v-expansion-panel-title>
                        <v-row align="center" class="spacer" no-gutters>
                            <v-col cols="4" sm="2" md="1">
                                <v-avatar size="36px">
                                    <v-img
                                        alt="Avatar"
                                        src="https://avatars0.githubusercontent.com/u/9064066?v=4&s=460"
                                    ></v-img>
                                </v-avatar>
                            </v-col>

                            <v-col
                                class="hidden-xs-only text-left ms-2"
                                sm="5"
                                md="3"
                            >
                                <strong>John Leider</strong>
                            </v-col>

                            <v-col
                                class="text-no-wrap text-left"
                                cols="5"
                                sm="3"
                            >
                                <strong>Welcome to Vuetify!</strong>
                            </v-col>

                            <v-col
                                class="text-medium-emphasis text-truncate hidden-sm-and-down"
                            >
                                &mdash; Thank you for joining our community...
                            </v-col>
                        </v-row>
                    </v-expansion-panel-title>

                    <v-expansion-panel-text>
                        <v-card-text v-text="lorem"></v-card-text>
                    </v-expansion-panel-text>
                </v-expansion-panel>
            </v-expansion-panels>
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
