<template>
  <footer class="relative z-10 bg-white">
    <div class="container m-auto flex items-center justify-between py-32">
      <div
        class="font-WorkSans text-[4rem] font-black uppercase tracking-tighter text-primary opacity-90"
      >
        <router-link to="/">Rental</router-link>
      </div>
      <div class="footer-link-container flex gap-x-20">
        <footer-link title="Company">
          <router-link to="/about-us" class="opacity-60 hover:opacity-80"
            >About Us</router-link
          >
          <router-link to="/contact" class="opacity-60 hover:opacity-80"
            >Contact</router-link
          >
        </footer-link>
        <footer-link title="Product">
          <router-link to="/booking" class="opacity-60 hover:opacity-80"
            >Car</router-link
          >
          <router-link to="/faq" class="opacity-60 hover:opacity-80"
            >FAQ</router-link
          >
          <router-link to="/favorite" class="opacity-60 hover:opacity-80"
            >Favorites</router-link
          >
        </footer-link>
        <footer-link title="Social">
          <a href="#" class="opacity-60 hover:opacity-80">Facebook</a>
          <a href="#" class="opacity-60 hover:opacity-80">Instagram</a>
          <a href="#" class="opacity-60 hover:opacity-80">Twitter</a>
        </footer-link>
      </div>
    </div>
  </footer>
</template>

<script setup>
import FooterLink from "@/components/footer/FooterLink.vue";
import { useRoute } from "vue-router";
</script>

<style lang="postcss" scoped></style>
