<template>
  <navbar-component />
  <router-view />
  <footer-component />
</template>

<script setup lang="ts">
import NavbarComponent from "./components/navbar/NavbarComponent.vue";
import FooterComponent from "./components/footer/FooterComponent.vue";
</script>
