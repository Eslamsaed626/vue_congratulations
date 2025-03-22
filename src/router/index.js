import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
// import HolidaysView from "@/views/HolidaysView.vue";
// import OccareView from "@/views/OccareView.vue";
import CardDetails from "@/views/CardDetails.vue";
import OccareView from "@/views/OccareView.vue";
// import IslamicOccare from "@/views/IslamicOccare.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },

  // {
  //   path: "/",
  //   name: "home",
  //   component: HomeView,
  // },

  {
    path: "/:occasion/:id",
    name: "cardDeatails",
    component: CardDetails,
  },

  {
    path: "/:occasion",
    component: OccareView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
