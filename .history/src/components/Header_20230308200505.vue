<template>
    <div class="text-4xl font-bold" style="color: #ffffff">
        <v-icon start :icon="icon"></v-icon>
        {{ title }}
    </div>
    <div class="py-5">
        <v-divider
            :thickness="3"
            class="border-opacity-100"
            color="info"
        ></v-divider>
    </div>
</template>

<script setup>
import { computed } from "vue";
import store from "../store";

const color = computed(() => store.state.color);

const props = defineProps({
    title: "",
    icon: "",
});
</script>
