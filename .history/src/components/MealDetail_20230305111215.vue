<template>
    <v-card>
        <v-img
            :src="meal.strMealThumb"
            :alt="meal.strMeal"
            height="250px"
            cover
        />
        <v-card-title class="text-center">
            {{ meal.strMeal }}
        </v-card-title>
        <v-card-actions>
            <v-btn color="red">
                <a :href="meal.strYoutube" target="_blank">Youtube</a>
            </v-btn>
            <v-spacer></v-spacer>
            <v-btn
                :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'"
                @click="show = !show"
            ></v-btn>
        </v-card-actions>
        <v-expand-transition>
            <div v-show="true">
                <v-card-text>
                    I'm a thing. But, like most politicians, he promised more
                    than he could deliver. You won't have time for sleeping,
                    soldier, not with all the bed making you'll be doing.
                </v-card-text>
            </div>
        </v-expand-transition>
    </v-card>
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
