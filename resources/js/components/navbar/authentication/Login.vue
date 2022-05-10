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
        v-model="form.email"
      ></input-box>
      <div class="password relative">
        <input-box
          label="Password"
          placeholder="password"
          :type="visibility"
          v-model="form.password"
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

      <div class="mt-6 flex w-full place-content-end px-3">
        <button
          class="w-36 rounded-xl border border-secondary border-opacity-60 bg-darkencream py-2 px-6 opacity-70 hover:border-blue hover:opacity-100"
          @click="submit"
        >
          Submit
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import anime from "animejs";
import axios from "axios";

import { onBeforeRouteLeave } from "vue-router";
import { ref } from "vue";
import InputBox from "@/components/contact/InputBox.vue";
import { useRouter } from "vue-router";

const emit = defineEmits(["register", "forgotPassword", "closeMenu"]);

const router = useRouter();

let form = {
  email: String,
  password: String,
};

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

let errors = [];

const submit = () => {
  axios
    .post("/api/login", form)
    .then(() => {
      axios.get("/api/is-admin").then((res) => {
        if (res.data) {
          router.push({ name: "dashboard" });
        } else {
          router.push({ name: "profile" });
        }
      });
      emit("closeMenu");
    })
    .catch((error) => {
      errors = error.response.data.errors;
      console.log(errors);
    });
};
</script>
