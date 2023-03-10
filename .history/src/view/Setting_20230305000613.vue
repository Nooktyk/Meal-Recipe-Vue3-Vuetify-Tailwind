<template>
    <div class="d-flex justify-space-around">
        <v-color-picker
            v-model="color"
            hide-inputs
            show-swatches
            @change="console.log(color)"
        ></v-color-picker>
    </div>
    {{ color }}
</template>

<script setup>
import { computed } from "vue";
import store from "../store";

const color = computed(() => store.state.color);

const onchangeColor = (color) => {
    store.dispatch("setColor", color);
};
</script>
