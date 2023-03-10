<template>
    <div class="flex flex-col items-center  pt-5">
        <div>
            <v-btn> {{ color }}</v-btn>
        </div>
        <div>
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
