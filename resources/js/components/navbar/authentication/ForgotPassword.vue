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
        <div
          class="w-36 rounded-xl border border-secondary border-opacity-60 bg-darkencream py-2 px-6 opacity-70 hover:border-blue hover:opacity-100"
        >
          Submit
        </div>
      </button>
    </div>
  </div>
</template>

<script setup>
import InputBox from "@/components/contact/InputBox.vue";
import anime from "animejs";
import { onBeforeRouteLeave } from "vue-router";

defineEmits(["login"]);
</script>
