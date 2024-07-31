import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";

Vue.config.productionTip = false;

const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/a",
      name: "a",
      component: () => import("./views/APage"),
    },
    {
      path: "/b",
      name: "b",
      component: () => import("./views/BPage"),
    },
    {
      path: "/c",
      name: "c",
      component: () => import("./views/CPage"),
    },
  ],
});
// eslint-disable-next-line
router.beforeEach((to, from, next) => {
  if (to.path === "/a") {
    router.replace({ path: "/b" });
    return;
  }
  next();
});

Vue.use(VueRouter);

new Vue({
  render: (h) => h(App),
  router,
}).$mount("#app");
