import { createWebHistory, createRouter } from "vue-router";
import HelloWorld from "@/components/HelloWorld.vue";

const routes = [

    {
        path: "/",
        name: "HelloWorld",
        component: () => import("@/components/HelloWorld.vue"),
    },
    {
        path: "/main",
        name: "Main",
        component: () => import("@/views/template/Main.vue"),
    },

];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;