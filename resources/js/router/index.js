import { createWebHistory, createRouter } from "vue-router";

import Home from "../pages/Home";
import Booking from "../pages/Booking";
import About from "../pages/About";
import Support from "../pages/Support";
import TermsConditions from "../pages/TermsConditions";
import Profile from "../pages/Profile";
import Favorite from "../pages/Favorite";

// import Books from "../components/Books";
// import AddBook from "../components/AddBook";
// import EditBook from "../components/EditBook";

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
    name: "login",
    path: "/login",
    //   component: Login,
  },
  {
    name: "support",
    path: "/support",
    component: Support,
  },
  {
    name: "termsConditions",
    path: "/terms-conditions",
    component: TermsConditions,
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
