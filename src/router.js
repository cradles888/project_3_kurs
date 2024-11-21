import { createRouter, createWebHistory } from 'vue-router';
import Sandbox from './components/Pages/Sandbox/Sandbox.vue';
import Home from './components/Pages/Home/Home.vue';

const routes = [
    { path: '/Sandbox', component: Sandbox },
    { path: '/Home', component: Home },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
