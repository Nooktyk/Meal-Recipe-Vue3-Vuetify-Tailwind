<template>
    <div class="pl-5">
        <v-breadcrumbs>
            <router-link to="/">
                <v-breadcrumbs-item title="home" divider="/">
                </v-breadcrumbs-item>
            </router-link>

            <router-link :to="breadcrumb.link">
                <v-breadcrumbs-item :title="breadcrumb.title">
                </v-breadcrumbs-item>
            </router-link>
        </v-breadcrumbs>
    </div>
</template>

<script setup>
const props = defineProps({
    breadcrumb: {},
});
</script>
