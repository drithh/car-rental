import { createApp } from "vue";

import App from "./App.vue";
import axios from "axios";
import router from "./router";
import VueClickAway from "vue3-click-away";
import VueApexCharts from "vue3-apexcharts";
import Cloudinary, { CldImage } from "cloudinary-vue";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faCircle,
  faBell,
  faHeart,
  faCircleUser,
} from "@fortawesome/free-regular-svg-icons";
import {
  faCircleUser as fasCircleUser,
  faBell as fasBell,
  faHeart as fasHeart,
  faLocationDot,
  faPlus,
  faMinus,
  faUser,
  faCogs,
  faCalendar,
  faClock,
  faXmark,
  faEye,
  faEyeSlash,
  faStar,
  faCar,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(
  faEye,
  faEyeSlash,
  faXmark,
  faBell,
  faHeart,
  faPlus,
  faMinus,
  fasCircleUser,
  faCircleUser,
  fasBell,
  fasHeart,
  faLocationDot,
  faUser,
  faCogs,
  faCalendar,
  faClock,
  faStar,
  faCar
);

const app = createApp(App)
  .component("font-awesome-icon", FontAwesomeIcon)
  .use(router)
  .use(VueClickAway)
  .use(VueApexCharts)
  .use(Cloudinary, {
    configuration: {
      cloudName: "demo",
      secure: true,
    },
    components: ["CldImage"],
  })
  .mount("#app");
