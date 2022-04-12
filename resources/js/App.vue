<template>
  <navbar-component />
  <router-view />
  <footer-component />
</template>

<script>
import NavbarComponent from "./components/app/NavbarComponent.vue";
import FooterComponent from "./components/app/FooterComponent.vue";

export default {
  name: "App",
  components: {
    NavbarComponent,
    FooterComponent,
  },
};
</script>
