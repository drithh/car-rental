import { createApp } from "vue";

import App from "./App.vue";
// import axios from "axios";
import router from "./router";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faCircle, faBell, faHeart } from "@fortawesome/free-regular-svg-icons";
import {
  faCircle as fasCircle,
  faBell as fasBell,
  faHeart as fasHeart,
  faLocationDot,
  faPlus,
  faMinus,
  faUser,
  faCogs,
  faCalendar,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(
  faCircle,
  faBell,
  faHeart,
  faPlus,
  faMinus,
  fasCircle,
  fasBell,
  fasHeart,
  faLocationDot,
  faUser,
  faCogs,
  faCalendar,
  faClock
);

const app = createApp(App)
  .component("font-awesome-icon", FontAwesomeIcon)
  .use(router)
  .mount("#app");
