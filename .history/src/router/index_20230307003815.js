import { createRouter, createWebHistory } from "vue-router";
import DefaultLayout from "../components/DefaultLayout.vue";
import GuestLayout from "../components/GuestLayout.vue";
import Home from "../view/Home.vue";
import MealsByName from "../view/MealsByName.vue";
import MealsByLetter from "../view/MealsByLetter.vue";
import Ingredients from "../view/Ingredients.vue";
import Categories from "../view/Categories.vue";
import MealsByIngredient from "../view/MealsByIngredient.vue";
import MealsByCategory from "../view/MealsByCategory.vue";
import MealDetails from "../view/MealDetails.vue";
import FormRegister from "../view/FormRegister.vue";

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
                path: "/categories",
                name: "categories",
                component: Categories,
            },
            {
                path: "/By-ingredient/:ingredient?",
                name: "byIngredient",
                component: MealsByIngredient,
            },
            {
                path: "/By-category/:category?",
                name: "byCategory",
                component: MealsByCategory,
            },
            {
                path: "/formregister",
                name: "formregister",
                component: FormRegister,
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
