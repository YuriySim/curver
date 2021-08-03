import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "/",
    meta: { layout: "empty-layout" },
    component: () => import("@/views/Login")
  },

  {
    path: "/login",
    name: "Login",
    meta: { layout: "empty-layout" },
    component: () => import("@/views/Login")
  },

  {
    path: "/home",
    name: "Home",
    meta: { layout: "main-layout" },
    component: () => import("@/views/Home")
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

/*Protecting routes*/
//redirect to login page if not logged in and trying to access a restricted page

router.beforeEach((to, from, next) => {
  const publicPages = ["/", "/login"];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = localStorage.getItem("token");

  if (authRequired && !loggedIn) {
    return next("/login?message=login");
  } else next();
});

export default router;
