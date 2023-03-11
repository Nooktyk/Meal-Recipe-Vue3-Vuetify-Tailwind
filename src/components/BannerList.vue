<template>
    <v-carousel
        cycle
        height="679"
        hide-delimiter-background
        show-arrows="hover"
        progress="primary"
        interval="3000"
    >
        <v-carousel-item
            v-for="(el, idx) of new Array(4)"
            :src="`/images/meal-banner-${idx + 1}.jpg`"
            :key="el"
            cover
        ></v-carousel-item>
    </v-carousel>
</template>
