<template>
    <div class="d-flex justify-space-around">
        <v-color-picker
            v-model="color"
            hide-inputs
            show-swatches
        ></v-color-picker>
        <v-btn :color="color" @click="onchangeColor">Change</v-btn>
    </div>
    {{ color }}
</template>

<script setup>
import { computed, onMounted, ref } from "vue";
import store from "../store";

const color = ref("");

onMounted(async () => {
    color.value = await store.dispatch("getColor");
});
</script>
