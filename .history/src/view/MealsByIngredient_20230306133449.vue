<template>
    <div class="p-8">
        <pre>{{ meals }}</pre>
    </div>
</template>

<script setup>
import { computed, onMounted } from "vue";
import { useRoute } from "vue-router";
import store from "../store";

const route = useRoute();
const meals = computed(() => store.state.mealsByIngredient);

onMounted(async () => {
    store.dispatch("searchMealsByIngredient", route.params.ingredient);
});
</script>
