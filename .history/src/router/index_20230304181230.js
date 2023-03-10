import { createRouter, createWebHistory } from "vue-router";
import Home from "../view/Home.vue";
import MealLst from "../view/MealList.vue";

const routes = [
    {
        path: "/",
        name: "home",
        component: Home,
    },
    {
        path: "/letter/:letter",
        name: "byLetter",
        component: MealList,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;