import { createRouter, createWebHistory } from "vue-router";

// Projects
import HomePage from './pages/HomePage.vue';
import AboutUs from './pages/AboutUs.vue';
import ContactUs from './pages/ContactUs.vue';

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
        },
        {
            path: '/contact-us',
            name: 'contact-us',
            component: ContactUs
        }
    ]
});

export {  router };