<template>
    <div class="pl-5">
        <v-breadcrumbs :items="['Foo', 'Bar', 'Fizz']"> </v-breadcrumbs>
    </div>
</template>

<script setup>
const props = defineProps({
    breadcrumb: {},
});
</script>
