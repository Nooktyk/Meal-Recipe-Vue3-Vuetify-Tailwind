<template>
    <Navbar />
    <div class="px-8 py-6">
        <router-view />
    </div>
</template>

<script setup>
import Navbar from "./Navbar.vue";
</script>
