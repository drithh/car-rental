<script setup>
import Contact from "components/contact/Contact.vue";
import InputBox from "components/contact/InputBox.vue";
import BottomBorder from "components/BottomBorder.vue";
import FilterCheckbox from "components/booking/FilterCheckbox.vue";
import anime from "animejs";
import { onBeforeRouteLeave } from "vue-router";

const emit = defineEmits("close");

const close = () => {
  emit("close");
};

// const animateContactInformation = (start, end) => {
//   anime({
//     targets: "#contact-information",
//     translateX: [start, end],
//     easing: "easeInOutQuart",
//     duration: 800,
//   }).finished;
// };
// const animateGetInTouch = (start, end) => {
//   anime({
//     targets: "#get-in-touch",
//     translateX: [start, end],
//     easing: "easeInOutQuart",
//     duration: 800,
//     delay: 100,
//   }).finished;
// };

// const onPageEnter = () => {
//   animateContactInformation("100vw", "0");
//   animateGetInTouch("100vw", "0");
// };

// onBeforeRouteLeave((to, from, next) => {
//   animateContactInformation("0", "-100vw");
//   animateGetInTouch("0", "-100vw");

//   setTimeout(() => {
//     next();
//   }, 800);
// });
</script>

<template>
  <main
    class="absolute left-0 top-0 flex h-screen w-full place-items-center bg-black bg-opacity-10"
  >
    <section
      class="contact m-auto flex h-max flex-row place-content-center gap-x-20 bg-opacity-100"
    >
      <div
        class="relative w-[36rem] rounded-3xl border border-secondary border-opacity-70 bg-white p-8"
        id="login"
        v-click-away="close"
      >
        <div class="close absolute right-6 top-6 text-secondary">
          <font-awesome-icon
            @click="close"
            class="h-6 w-6 cursor-pointer"
            :icon="['far', 'circle-xmark']"
          />
        </div>

        <div class="text-center font-Yantramanav text-5xl font-bold opacity-80">
          Welcome
        </div>
        <div class="text-center text-2xl opacity-80">
          Sign in to your account
        </div>
        <div class="input-container mt-10 flex flex-col gap-y-4">
          <input-box
            label="Email"
            placeholder="your@email.com"
            type="email"
          ></input-box>
          <input-box
            label="Password"
            placeholder="password"
            type="password"
          ></input-box>
          <div class="flex w-full place-content-between px-3 text-lg">
            <div class="remember-me">
              <filter-checkbox class="text-secondary" filterName="remember me?">
              </filter-checkbox>
            </div>
            <div class="forgot text-blue opacity-70">forgot password?</div>
          </div>

          <button class="mt-6 flex w-full place-content-end">
            <div
              class="w-36 rounded-xl border border-secondary border-opacity-60 bg-darkencream py-2 px-6 opacity-70 hover:border-blue hover:opacity-100"
            >
              Submit
            </div>
          </button>
        </div>
      </div>
    </section>
  </main>
</template>
