<script setup>
import { ref, watch } from "vue";
import { useRoute, onBeforeRouteUpdate } from "vue-router";
import Login from "components/Login.vue";
import Register from "components/Register.vue";
import NavbarButton from "components/app/NavbarButton.vue";
import ProfileNav from "components/app/ProfileNav.vue";

const route = useRoute();

const isLogin = ref(false);

const loginMenu = ref(false);
const registerMenu = ref(false);

const navWidth = ref(0);
const positionX = ref(0);
const scaleX = ref(0);

const nav = ref("");

watch(
  () => route.name,
  () => {
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

const openMenu = (menu) => {
  loginMenu.value = false;
  registerMenu.value = false;

  if (menu === "login") {
    loginMenu.value = true;
  } else if (menu === "register") {
    registerMenu.value = true;
  }

  document.documentElement.style = `overflow: hidden;`;
};

const closeMenu = () => {
  console.log("close");
  loginMenu.value = false;
  registerMenu.value = false;
  document.documentElement.style = `overflow: auto;`;
};

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
      <teleport to="body">
        <div class="login-modal modal overflow-hidden" v-if="loginMenu">
          <login @close="closeMenu"></login>
        </div>
        <div class="register-modal modal overflow-hidden" v-if="registerMenu">
          <register></register>
        </div>
      </teleport>

      <div
        v-if="!isLogin"
        class="profile flex w-full flex-row place-content-end place-items-center gap-[8%] text-secondary lg:gap-[3%]"
      >
        <div
          class="cursor-pointer duration-700 ease-in-out hover:text-blue"
          @click="openMenu('login')"
        >
          Login
        </div>
        <div>|</div>
        <div
          class="cursor-pointer duration-700 ease-in-out hover:text-blue"
          @click="openMenu('register')"
        >
          Register
        </div>
      </div>
      <div
        v-if="isLogin"
        class="profile flex w-full flex-row place-content-end place-items-center gap-[15%] text-secondary lg:gap-[7%]"
      >
        <profile-nav></profile-nav>
      </div>
    </div>
  </header>
</template>
