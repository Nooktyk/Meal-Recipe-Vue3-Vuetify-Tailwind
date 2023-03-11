<template>
    <router-link :to="{ name: 'mealDetails', params: { id: meal.idMeal } }">
        <v-card>
            <v-img
                :src="meal.strMealThumb"
                :alt="meal.strMeal"
                height="250px"
                cover
            />
            <v-card-title>
                <span class="mdi mdi-pasta"></span>
                {{ meal.strMeal }}
            </v-card-title>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue-grey"> See More </v-btn>
            </v-card-actions>
        </v-card>
    </router-link>
</template>

<script setup>
const props = defineProps({
    meal: {},
});
</script>
