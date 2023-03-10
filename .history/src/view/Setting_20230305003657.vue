<template>
    <div class="flex justify-center pt-5">
        <v-btn> {{ color }}</v-btn>
        <v-color-picker
            v-model="color"
            hide-inputs
            show-swatches
            hide-sliders
            hide-canvas
            @click="onchangeColor"
            width="100%"
        ></v-color-picker>
    </div>
</template>

<script setup>
import { computed, onMounted, ref } from "vue";
import store from "../store";

const color = ref("");

onMounted(async () => {
    color.value = await store.dispatch("getColor");
});

const onchangeColor = () => {
    store.dispatch("setNewColor", color.value);
};
</script>
