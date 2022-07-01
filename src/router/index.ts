import {createRouter, createWebHistory} from 'vue-router';
import HomeView from '../views/HomeView.vue';
import AboutView from '@/views/AboutView.vue';
import TestView from '@/views/TestView.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    scrollBehavior: (to, from, savedPosition) => {
        if (savedPosition) {
            return  { ...savedPosition, behavior: 'smooth' };
        }

        if (to.hash) {
            return { el: to.hash, behavior: 'smooth' }
        }

        return { top: 0, behavior: 'smooth' }
    },
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView,
        },
        {
            path: '/about',
            name: 'about',
            component: AboutView,
        },
        {
            path: '/test',
            name: 'test',
            component: TestView,
        },
    ],
});

export default router;
