import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home
	},
	{
		path: '/simpleform',
		name: 'SimpleForm',
		component: () =>
			import('../components/SimpleForm.vue')
	},
	{
		path: '/modalform',
		name: 'ModalForm',
		component: () =>
			import('../components/ModalForm.vue')
	},
	{
		path: '/customform',
		name: 'CustomForm',
		component: () =>
			import('../components/CustomForm.vue')
	}
]

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes
})

export default router