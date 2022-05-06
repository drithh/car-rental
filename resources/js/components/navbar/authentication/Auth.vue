<template>
  <teleport to="body">
    <transition name="overlay" @enter="wrapperModal = true">
      <div
        class="overlay absolute left-0 top-0 z-50 m-auto flex h-screen w-screen place-content-center place-items-center overflow-hidden bg-black bg-opacity-40"
        v-if="overlay"
      >
        <transition name="zoom" @after-leave="overlay = false">
          <auth-template v-if="wrapperModal" @closeMenu="closeMenu">
            <transition @enter="onModalEnter" @leave="onModalLeave">
              <login
                v-if="modal === 'login'"
                @register="changeModal('register')"
                @forgotPassword="changeModal('forgotPassword')"
              ></login>
            </transition>
            <transition @enter="onModalEnter" @leave="onModalLeave">
              <register
                v-if="modal === 'register'"
                @login="changeModal('login')"
              ></register>
            </transition>
            <transition @enter="onModalEnter" @leave="onModalLeave">
              <forgot-password
                v-if="modal === 'forgotPassword'"
                @login="changeModal('login')"
              ></forgot-password>
            </transition>
          </auth-template>
        </transition>
      </div>
    </transition>
  </teleport>
  <div
    class="cursor-pointer duration-700 ease-in-out hover:text-blue"
    @click="isModal('login')"
  >
    Login
  </div>
  <div>|</div>
  <div
    class="cursor-pointer duration-700 ease-in-out hover:text-blue"
    @click="isModal('register')"
  >
    Register
  </div>
</template>

<script setup>
import { ref } from "vue";
import Login from "@/components/navbar/authentication/Login.vue";
import Register from "@/components/navbar/authentication/Register.vue";
import ForgotPassword from "@/components/navbar/authentication/ForgotPassword.vue";
import AuthTemplate from "@/components/navbar/authentication/AuthTemplate.vue";
import anime from "animejs";

const modal = ref("");
const overlay = ref(false);
const wrapperModal = ref(false);
let transition = false;

const onModalEnter = (el, done) => {
  el.style.display = "none";
  setTimeout(() => {
    el.style.display = "block";
  }, 800);

  anime
    .timeline({
      easing: "linear",
      duration: 800,
      complete: done,
    })
    .add({
      targets: `#${el.id}`,
      translateX: ["150%", "0%"],
      easing: "easeInOutQuart",
      duration: 800,
      delay: 250,
    });
};
const onModalLeave = (el, done) => {
  anime
    .timeline({
      easing: "linear",
      duration: 800,
      complete: done,
    })
    .add({
      targets: `#${el.id}`,
      translateX: ["0%", "-150%"],
      easing: "easeInOutQuart",
      duration: 800,
      delay: 0,
    });
};

const animateVertical = (id, start, end, delay) => {
  anime({
    targets: id,
    translateY: [start, end],
    easing: "easeInOutQuart",
    duration: 800,
    delay: delay,
  }).finished;
};

const changeModal = (menu) => {
  transition = true;
  modal.value = menu;
  setTimeout(() => {
    transition = false;
  }, 500);
};

const isModal = (menu) => {
  modal.value = menu;
  overlay.value = true;
  document.documentElement.style = `overflow: hidden;`;
};

const closeMenu = () => {
  if (!transition) {
    wrapperModal.value = false;

    document.documentElement.style = `overflow: auto;`;
  }
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

.wrapper-enter-from,
.wrapper-leave-to {
  @apply opacity-0;
}

.wrapper-enter-to,
.wrapper-leave-from {
  @apply opacity-100;
}

.zoom-enter-active {
  @apply animate-scale-bounce-enter;
}

.zoom-leave-active {
  @apply animate-scale-bounce-leave duration-[0.4s];
}

.zoom-leave-to {
  @apply opacity-0;
}
</style>
