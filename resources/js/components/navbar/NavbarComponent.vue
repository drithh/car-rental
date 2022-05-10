<template>
  <header class="m-auto flex w-full place-content-center lg:w-[92vw] lg:p-0">
    <div
      class="border-gray-500 grid h-24 w-screen grid-flow-col place-items-center border-b border-b-secondary border-opacity-50 px-4 font-Yantramanav text-2xl font-medium text-secondary"
    >
      <nav
        ref="nav"
        class="relative flex h-full w-full min-w-[38rem] flex-row items-center gap-4 lg:gap-[4%]"
      >
        <div
          @click="hideLine"
          class="font-WorkSans text-3xl font-black uppercase tracking-tighter text-blue lg:w-36"
        >
          <router-link to="/">Rental</router-link>
        </div>
        <navbar-button link="/booking">Booking</navbar-button>
        <navbar-button link="/about-us">About Us</navbar-button>
        <navbar-button link="/contact">Contact</navbar-button>
        <navbar-button link="/faq">Faq</navbar-button>

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
import { ref, watch, onMounted } from "vue";
import { useRoute, onBeforeRouteUpdate } from "vue-router";
import axios from "axios";
import Auth from "@/components/navbar/authentication/Auth.vue";
import NavbarButton from "@/components/navbar/NavbarButton.vue";
import ProfileNav from "@/components/navbar/ProfileNav.vue";

onMounted(() => {
  checkUser();
});

const checkUser = () => {
  axios
    .get("/api/authenticated")
    .then((res) => {
      isLoaded.value = true;

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

const route = useRoute();

const isLogin = ref(false);
const isLoaded = ref(false);

const navWidth = ref(0);
const positionX = ref(0);
const scaleX = ref(0);

const nav = ref("");

watch(
  () => route.name,
  () => {
    checkUser();
    if (route.name === "booking") {
      changeLine(1);
    } else if (route.name === "about") {
      changeLine(2);
    } else if (route.name === "contact") {
      changeLine(3);
    } else if (route.name === "faq") {
      changeLine(4);
    } else {
      hideLine();
    }
  }
);

function changeLine(navIndex) {
  const navElement = nav.value.childNodes[navIndex].getBoundingClientRect();
  const parentElement = nav.value.getBoundingClientRect();
  scaleX.value = 1.1;
  navWidth.value = navElement.width;
  positionX.value = navElement.x - parentElement.x;
}
function hideLine() {
  scaleX.value = 0;
}
</script>

<style lang="postcss" scoped>
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
