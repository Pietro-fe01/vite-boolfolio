import { createRouter, createWebHistory } from "vue-router";

// Projects
import HomePage from './pages/HomePage.vue';
import AboutUs from './pages/AboutUs.vue';
import ContactUs from './pages/ContactUs.vue';
import Error404 from './pages/Error404.vue';
import SingleProject from './pages/SingleProject.vue';

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
        },
        {
            path: '/project/:slug',
            name: 'single-project',
            component: SingleProject
        },
        // Any route not matched will be redirect to 404
        { 
            path: '/:pathMatch(.*)*',
            name: 'page-not-found',
            component: Error404
        }
    ]
});

export {  router };