<template>
    <div class="bg-gray-100 h-full">
        <Navbar />
        <main>
            <router-view />
        </main>
        <!-- <Foorbar /> -->
    </div>
</template>

<script setup>
import Foorbar from "./Foorbar.vue";
import Navbar from "./Navbar.vue";
</script>
