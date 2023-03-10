<template>
    <pre>{{ Ingredients }}</pre>
</template>

<script setup>
import { onMounted, ref } from 'vue';

const Ingredients = ref([])


onMounted(async() => {
    const { data } = await axiosClient.get('list.php?i=list')
    Ingredients.value = data.meals
})
</script>