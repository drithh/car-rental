<template>
  <navbar-component />
  <div class="min-h-screen overflow-x-hidden">
    <router-view />
  </div>
  <footer-component />
</template>

<script setup>
import NavbarComponent from "@/components/navbar/NavbarComponent.vue";
import FooterComponent from "@/components/footer/FooterComponent.vue";
</script>
