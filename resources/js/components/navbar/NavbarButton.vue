<template>
  <router-link
    class="item-nav transition-colors duration-700 ease-in-out"
    :to="link"
  >
    <slot></slot
  ></router-link>
</template>

<script setup>
import { useRoute } from "vue-router";

const props = defineProps({
  link: String,
});
</script>

<style lang="postcss" scoped>
.item-nav.router-link-active {
  @apply text-primary;
}
</style>
