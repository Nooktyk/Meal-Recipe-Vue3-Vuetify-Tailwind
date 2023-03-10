<template>
    <div class="d-flex justify-space-around">
        <v-color-picker
            v-model="color"
            hide-inputs
            show-swatches
        ></v-color-picker>
    </div>
    {{ color }}
</template>

<script setup>
import { computed } from "vue";
import store from "../store";

const color = computed(() => store.state.color);
</script>

<script>
export default {
    data() {
        return {
            color: color,
        };
    },
    watch: {
        color(value) {
            this.color = value;
            onchangeColor(value);
        },
    },
    methods: {
        onchangeColor(color) {
            store.dispatch("setColor", color);
        },
    },
};
</script>
