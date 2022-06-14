<template>
  <div id="register">
    <div class="text-center font-Yantramanav text-5xl font-bold opacity-80">
      Create account!
    </div>
    <div class="input-container mt-10 flex flex-col gap-y-4">
      <input-box
        label="Full Name"
        placeholder="Jane Doe"
        type="text"
        :textvalue="form.name"
        v-on:update:modelValue="(e) => (form.name = e)"
      ></input-box>
      <input-box
        label="Email"
        placeholder="your@email.com"
        :wrong="emailWrong"
        :wrongMessage="emailWrongMessage"
        type="email"
        :textvalue="form.email"
        v-on:update:modelValue="(e) => (form.email = e)"
      ></input-box>
      <div class="password relative">
        <input-box
          label="Password"
          placeholder="password"
          :wrong="passwordWrong"
          :wrongMessage="passwordWrongMessage"
          type="password"
          :textvalue="form.password"
          v-on:update:modelValue="(e) => (form.password = e)"
        ></input-box>
      </div>

      <div
        class="mt-2 flex w-full place-content-between place-items-center px-3"
      >
        <div
          class="forgot cursor-pointer text-lg text-blue opacity-70 hover:underline"
          @click="$emit('login')"
        >
          already have an account?
        </div>
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
import { useRouter } from "vue-router";
import { ref } from "vue";
import axios from "axios";
import InputBox from "@/components/contact/InputBox.vue";

const emit = defineEmits(["login", "closeMenu"]);
const router = useRouter();

const form = ref({
  name: "",
  email: "",
  password: "",
});

const emailWrong = ref(false);
const passwordWrong = ref(false);
const emailWrongMessage = ref("");
const passwordWrongMessage = ref("");

let errors = [];

const submit = () => {
  axios
    .post("/api/register", form.value)
    .then(() => {
      router.push({ name: "profile" });
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
