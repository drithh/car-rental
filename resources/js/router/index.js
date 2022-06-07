import { createWebHistory, createRouter } from "vue-router";
import axios from "axios";

import Home from "../pages/Home";
import Booking from "../pages/Booking";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Faq from "../pages/Faq";
import Profile from "../pages/Profile";
import Favorite from "../pages/Favorite";
import Dashboard from "../pages/Dashboard";
import Orders from "../pages/Orders";
import SingleCar from "../pages/SingleCar";

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
    beforeEnter: (to, form, next) => {
      axios
        .get("/api/authenticated")
        .then((res) => {
          if (res.data === "auth") {
            next();
          } else {
            return next({ name: "home" });
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  {
    name: "favorite",
    path: "/favorite",
    component: Favorite,
    beforeEnter: (to, form, next) => {
      axios
        .get("/api/authenticated")
        .then((res) => {
          if (res.data === "auth") {
            next();
          } else {
            return next({ name: "home" });
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  {
    name: "singleCar",
    path: "/car/:id",
    component: SingleCar,
    props: (route) => ({
      ...route.params,
    }),
  },
  {
    name: "dashboard",
    path: "/dashboard",
    component: Dashboard,
    beforeEnter: (to, form, next) => {
      axios
        .get("/api/is-admin")
        .then((res) => {
          if (res.data) {
            next();
          } else {
            return next({ name: "home" });
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  {
    name: "orders",
    path: "/orders",
    component: Orders,
    beforeEnter: (to, form, next) => {
      axios
        .get("/api/is-admin")
        .then((res) => {
          if (res.data) {
            next();
          } else {
            return next({ name: "home" });
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
  linkExactActiveClass: "exact-active",
});

export default router;
