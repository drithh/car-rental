<template>
  <navbar-component />
  <router-view />
  <footer-component />
</template>

<script setup>
import NavbarComponent from "./components/app/NavbarComponent.vue";
import FooterComponent from "./components/app/FooterComponent.vue";
</script>
