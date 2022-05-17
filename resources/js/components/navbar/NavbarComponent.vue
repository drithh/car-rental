<template>
  <header class="m-auto flex w-full place-content-center lg:w-[92vw] lg:p-0">
    <div
      class="border-gray-500 grid h-24 w-screen grid-flow-col place-items-center border-b border-b-secondary border-opacity-50 px-4 font-Yantramanav text-2xl font-medium text-secondary"
    >
      <nav
        ref="nav"
        class="relative flex h-full w-full min-w-[38rem] flex-row items-center gap-4 lg:gap-8"
      >
        <div
          @click="hideLine"
          class="font-WorkSans text-3xl font-black uppercase tracking-tighter text-blue lg:w-36"
        >
          <router-link to="/">Rental</router-link>
        </div>
        <navbar-button id="booking" link="/booking">Booking</navbar-button>
        <div class="relative mt-[2px]">
          <transition name="nav-slide" mode="out-in" @after-enter="changeLine">
            <div v-if="isAdmin && isLoaded" class="flex gap-4 lg:gap-8">
              <navbar-button id="dashboard" link="/dashboard"
                >Dashboard</navbar-button
              >
              <navbar-button id="orders" link="/orders">Orders</navbar-button>
            </div>
            <div v-else-if="isLoaded" class="flex gap-4 lg:gap-8">
              <navbar-button id="about" link="/about-us"
                >About Us</navbar-button
              >
              <navbar-button id="contact" link="/contact"
                >Contact</navbar-button
              >
              <navbar-button id="faq" link="/faq">Faq</navbar-button>
            </div>
          </transition>
        </div>
        <div
          :style="{
            width: `${navWidth}px`,
            transform: `translateX(${positionX}px) scaleX(${scaleX})`,
          }"
          class="absolute left-0 bottom-[-2.5px] h-[5px] origin-center rounded-lg bg-blue transition-all duration-700 ease-in-out"
        ></div>
      </nav>
      <transition name="slide" mode="out-in">
        <div
          v-if="isLogin && isLoaded"
          class="profile flex w-full flex-row place-content-end place-items-center gap-[12%] text-secondary lg:gap-[4%]"
        >
          <profile-nav></profile-nav>
        </div>
        <div
          v-else-if="isLoaded"
          class="profile flex w-full flex-row place-content-end place-items-center gap-[8%] text-secondary lg:gap-[3%]"
        >
          <auth></auth>
        </div>
      </transition>
    </div>
  </header>
</template>

<script setup>
import { ref, watch, onMounted, onUpdated } from "vue";
import { useRoute, onBeforeRouteUpdate } from "vue-router";
import axios from "axios";
import Auth from "@/components/navbar/authentication/Auth.vue";
import NavbarButton from "@/components/navbar/NavbarButton.vue";
import ProfileNav from "@/components/navbar/ProfileNav.vue";

const isAdmin = ref(false);

const route = useRoute();

const isLogin = ref(false);
const isLoaded = ref(false);

const navWidth = ref(0);
const positionX = ref(0);
const scaleX = ref(0);

const nav = ref("");

// onUpdated(() => {
//   changeLine();
// });

onMounted(() => {
  checkUser();
});

const checkUser = () => {
  axios
    .get("/api/authenticated")
    .then((res) => {
      axios.get("/api/is-admin").then((resp) => {
        isAdmin.value = resp.data;
        isLoaded.value = true;
      });

      if (res.data === "auth") {
        isLogin.value = true;
      } else {
        isLogin.value = false;
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

watch(
  () => route.name,
  () => {
    checkUser();
    if (
      (!isAdmin.value &&
        (route.name === "dashboard" || route.name === "orders")) ||
      (isAdmin.value &&
        (route.name === "about" ||
          route.name === "contact" ||
          route.name === "faq"))
    ) {
      return;
    }
    changeLine();
  }
);

const changeLine = () => {
  const allRoutes = "booking|dashboard|orders|about|contact|faq";
  if (allRoutes.includes(route.name)) {
    moveLine(route.name);
  } else {
    hideLine();
  }
};

const moveLine = (routeName) => {
  const navElement = nav.value
    .querySelector(`#${routeName}`)
    .getBoundingClientRect();

  const parentElement = nav.value.getBoundingClientRect();
  scaleX.value = 1.1;
  navWidth.value = navElement.width;
  positionX.value = navElement.x - parentElement.x;
};
function hideLine() {
  scaleX.value = 0;
}
</script>

<style lang="postcss" scoped>
.nav-slide-enter-from,
.nav-slide-leave-to {
  @apply translate-y-[-200%];
}

.nav-slide-enter-active,
.nav-slide-leave-active {
  @apply transition-all duration-700;
}

.nav-slide-enter-to,
.nav-slide-leave-from {
  @apply -translate-y-[0%];
}

.slide-enter-from,
.slide-leave-to {
  @apply translate-x-[200%];
}

.slide-enter-active,
.slide-leave-active {
  @apply transition-all duration-700;
}

.slide-enter-to,
.slide-leave-from {
  @apply translate-x-[0%];
}
</style>
