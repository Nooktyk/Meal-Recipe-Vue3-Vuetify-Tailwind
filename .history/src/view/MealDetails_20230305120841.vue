<template>
    <div>
    </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import axiosClient from "../axiosClient";

const route = useRoute();
const meal = ref({});

onMounted(() => {
    if (route.params.id) {
        axiosClient.get(`lookup.php?i=${route.params.id}`).then(({ data }) => {
            meal.value = data;
        });
    }
});
</script>
