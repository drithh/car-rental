<template>
  <router-link @click="profileButton = 1" class="relative" to="/favorite">
    <svg
      version="1.0"
      xmlns="http://www.w3.org/2000/svg"
      width="24.000000pt"
      height="24.000000pt"
      viewBox="0 0 24.000000 24.000000"
      preserveAspectRatio="xMidYMid meet"
      :class="{
        'text-blue text-opacity-70': profileButton == 1,
      }"
      class="relative bottom-[1px] hover:text-blue hover:text-opacity-70"
    >
      <g
        transform="translate(0.000000,24.000000) scale(0.100000,-0.100000)"
        fill="currentColor"
      >
        <path
          d="M40 150 c0 -36 -4 -60 -11 -60 -6 0 -9 -12 -7 -28 l3 -27 90 0 90 0
3 88 3 87 -86 0 -85 0 0 -60z m150 -30 c0 -40 -4 -70 -10 -70 -5 0 -10 9 -10
20 0 18 -7 20 -55 20 l-55 0 0 50 0 50 65 0 65 0 0 -70z m-40 -60 c0 -5 -25
-10 -55 -10 -30 0 -55 5 -55 10 0 6 25 10 55 10 30 0 55 -4 55 -10z"
        />
        <path
          d="M80 160 c0 -5 5 -10 10 -10 6 0 10 5 10 10 0 6 -4 10 -10 10 -5 0
-10 -4 -10 -10z"
        />
        <path
          d="M120 160 c0 -5 11 -10 25 -10 14 0 25 5 25 10 0 6 -11 10 -25 10 -14
0 -25 -4 -25 -10z"
        />
        <path
          d="M80 120 c0 -5 5 -10 10 -10 6 0 10 5 10 10 0 6 -4 10 -10 10 -5 0
-10 -4 -10 -10z"
        />
        <path
          d="M120 120 c0 -5 11 -10 25 -10 14 0 25 5 25 10 0 6 -11 10 -25 10 -14
0 -25 -4 -25 -10z"
        />
      </g>
    </svg>
  </router-link>
  <router-link @click="profileButton = 2" class="relative" to="/favorite">
    <font-awesome-icon
      :class="{
        'text-blue text-opacity-70': profileButton == 2,
      }"
      class="hover:text-blue hover:text-opacity-70"
      :icon="['far', 'heart']"
    />
  </router-link>
  <div
    @click="notificationActive = !notificationActive"
    class="relative cursor-pointer"
  >
    <font-awesome-icon
      class="hover:text-blue hover:opacity-70"
      :icon="['far', 'bell']"
    />
  </div>
  <div class="divider block h-10 w-[1px] bg-secondary"></div>
  <div class="profile relative">
    <router-link to="/profile">
      <dropdown-profile :username="username" :route="profileButton == 3">
        <div class="flex flex-row place-items-center gap-3">
          <img
            class="rounded-full border border-secondary hover:border-opacity-70"
            alt="Avatar"
            :src="svg"
          />
          <div class="username">{{ username }}</div>
        </div>
      </dropdown-profile>
    </router-link>
  </div>
</template>

<script setup>
import { ref, watch, onMounted } from "vue";
import { useRoute } from "vue-router";
import DropdownProfile from "@/components/navbar/DropdownProfile.vue";
import axios from "axios";

import { createAvatar } from "@dicebear/avatars";
import * as style from "@dicebear/adventurer-neutral";

let notificationActive = ref(false);

const route = useRoute();

let profileButton = ref(0);

watch(
  () => route.name,
  () => {
    if (route.name == "transactions") {
      profileButton.value = 1;
    }
    if (route.name === "favorite") {
      profileButton.value = 2;
    } else if (route.name === "profile") {
      profileButton.value = 3;
    } else {
      profileButton.value = 0;
    }

    notificationActive.value = false;
  }
);

const username = ref("");

const svg = ref("");

onMounted(() => {
  axios
    .get("/api/user")
    .then((res) => {
      username.value = res.data.name;
      svg.value = createAvatar(style, {
        seed: username.value,
        dataUri: true,
        size: 40,
      });
    })
    .catch((err) => {
      console.log(err);
    });
});
</script>

<style lang="postcss" scoped>
.v-enter-active,
.v-leave-active {
  @apply animate-scale-bounce-enter;
}
.v-enter-from,
.v-leave-to {
  @apply animate-scale-bounce-leave;
}
</style>
