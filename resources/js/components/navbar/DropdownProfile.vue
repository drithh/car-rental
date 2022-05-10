<template>
  <div
    @mouseenter="openDropdown"
    @mouseleave="closeDropdown"
    class="relative z-10"
    :class="{ 'text-blue': route || hover }"
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
      class="absolute right-0 z-50 my-2 flex w-40 origin-top-right flex-col rounded-xl bg-white py-2 text-base shadow-md"
    >
      <div class="profile mb-2 cursor-default border-b border-b-cream">
        <div class="text-bold px-4 text-lg">{{ username }}</div>
        <div class="mb-2 px-4 text-sm italic">
          {{ isAdmin ? "administrator" : "user" }}
        </div>
      </div>
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
      <router-link
        v-if="isAdmin"
        to="/dashboard"
        class="px-4 py-2 text-secondary hover:bg-cream hover:text-primary"
        >Dashboard</router-link
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
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";

const props = defineProps({
  username: String,
  route: Boolean,
});

import axios from "axios";
let dropdownActive = ref(false);
let dropdownTimeout;

const hover = ref(false);

const openDropdown = () => {
  dropdownActive.value = true;
  hover.value = true;
  console.log(hover.value);
  clearTimeout(dropdownTimeout);
};

const closeDropdown = () => {
  dropdownTimeout = setTimeout(() => {
    dropdownActive.value = false;
    hover.value = false;
  }, 300);
};

const router = useRouter();

const isAdmin = ref(false);

onMounted(() => {
  axios
    .get("/api/is-admin")
    .then((res) => {
      if (res.data) {
        isAdmin.value = true;
      } else {
        isAdmin.value = false;
      }
    })
    .catch((err) => {
      console.log(err);
    });
});

const logout = () => {
  axios.post("/api/logout").then(() => {
    router.push({ name: "home" });
  });
};
</script>
