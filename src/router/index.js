import { createWebHistory, createRouter } from "vue-router";
import store from "@/store";

import Home from "@/views/Home.vue";
// import Guests from '@/views/Guests.vue';
import NotFound from "@/views/NotFound.vue";

const authGuard = (to, from, next) => {
	if (store.getters.isAuthenticated) next();
	else next("/login")
};

const routes = [
	{
		path: "/",
		name: "Home",
		component: Home,
	},
	{
		path: "/guests",
		name: "Guests",
		component: Home,
		beforeEnter: authGuard
	},
	{
		path: "/:catchAll(.*)",
		component: NotFound,
	}
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

// Clear the error on every navigation
router.afterEach(() => {
	store.commit("clearError");
});

export default router;
