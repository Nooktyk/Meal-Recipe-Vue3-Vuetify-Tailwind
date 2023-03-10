<template>
    <div class="text-2xl font-bold">
        <v-icon color="primary" :icon="icon"></v-icon>
        {{ title }}
    </div>
    <div class="py-5">
        <v-divider :thickness="4" class="border-opacity-100"></v-divider>
    </div>
</template>

<script setup>
const props = defineProps({
    title: "",
    icon: "",
});
</script>
