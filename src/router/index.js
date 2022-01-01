import { createWebHistory, createRouter } from "vue-router";
import store from "@/store";

import Home from "@/views/Home.vue";
// import Guests from '@/views/Guests.vue';
import NotFound from "@/views/NotFound.vue";

const authGuard = (to, from, next) => {
  if (store.getters.isAuthenticated) next();
  else next("/")
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
  scrollBehavior: to => {
    if (to.hash) return { el: to.hash }
    return { x: 0, y: 0 }
  },
});

// Clear the error on every navigation
router.afterEach(() => {
  store.commit("clearError");
});

export default router;
