import { createRouter, createWebHistory } from "vue-router";

// Projects
import HomePage from './pages/HomePage.vue';
import AboutUs from './pages/AboutUs.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'homepage',
            component: HomePage
        },
        {
            path: '/about-us',
            name: 'about-us',
            component: AboutUs
        }
    ]
});

export {  router };