<template>
  <router-link @click="profileButton = 1" class="relative" to="/favorite">
    <font-awesome-icon
      :class="{
        'text-blue': profileButton == 1,
        'text-opacity-70': profileButton == 1,
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
      <dropdown-profile :username="username" :route="profileButton == 2">
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
