import { createRouter, createWebHistory } from "vue-router";
import Home from "../view/Home.vue";
import MealsByName from "../view/MealsByName.vue";
import MealsByLetter from "../view/MealsByLetter.vue";
import MealsByIngredient from "../view/MealsByIngredient.vue";

const routes = [
    {
        path: "/",
        name: "home",
        component: Home,
    },
    {
        path: "/By-name/:name",
        name: "byName",
        component: MealsByName,
    },
    {
        path: "/By-letter/:letter",
        name: "byLetter",
        component: MealsByLetter,
    },
    {
        path: "/By-ingredient/:ingredient",
        name: "byIngredient",
        component: MealsByIngredient,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
