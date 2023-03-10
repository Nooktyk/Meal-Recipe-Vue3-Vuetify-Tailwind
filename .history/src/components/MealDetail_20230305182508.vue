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
                {{ meal.strMeal }}
            </v-card-title>
            <v-card-actions>
                <v-btn color="red">
                    <a :href="meal.strYoutube" target="_blank">
                        <v-btn icon="mdi-youtube"></v-btn
                    ></a>
                </v-btn>
                <v-spacer></v-spacer>
                <v-btn icon="mdi-book-information-variant" color="info"></v-btn>
            </v-card-actions>
        </v-card>
    </router-link>
</template>

<script setup>
const props = defineProps({
    meal: {},
});
</script>

<script>
export default {
    data: () => ({
        show: false,
    }),
};
</script>
