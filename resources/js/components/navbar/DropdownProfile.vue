<template>
  <div
    @mouseenter="openDropdown"
    @mouseleave="closeDropdown"
    class="relative z-10"
  >
    <slot></slot>
  </div>

  <transition
    enter-active-class="transition ease-out duration-100"
    enter-from-class="transform opacity-0 scale-95"
    enter-to-class="transform opacity-100 scale-100"
    leave-active-class="transition ease-in duration-75"
    leave-from-class="transform opacity-100 scale-100"
    leave-to-class="transform opacity-0 scale-95"
  >
    <div
      @mouseenter="openDropdown"
      @mouseleave="closeDropdown"
      v-if="dropdownActive"
      class="absolute right-0 z-50 my-2 flex w-40 origin-top-right flex-col rounded-xl border border-secondary border-opacity-70 bg-white py-2 text-lg"
    >
      <router-link
        to="/profile"
        class="px-4 py-2 text-secondary hover:bg-cream hover:text-primary"
        >Profile</router-link
      >
      <router-link
        to="/favorite"
        class="px-4 py-2 text-secondary hover:bg-cream hover:text-primary"
        >Favorite</router-link
      >
      <button
        @click="logout"
        class="px-4 py-2 text-left text-secondary hover:bg-cream hover:text-primary"
      >
        Sign Out
      </button>
    </div>
  </transition>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

import axios from "axios";
let dropdownActive = ref(false);
let dropdownTimeout;

const openDropdown = () => {
  dropdownActive.value = true;
  clearTimeout(dropdownTimeout);
};

const closeDropdown = () => {
  dropdownTimeout = setTimeout(() => {
    dropdownActive.value = false;
  }, 300);
};

const router = useRouter();

const logout = () => {
  axios.post("/api/logout").then(() => {
    router.push({ name: "home" });
  });
};
</script>
