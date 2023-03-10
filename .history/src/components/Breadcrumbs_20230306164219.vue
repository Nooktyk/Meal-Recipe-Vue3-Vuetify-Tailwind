<template>
    <div class="pl-5">
        <v-breadcrumbs :items="items">
            <template v-slot:title="{ item }">
                {{ item.title.toUpperCase() }}
            </template>
        </v-breadcrumbs>
    </div>
</template>

<script setup>
const props = defineProps({
    breadcrumb: {},
});
</script>

<script>
export default {
    data: () => ({
        items: [
            {
                title: "Home",
                disabled: false,
                href: "/",
            },
            // {
            //     title: breadcrumb.title,
            //     disabled: false,
            //     href: breadcrumb.link,
            // },
        ],
    }),
};
</script>
