<template>
  <div id="forgot-password">
    <div class="text-center font-Yantramanav text-5xl font-bold opacity-80">
      Forgot password?
    </div>
    <div class="text-center text-2xl opacity-80">
      We'll email you a link to reset your password
    </div>

    <div class="input-container mt-10 flex flex-col gap-y-4">
      <input-box
        label="Email"
        :textvalue="email"
        v-on:update:modelValue="(e) => (email = e)"
        placeholder="your@email.com"
        type="email"
      ></input-box>

      <button
        class="mt-2 flex w-full place-content-between place-items-center px-3"
      >
        <div
          class="forgot cursor-pointer text-lg text-blue opacity-70 hover:underline"
          @click="$emit('login')"
        >
          back to login
        </div>
        <button
          @click="forgotPassword"
          class="w-36 rounded-xl border border-secondary border-opacity-60 bg-darkencream py-2 px-6 opacity-70 hover:border-blue hover:opacity-100"
        >
          Submit
        </button>
      </button>
    </div>
  </div>
</template>

<script setup>
import InputBox from "@/components/contact/InputBox.vue";
import anime from "animejs";
import { onBeforeRouteLeave } from "vue-router";
import { ref, onMounted } from "vue";
import axios from "axios";

const email = ref("");
const forgotPassword = () => {
  if (email.value) {
    axios
      .post("/api/forgot-password", {
        email: email.value,
      })
      .then((res) => {
        console.log(res);
        anime({
          targets: ".input-container",
          opacity: 0,
          duration: 500,
          easing: "easeInOutQuad",
          complete: () => {
            onBeforeRouteLeave(() => {
              window.location.href = "/login";
            });
          },
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }
};

defineEmits(["login"]);
</script>
