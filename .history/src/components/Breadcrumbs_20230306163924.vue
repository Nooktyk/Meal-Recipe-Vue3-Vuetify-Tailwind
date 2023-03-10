<template>
    <div class="pl-5">
        <v-breadcrumbs>
            <v-breadcrumbs-item title="home"> </v-breadcrumbs-item>

            <v-breadcrumbs-item :title="breadcrumb.title"> </v-breadcrumbs-item>
        </v-breadcrumbs>
    </div>
</template>

<script setup>
const props = defineProps({
    breadcrumb: {},
});
</script>
