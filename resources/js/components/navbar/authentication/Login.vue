<template>
  <div id="login">
    <div class="text-center font-Yantramanav text-5xl font-bold opacity-80">
      Welcome
    </div>
    <div class="text-center text-2xl opacity-80">Sign in to your account</div>
    <div class="input-container mt-10 flex flex-col gap-y-4">
      <input-box
        label="Email"
        placeholder="your@email.com"
        type="email"
      ></input-box>
      <div class="password relative">
        <input-box
          label="Password"
          placeholder="password"
          :type="visibility"
        ></input-box>
        <font-awesome-icon
          @click="togglePasswordVisibility"
          class="absolute right-6 top-12 h-5 w-8 cursor-pointer opacity-10"
          :icon="icon"
        />
      </div>
      <div class="flex w-full place-content-between px-3 text-lg">
        <div
          class="forgot cursor-pointer text-blue opacity-70 hover:underline"
          @click="$emit('register')"
        >
          create an account
        </div>

        <div
          class="forgot cursor-pointer text-blue opacity-70 hover:underline"
          @click="$emit('forgotPassword')"
        >
          forgot password?
        </div>
      </div>

      <button class="mt-6 flex w-full place-content-end px-3">
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
import InputBox from "components/contact/InputBox.vue";
import anime from "animejs";
import { onBeforeRouteLeave } from "vue-router";
import { ref } from "vue";

defineEmits(["register", "forgotPassword"]);

const visibility = ref("password");
const icon = ref("eye");

const togglePasswordVisibility = () => {
  if (visibility.value === "password") {
    visibility.value = "text";
    icon.value = "eye-slash";
  } else {
    visibility.value = "password";
    icon.value = "eye";
  }
};
</script>
