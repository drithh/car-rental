<template>
  <div
    class="relative flex h-[36rem] w-[36rem] flex-col place-content-around overflow-hidden rounded-3xl border border-secondary border-opacity-70 bg-white p-8 transition-all"
    v-click-away="close"
  >
    <div
      @click="close"
      class="close absolute right-6 top-6 z-10 h-6 w-6 cursor-pointer text-secondary"
    >
      <font-awesome-icon class="h-7 w-7 opacity-60" icon="xmark" />
    </div>
    <slot></slot>
  </div>
</template>

<script setup>
import anime from "animejs";
import { onBeforeRouteLeave } from "vue-router";
const emit = defineEmits(["closeMenu"]);

const close = () => {
  emit("closeMenu");
};
</script>
