import { createWebHistory, createRouter } from "vue-router";
import store from "@/store";

// import Admin from "@/views/Admin.vue";
import Home from "@/views/Home.vue";
// import Logout from "@/views/Logout.vue";
import NotFound from "@/views/NotFound.vue";

// const authGuard = (to, from, next) => {
//   if (store.getters.isAuthenticated) next()
//   else next('/login')
// };

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/login",
    name: "Login",
    beforeEnter:  (to, from, next) => next("/")
  },
  // {
  //   path: "/logout",
  //   name: "Logout",
  //   component: Logout,
  //   beforeEnter:  (to, from, next) => next("/")
  // },
  // {
  //   path: "/admin",
  //   name: "Admin",
  //   component: Admin,
  //   beforeEnter: authGuard
  // },
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
