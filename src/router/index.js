import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import EventList from '../views/EventList.vue';
import EventShow from '../views/EventShow.vue';
import EventCreate from '../views/EventCreate.vue';
import Login from '@/views/Login.vue';
import AdminPage from '@/views/AdminPage.vue';
import { store } from '../store';
Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		name: 'home',
		component: Home
	},
	{
		path: '/login',
		name: 'Login',
		component: Login
	},
	{
		path: '/about',
		name: 'about',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
	},
	{
		path: '/dashboard',
		name: 'AdminPage',
		component: AdminPage,
		beforeEnter: (to, from, next) => {
			if (store.getters.user) {
				next();
			} else {
				next('/login');
			}
		}
	},
	{
		path: '/contact',
		name: 'contact',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import(/* webpackChunkName: "about" */ '../views/Contact.vue')
	},
	{
		path: '/constractionProjects',
		name: 'constractionProjects',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import(/* webpackChunkName: "about" */ '../views/ConstractionProjects.vue')
	},

	//Routes for project gallery

	{
		path: '/project1',
		name: 'project1',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import(/* webpackChunkName: "about" */ '../views/Projects Gallery/project1.vue')
	},
	{
		path: '/project2',
		name: 'project2',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import(/* webpackChunkName: "about" */ '../views/Projects Gallery/project2.vue')
	},

	{
		path: '/project3',
		name: 'project3',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import(/* webpackChunkName: "about" */ '../views/Projects Gallery/project3.vue')
	},

	{
		path: '/project4',
		name: 'project4',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import(/* webpackChunkName: "about" */ '../views/Projects Gallery/project4.vue')
	},
	{
		path: '/project5',
		name: 'project5',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import(/* webpackChunkName: "about" */ '../views/Projects Gallery/project5.vue')
	},

	{
		path: '/propertie',
		name: 'propertie',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import(/* webpackChunkName: "about" */ '../views/Propertie.vue')
	},
	{
		path: '/nekretnine',
		name: 'event-list',
		component: EventList
	},
	{
		path: '/nekretnina',
		name: 'event-show',
		component: EventShow,
		props: true
	},
	{
		path: '/event/create',
		name: 'event-create',
		component: EventCreate
	}
];

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
});

export default router;
