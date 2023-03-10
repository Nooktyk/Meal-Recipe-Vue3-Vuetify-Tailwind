<template>
    <div class="text-4xl font-bold">
        <v-icon color="primary" start :icon="icon"></v-icon>
        {{ title }}
    </div>
    <div class="py-5">
        <v-divider
            :thickness="5"
            class="border-opacity-100"
            color="info"
        ></v-divider>
    </div>
</template>

<script setup>
const props = defineProps({
    title: "",
    icon: "",
});
</script>
