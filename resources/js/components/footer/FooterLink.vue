<template>
  <div class="links flex flex-col opacity-80">
    <div class="title mb-4 font-Yantramanav text-2xl font-bold">
      {{ title }}
    </div>
    <div class="link-wrapper flex flex-col gap-2 font-Yantramanav text-lg">
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  title: String,
});
</script>

<style lang="postcss" scoped></style>
