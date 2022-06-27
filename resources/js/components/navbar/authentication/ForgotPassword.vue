<template>
  <div id="forgot-password">
    <div class="abslote z-50">
      <flash
        :open="flash"
        :message="flashMessage"
        @close="flash = false"
      ></flash>
    </div>
    <div class="text-center font-Yantramanav text-5xl font-bold opacity-80">
      Forgot password?
    </div>
    <div class="text-center text-2xl opacity-80">
      We'll email you a link to reset your password
    </div>

    <div class="input-container mt-10 flex flex-col gap-y-4">
      <input-box
        label="Email"
        :wrong="emailWrong"
        :wrongMessage="emailWrongMessage"
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
import Flash from "@/components/flash/Flash.vue";

import axios from "axios";
const emailWrong = ref(false);
const emailWrongMessage = ref("");
const email = ref("");
const flash = ref(false);
const flashMessage = ref("");

const forgotPassword = () => {
  if (email.value) {
    emailWrong.value = false;
    emailWrongMessage.value = "";
    axios
      .post("/api/forgot-password", {
        email: email.value,
      })
      .then((res) => {
        flash.value = true;
        flashMessage.value = "Email telah dikirimkan ke email anda";
        setTimeout(() => {
          flash.value = false;
        }, 5000);
      })
      .catch((error) => {
        console.log(error);
        const errors = error.response.data.errors;
        if (errors.email) {
          emailWrong.value = true;
          emailWrongMessage.value = errors.email[0];
        }
      });
  }
};

defineEmits(["login"]);
</script>
