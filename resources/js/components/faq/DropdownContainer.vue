<script setup>
import Dropdown from "components/faq/Dropdown.vue";
</script>

<template>
  <div class="wrapper my-8 w-[80%]">
    <div class="dropdown-title flex w-full">
      <div
        class="title text-left font-Yantramanav text-[2.5rem] font-bold text-primary"
      >
        Reservation FaQs
      </div>
    </div>
    <div
      class="dropdown-container flex w-full flex-col place-content-center gap-3"
    >
      <dropdown></dropdown>
      <dropdown></dropdown>
    </div>
  </div>
</template>
