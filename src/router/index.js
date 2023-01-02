import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import ByName from "@/views/ByName.vue";
import ByLetter from "@/views/ByLetter.vue";
import ByIngredient from "@/views/ByIngredient.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: HomeView,
        },
        {
            path: "/name/:name?",
            name: "by-name",
            component: ByName,
        },
        {
            path: "/letter/:letter?",
            name: "by-letter",
            component: ByLetter,
        },
        {
            path: "/ingredient/:ingredient?",
            name: "by-ingredient",
            component: ByIngredient,
        },
    ],
});

export default router;
