import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home.vue'

Vue.use(Router)

export default new Router({
	routes:[
		{
			path: '/',
			component: Home
		},
		{
			path: '/city',
			component: () => import('@/pages/city/city.vue')
		},
		{
			path: '/detail/:id',
			component: () => import('@/pages/detail/detail.vue')
		}
	]
})
