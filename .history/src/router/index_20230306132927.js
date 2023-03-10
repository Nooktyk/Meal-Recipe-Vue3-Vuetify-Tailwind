import { createRouter, createWebHistory } from "vue-router";
import DefaultLayout from "../components/DefaultLayout.vue";
import GuestLayout from "../components/GuestLayout.vue";
import Home from "../view/Home.vue";
import MealsByName from "../view/MealsByName.vue";
import MealsByLetter from "../view/MealsByLetter.vue";
import Ingredients from "../view/Ingredients.vue";
import MealsByIngredient from "../view/MealsByIngredient.vue";
import Setting from "../view/Setting.vue";
import MealDetails from "../view/MealDetails.vue";

const routes = [
    {
        path: "/",
        component: DefaultLayout,
        children: [
            {
                path: "/",
                name: "home",
                component: Home,
            },
            {
                path: "/By-name/:name?",
                name: "byName",
                component: MealsByName,
            },
            {
                path: "/By-letter/:letter?",
                name: "byLetter",
                component: MealsByLetter,
            },
            {
                path: "/ingredients",
                name: "ingredients",
                component: Ingredients,
            },
            {
                path: "/By-ingredient/:ingredient?",
                name: "byIngredient",
                component: MealsByIngredient,
            },
            {
                path: "/setting",
                name: "setting",
                component: Setting,
            },
            {
                path: "/meal/:id",
                name: "mealDetails",
                component: MealDetails,
            },
        ],
    },
    {
        path: "/guest",
        component: GuestLayout,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
