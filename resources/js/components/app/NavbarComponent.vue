<script setup>
import { ref, watch } from "vue";
import { useRoute } from "vue-router";
let navWidth = ref(0);
let positionX = ref(0);
let scaleX = ref(0);
let profileButton = ref(0);
let notificationActive = ref(false);
const route = useRoute();
watch(
  () => route.name,
  () => {
    if (route.name === "booking") {
      changeLine(1);
    } else if (route.name === "about") {
      changeLine(2);
    } else if (route.name === "support") {
      changeLine(3);
    } else if (route.name === "termsConditions") {
      changeLine(4);
    } else {
      hideLine();
    }
    if (route.name === "favorite") {
      profileButton.value = 1;
    } else if (route.name === "profile") {
      profileButton.value = 2;
    } else {
      profileButton.value = 0;
    }

    notificationActive.value = false;
  }
);

const nav = ref("");

function changeLine(navIndex) {
  const navElement = nav.value.childNodes[navIndex].getBoundingClientRect();
  const parentElement = nav.value.getBoundingClientRect();
  scaleX.value = 1.1;
  navWidth.value = navElement.width;
  positionX.value = navElement.x - parentElement.x;
  profileButton.value = 0;
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
        <div class="item-nav">
          <router-link
            class="transition-colors duration-700 ease-in-out"
            to="/booking"
          >
            Booking</router-link
          >
        </div>
        <div class="item-nav">
          <router-link
            class="transition-colors duration-700 ease-in-out"
            to="/about-us"
            >About Us</router-link
          >
        </div>
        <div class="item-nav">
          <router-link
            class="transition-colors duration-700 ease-in-out"
            to="/support"
            >Support</router-link
          >
        </div>
        <div class="item-nav">
          <router-link
            class="transition-colors duration-700 ease-in-out"
            to="/terms-conditions"
            >Terms & Conditions</router-link
          >
        </div>
        <div
          :style="{
            width: `${navWidth}px`,
            transform: `translateX(${positionX}px) scaleX(${scaleX})`,
          }"
          ref="underlineNav"
          class="absolute left-0 bottom-[-2.5px] h-[5px] origin-center rounded-lg bg-blue transition-all duration-700 ease-in-out"
        ></div>
      </nav>
      <div
        class="profile flex w-full flex-row place-content-end place-items-center gap-[15%] text-secondary lg:gap-[7%]"
      >
        <router-link
          @click="
            hideLine();
            profileButton = 1;
          "
          class="relative"
          to="/favorite"
        >
          <font-awesome-icon :icon="['far', 'heart']" />
          <transition>
            <font-awesome-icon
              v-if="profileButton === 1"
              class="absolute left-0 top-[2px] -z-10 origin-center"
              icon="heart"
            />
          </transition>
        </router-link>
        <div
          @click="notificationActive = !notificationActive"
          class="relative cursor-pointer"
        >
          <font-awesome-icon :icon="['far', 'bell']" />
          <transition>
            <font-awesome-icon
              v-if="notificationActive"
              class="absolute left-0 top-[2px] -z-10 origin-center"
              icon="bell"
            />
          </transition>
        </div>
        <div class="profile relative">
          <router-link
            @click="
              hideLine();
              profileButton = 2;
            "
            to="/profile"
          >
            <font-awesome-icon :icon="['far', 'circle']" />
            <transition>
              <font-awesome-icon
                v-if="profileButton === 2"
                class="absolute left-0 top-[2px] -z-10 origin-center"
                icon="circle"
              />
            </transition>
          </router-link>
        </div>
      </div>
    </div>
  </header>
</template>

<style lang="postcss" scoped>
.item-nav .router-link-active {
  @apply text-primary;
}
.v-enter-active,
.v-leave-active {
  @apply animate-scale-bounce-enter;
}
.v-enter-from,
.v-leave-to {
  @apply animate-scale-bounce-leave;
}
</style>
