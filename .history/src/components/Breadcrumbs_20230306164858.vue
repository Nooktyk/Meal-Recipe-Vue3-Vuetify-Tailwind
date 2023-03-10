<template>
    <div class="pl-5">
        <v-breadcrumbs :items="[{ title: 'HOME', href: '/' }]"> </v-breadcrumbs>
    </div>
</template>

<script setup>
const props = defineProps({
    breadcrumb: {},
});
</script>
