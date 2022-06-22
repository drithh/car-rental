<template>
  <teleport to="body">
    <transition name="overlay">
      <div
        class="absolute left-0 top-0 flex h-screen w-screen place-content-center place-items-center"
      >
        <div
          class="relative flex h-fit w-fit flex-col place-items-center rounded-3xl border border-secondary border-opacity-70 bg-white py-10 px-14 transition-all"
          v-click-away="close"
        >
          <div id="reset-password">
            <div
              class="text-center font-Yantramanav text-5xl font-bold opacity-80"
            >
              Reset Password
            </div>
            <div class="input-container mt-10 flex flex-col gap-y-4">
              <input-box
                label="Email"
                placeholder="your@email.com"
                type="email"
                :textvalue="form.email"
                v-on:update:modelValue="(e) => (form.email = e)"
              ></input-box>
              <div class="password relative">
                <input-box
                  label="Password"
                  placeholder="password"
                  type="password"
                  :textvalue="form.password"
                  v-on:update:modelValue="(e) => (form.password = e)"
                ></input-box>
              </div>
              <div class="password relative">
                <input-box
                  label="Retype Password"
                  placeholder="password"
                  type="password"
                  :textvalue="form.confirmPassword"
                  v-on:update:modelValue="(e) => (form.confirmPassword = e)"
                ></input-box>
              </div>

              <div
                class="mt-2 flex w-full place-content-end place-items-center px-3"
              >
                <button
                  class="w-36 rounded-xl border border-secondary border-opacity-60 bg-darkencream py-2 px-6 opacity-70 hover:border-blue hover:opacity-100"
                  @click="resetPassword"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </teleport>
</template>

<script setup>
import anime from "animejs";
import { onBeforeRouteLeave } from "vue-router";
import vSelect from "vue-select";
import axios from "axios";
import { onMounted, ref } from "vue";
import InputBox from "@/components/contact/InputBox.vue";
import { useRouter } from "vue-router";

const router = useRouter();

const props = defineProps({
  token: "",
});

const resetPassword = () => {
  axios
    .post("/api/reset-password", {
      token: props.token,
      email: form.value.email,
      password: form.value.password,
      password_confirmation: form.value.confirmPassword,
    })
    .then(() => {
      close();
    })
    .catch((err) => {
      flash.value = true;
      flashMessage.value = err.response.data.message;
    });
};

const form = ref({
  email: "",
  password: "",
  confirmPassword: "",
});

const emit = defineEmits(["closeMenu"]);

const close = () => {
  emit("closeMenu");
};
</script>

<style lang="postcss">
.overlay-enter-from,
.overlay-leave-to {
  @apply opacity-0;
}

.overlay-enter-active,
.overlay-leave-active {
  @apply transition-all duration-500;
}
.overlay-enter-to,
.overlay-leave-from {
  @apply opacity-100;
}

.keterangan .vs__dropdown-toggle {
  @apply mb-3 appearance-none rounded-xl border border-secondary border-opacity-60 bg-darkencream bg-opacity-100  px-2 pt-[5px] pb-[9px]   focus:border-blue focus:bg-white focus:outline-none;
}
.keterangan .vs__selected {
  @apply opacity-70;
}
.keterangan .vs__dropdown-menu {
  @apply top-12 appearance-none rounded-xl leading-tight !text-opacity-70;
}
</style>
