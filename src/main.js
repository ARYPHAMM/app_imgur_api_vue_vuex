import Vue from "vue";
import VueRouter from "vue-router";

import App from "./App.vue";
import store from "./store";
import AuthHandler from "./components/AuthHandler.vue";
import UploadForm from "./components/UploadForm.vue";
import ImageList from "./components/ImageList.vue";

Vue.config.productionTip = false;
Vue.use(VueRouter);

export const router = new VueRouter({
  // Cấu hình Vue router
  mode: "history",
  routes: [
    {
      path: "/",
      component: ImageList,
      name: "image_list",
    },
    {
      path: "/upload",
      component: UploadForm,
      name: "upload_form",
    },
    {
      path: "/oauth2/callback",
      component: AuthHandler,
      name: "oauth2_callback",
    },
  ],
});

new Vue({
  router: router,
  store: store,
  render: (h) => h(App),
}).$mount("#app");
