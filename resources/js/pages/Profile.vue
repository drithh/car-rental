<template>
  <transition name="page" @enter="onPageEnter" appear>
    <main>
      <section
        id="profile"
        class="profile py-14xl my-8 flex h-[30rem] flex-row place-content-center place-items-center gap-[7%]"
      >
        <img
          class="rounded-full border border-secondary hover:border-opacity-70"
          alt="Avatar"
          :src="svg"
        />
        <div class="flex flex-col gap-y-2">
          <div class="flex text-4xl">
            Howdy,&nbsp;
            <div class="font-bold">{{ username }}</div>
            !
          </div>
          <div class="flex text-2xl">
            Last login&nbsp;
            <div class="font-bold">{{ lastLogin }}</div>
          </div>
        </div>
      </section>
      <section class="form flex w-full place-content-center gap-16 px-6">
        <div
          id="update-profile"
          class="input-container mt-10 flex w-2/5 flex-col gap-y-4"
        >
          <div class="my-2 pl-3 text-2xl font-semibold">Edit Profile</div>

          <input-box
            :textvalue="fullname"
            label="Full Name"
            placeholder="Jane Doe"
            type="text"
            v-model="formProfile.name"
          ></input-box>
          <input-box
            label="Email"
            placeholder="your@email.com"
            type="email"
            v-model="formProfile.email"
          ></input-box>
          <div class="mt-4 mb-8 pl-3">
            <button
              class="w-36 rounded-xl border border-secondary border-opacity-60 bg-darkencream py-2 px-6 opacity-70 hover:border-blue hover:opacity-100"
              @click="updatePassword"
            >
              Update
            </button>
          </div>
        </div>
        <div
          id="update-password"
          class="input-container mt-10 flex w-2/5 flex-col gap-y-4"
        >
          <div class="my-2 pl-3 text-2xl font-semibold">Change Password</div>

          <div class="password relative">
            <input-box
              label="Current Password"
              placeholder="password"
              :type="visibility"
              v-model="formPassword.currentPassword"
            ></input-box>
            <font-awesome-icon
              @click="togglePasswordVisibility"
              class="absolute right-6 top-12 h-5 w-8 cursor-pointer opacity-10"
              :icon="icon"
            />
          </div>
          <div class="password relative">
            <input-box
              label="New Password"
              placeholder="password"
              :type="visibility"
              v-model="formPassword.newPassword"
            ></input-box>
            <font-awesome-icon
              @click="togglePasswordVisibility"
              class="absolute right-6 top-12 h-5 w-8 cursor-pointer opacity-10"
              :icon="icon"
            />
          </div>
          <div class="mt-4 mb-8 pl-3">
            <button
              class="w-36 rounded-xl border border-secondary border-opacity-60 bg-darkencream py-2 px-6 opacity-70 hover:border-blue hover:opacity-100"
              @click="updatePassword"
            >
              Update
            </button>
          </div>
        </div>
      </section>
      <bottom-border></bottom-border>
    </main>
  </transition>
</template>

<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";
import InputBox from "@/components/contact/InputBox.vue";
import BottomBorder from "@/components/BottomBorder.vue";
import anime from "animejs";
import { onBeforeRouteLeave } from "vue-router";

const animateHorizontal = (id, start, end, delay) => {
  anime({
    targets: id,
    translateX: [start, end],
    easing: "easeInOutQuart",
    duration: 800,
    delay: delay,
  });
};

const onPageEnter = () => {
  animateHorizontal("#profile", "100vw", "0", 0);
  animateHorizontal("#update-profile", "100vw", "0", 100);
  animateHorizontal("#update-password", "100vw", "0", 200);
};

onBeforeRouteLeave((to, from, next) => {
  animateHorizontal("#profile", "0", "-100vw", 0);
  animateHorizontal("#update-profile", "0", "-100vw", 100);
  animateHorizontal("#update-password", "0", "-100vw", 200);

  setTimeout(() => {
    next();
  }, 800);
});

let formProfile = {
  name: String,
  email: String,
};

let formPassword = {
  currentPassword: String,
  newPassword: String,
};

import { createAvatar } from "@dicebear/avatars";
import * as style from "@dicebear/adventurer-neutral";

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
let fullname = "";
const username = ref("");
const email = ref("");
const lastLogin = ref();

const svg = ref("");

onMounted(() => {
  axios
    .get("/api/user")
    .then((res) => {
      console.log(res.data);
      username.value = res.data.name;
      email.value = res.data.email;
      let login = Math.ceil(
        Math.abs(new Date() - new Date(res.data.last_login_at)) / 1000 / 60
      );

      lastLogin.value = `${login} ${login == 1 ? "minute" : "minutes"} ago`;
      svg.value = createAvatar(style, {
        seed: username.value,
        dataUri: true,
        size: 352,
      });

      fullname = username.value;
      console.log(fullname);
    })
    .catch((err) => {
      console.log(err);
    });
});
</script>
