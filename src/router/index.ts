import {createRouter, createWebHistory} from 'vue-router';
import {getRouterRoutes} from '@/router/routes';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    scrollBehavior: (to, from, savedPosition) => {
        if (savedPosition) {
            return {...savedPosition, behavior: 'smooth'};
        }

        if (to.hash) {
            return {el: to.hash, behavior: 'smooth'};
        }

        return {top: 0, behavior: 'smooth'};
    },
    routes: getRouterRoutes(),
});

export default router;
