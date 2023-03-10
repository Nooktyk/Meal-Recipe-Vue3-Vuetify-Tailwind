<template>
    <div class="pl-5">
        <v-breadcrumbs :items="[{ title: 'home', link: '/' }].push(breadcrumb)">
            <template v-slot:title="{ item }">
                <RouterLink :to="item.link">
                    {{ item.title.toUpperCase() }}
                </RouterLink>
            </template>
        </v-breadcrumbs>
    </div>
</template>

<script setup>
const props = defineProps({
    breadcrumb: {},
});
</script>
