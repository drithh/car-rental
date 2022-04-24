<script setup>
import DropdownContainer from "components/faq/DropdownContainer.vue";
</script>

<template>
  <section
    class="faq-title relative m-auto mt-20 flex flex-col place-content-center place-items-center lg:w-[92vw]"
  >
    <div class="title my-12 font-Yantramanav text-5xl font-black text-primary">
      Frequently Asked Questions
    </div>
    <dropdown-container></dropdown-container>
    <dropdown-container></dropdown-container>
    <dropdown-container></dropdown-container>
    <dropdown-container></dropdown-container>
  </section>
</template>
