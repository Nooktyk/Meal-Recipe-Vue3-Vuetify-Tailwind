<template>
    <div class="pl-3"><v-breadcrumbs :items="items"> </v-breadcrumbs></div>
</template>

<script setup></script>

<script>
export default {
    data: () => ({
        items: [
            {
                title: "Dashboard",
                disabled: false,
                href: "breadcrumbs_dashboard",
            },
            {
                title: "Link 1",
                disabled: false,
                href: "breadcrumbs_link_1",
            },
            {
                title: "Link 2",
                disabled: true,
                href: "breadcrumbs_link_2",
            },
        ],
    }),
};
</script>
