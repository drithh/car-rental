<template>
  <div id="login">
    <div class="text-center font-Yantramanav text-5xl font-bold opacity-80">
      Welcome
    </div>
    <div class="text-center text-2xl opacity-80">Sign in to your account</div>
    <div class="input-container mt-10 flex flex-col gap-y-4">
      <input-box
        label="Email"
        :wrong="emailWrong"
        :wrongMessage="emailWrongMessage"
        placeholder="your@email.com"
        type="email"
        :textvalue="form.email"
        v-on:update:modelValue="(e) => (form.email = e)"
      ></input-box>
      <input-box
        label="Password"
        :wrong="passwordWrong"
        :wrongMessage="passwordWrongMessage"
        placeholder="password"
        type="password"
        :textvalue="form.password"
        v-on:update:modelValue="(e) => (form.password = e)"
      ></input-box>

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

const form = ref({
  email: "",
  password: "",
});

const emailWrong = ref(false);
const passwordWrong = ref(false);
const emailWrongMessage = ref("");
const passwordWrongMessage = ref("");

let errors = [];

const submit = () => {
  emailWrong.value = true;
  passwordWrong.value = true;
  axios
    .post("/api/login", form.value)
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
      if (errors.email) {
        emailWrong.value = true;
        emailWrongMessage.value = errors.email[0];
      }
      if (errors.password) {
        passwordWrong.value = true;
        passwordWrongMessage.value = errors.password[0];
      }
    });
};
</script>
