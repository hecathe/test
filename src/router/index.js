import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
			path: '/',
			name: 'Главная',
      meta: { layout: "DefaultLayout" },
      component: HomeView,
		},
  ],
});

export default router;
