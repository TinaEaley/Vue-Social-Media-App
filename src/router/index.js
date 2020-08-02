import Vue from "vue";
import VueRouter from "vue-router";
import Dashboard from "../views/Dashboard.vue";
import { auth } from "../firebase";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Dashboard",
    component: Dashboard,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/login",
    name: "Login",
    // route level code-splitting
    // this generates a separate chunk (login.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/Login.vue"),
  },
  {
    path: "/settings",
    name: "Settings",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "settings" */ "../views/Settings.vue"),
    meta: {
      requiresAuth: true,
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

//check if the route exists and reuqires authentication
router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some((x) => x.meta.requiresAuth);

  //if the route requiresAuth is true and user is not logged in redirect to login
  if (requiresAuth && !auth.currentUser) {
    next("/login");
  } else {
    //else send them to the route the logged in user is trying to visit || to the route if the route doesn't reuqire auth
    next();
  }
});

export default router;
