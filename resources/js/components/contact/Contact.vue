<script setup>
const props = defineProps({
  name: String,
  value: String,
});
</script>

<template>
  <div
    class="contact-wrapper flex flex-row place-content-between border-t border-secondary border-opacity-20 pt-4 pb-2 text-lg opacity-70"
  >
    <div>{{ name }}</div>
    <div class="w-1/2 text-justify">{{ value }}</div>
  </div>
</template>
