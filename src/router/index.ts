import {createRouter, createWebHistory} from 'vue-router';
import HomeView from '../views/HomeView.vue';
import TestView from '@/views/TestView.vue';
import NotFoundView from '@/views/NotFoundView.vue';
import TutorialView from '@/views/TutorialView.vue';
import ExampleVaultView from '@/views/ExampleVaultView.vue';
import TroubleShootingView from '@/views/TroubleShootingView.vue';
import InputTypesView from '@/views/InputTypesView.vue';
import ArgumentsView from '@/views/ArgumentsView.vue';

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
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView,
        },
        {
            path: '/tutorial',
            name: 'tutorial',
            component: TutorialView,
        },
        {
            path: '/inputTypes',
            name: 'inputTypes',
            component: InputTypesView,
        },
        {
            path: '/arguments',
            name: 'arguments',
            component: ArgumentsView,
        },
        {
            path: '/troubleShooting',
            name: 'troubleShooting',
            component: TroubleShootingView,
        },
        {
            path: '/exampleVault',
            name: 'exampleVault',
            component: ExampleVaultView,
        },
        {
            path: '/test',
            name: 'test',
            component: TestView,
        },
        {
            path: '/:catchAll(.*)',
            component: NotFoundView,
        },
    ],
});

export default router;
