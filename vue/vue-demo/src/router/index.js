import {
	createRouter,
	createWebHashHistory
} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import UserView from '../views/UserView.vue'
import IdView from '../views/IdView.vue'
const routes = [{
		path: '/',
		name: 'Home',
		component: HomeView
	},
	{
		path: '/Login',
		name: 'Login',
		component: LoginView
	},
	{
		path: '/user/:username/:id',
		name: 'User',
		components: {
			user: UserView,
			id: IdView
		}
	}
]
const router = createRouter({
	history: createWebHashHistory(),
	routes
})

router.beforeEach((to, form, next) => {
	const isLoggedIn = localStorage.getItem('flag');
	if (to.name !== 'Login' && !isLoggedIn) {
		next({
			name: 'Login'
		})
	} else {
		next()
	}
})
// '/'绝对路径
// './'相对路径
export default router