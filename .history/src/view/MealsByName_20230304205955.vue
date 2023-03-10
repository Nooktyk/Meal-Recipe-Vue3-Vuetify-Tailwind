<template>
    <div class="p-8">
        <input
            type="text"
            class="rounded border-2 border-gray-200 w-full"
            placeholder="Search for Meals"
            v-model="keyword"
            @change="searchMeals"
        />
    </div>
    <div>
        <pre>{{ meals }}</pre>
    </div>
</template>

<script setup>
import { computed, ref } from "vue";
import store from "../store";

const keyword = ref("");
const meals = computed(() => store.state.searchedMeals);

function searchMeals() {
    store.dispatch("searchMeals", keyword.value);
}
</script>
