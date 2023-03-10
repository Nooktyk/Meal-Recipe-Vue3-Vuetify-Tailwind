<template>
    <div class="d-flex justify-space-around">
        <v-color-picker
            v-model="color"
            hide-inputs
            show-swatches
        ></v-color-picker>
    </div>
</template>

<script setup>
import store from "../store";

const color = computed(() => store.state.color);
</script>

<script>
export default {
    data() {
        return {
            c1: "#ff00ff",
            c2: "#00ff00",
        };
    },
};
</script>
