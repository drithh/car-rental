<template>
  <router-link @click="profileButton = 1" class="relative" to="/favorite">
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
    <router-link @click="profileButton = 2" to="/profile">
      <dropdown-profile>
        <font-awesome-icon :icon="['far', 'circle']" />
        <transition>
          <font-awesome-icon
            v-if="profileButton === 2"
            class="absolute left-0 top-[2px] -z-10 origin-center"
            icon="circle"
          />
        </transition>
      </dropdown-profile>
    </router-link>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
import { useRoute } from "vue-router";
import DropdownProfile from "@/components/navbar/DropdownProfile.vue";

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
