import { createWebHistory, createRouter } from "vue-router";

import Home from "../pages/Home";
import Booking from "../pages/Booking";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Faq from "../pages/Faq";
import Profile from "../pages/Profile";
import Favorite from "../pages/Favorite";

export const routes = [
  {
    name: "home",
    path: "/",
    component: Home,
  },
  {
    name: "booking",
    path: "/booking",
    component: Booking,
  },
  {
    name: "about",
    path: "/about-us",
    component: About,
  },
  {
    name: "contact",
    path: "/contact",
    component: Contact,
  },
  {
    name: "faq",
    path: "/faq",
    component: Faq,
  },

  {
    name: "profile",
    path: "/profile",
    component: Profile,
  },
  {
    name: "favorite",
    path: "/favorite",
    component: Favorite,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
  linkExactActiveClass: "exact-active",
});

export default router;
