import type {Vue} from 'vue-class-component';
import HomeView from '@/views/HomeView.vue';
import TestView from '@/views/TestView.vue';
import NotFoundView from '@/views/NotFoundView.vue';
import TutorialView from '@/views/TutorialView.vue';
import InputTypesView from '@/views/InputTypesView.vue';
import ArgumentsView from '@/views/ArgumentsView.vue';
import TroubleShootingView from '@/views/TroubleShootingView.vue';
import ExampleVaultView from '@/views/ExampleVaultView.vue';
import TemplateView from '@/views/TemplateView.vue';

export interface Route {
	path: string,
	name: string,
	component: typeof Vue,
	showInSidebar: boolean,
}

export const routes: Route[] = [
	{
		path: '/',
		name: 'Home',
		component: HomeView,
		showInSidebar: true,
	},
	{
		path: '/tutorial',
		name: 'Tutorial',
		component: TutorialView,
		showInSidebar: true,
	},
	{
		path: '/inputTypes',
		name: 'Input Field Types',
		component: InputTypesView,
		showInSidebar: true,
	},
	{
		path: '/arguments',
		name: 'Input Field Arguments',
		component: ArgumentsView,
		showInSidebar: true,
	},
	{
		path: '/templates',
		name: 'Templates',
		component: TemplateView,
		showInSidebar: true,
	},
	{
		path: '/troubleShooting',
		name: 'Trouble Shooting',
		component: TroubleShootingView,
		showInSidebar: true,
	},
	{
		path: '/exampleVault',
		name: 'Example Vault',
		component: ExampleVaultView,
		showInSidebar: true,
	},
	{
		path: '/test',
		name: 'Test',
		component: TestView,
		showInSidebar: false,
	},
	{
		path: '/:catchAll(.*)',
		name: '',
		component: NotFoundView,
		showInSidebar: false,
	},
]

export function getRouterRoutes() {
	return routes.map(x => {
		return { path: x.path, name: x.name, component: x.component };
	});
}

export function getSidebarRoutes() {
	return routes.filter(x => x.showInSidebar).map(x => {
		return { path: x.path, name: x.name, component: x.component, active: false };
	});
}