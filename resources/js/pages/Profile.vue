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
            :textvalue="profile.name"
            v-on:update:modelValue="
              (e) => {
                profile.name = e;
              }
            "
            label="Full Name"
            placeholder="Jane Doe"
            type="text"
          ></input-box>
          <input-box
            :textvalue="profile.email"
            v-on:update:modelValue="
              (e) => {
                profile.email = e;
              }
            "
            label="Email"
            placeholder="your@email.com"
            type="email"
          ></input-box>
          <div class="px-3">
            <label
              class="text-gray-700 mb-2 block font-Yantramanav text-lg font-medium tracking-wide opacity-70"
            >
              Jenis Kelamin
            </label>
            <v-select
              class="gender"
              v-model="profile.jenisKelamin"
              :options="gender"
              label="title"
            ></v-select>
          </div>
          <date-picker v-model="date" class="px-3">
            <template v-slot="{ inputValue, inputEvents }">
              <label
                class="text-gray-700 mb-2 block font-Yantramanav text-lg font-medium tracking-wide opacity-70"
              >
                Tanggal Lahir
              </label>
              <input
                class="text-gray-700 mb-3 block w-full appearance-none rounded-xl border border-secondary border-opacity-60 bg-darkencream bg-opacity-100 py-3 px-4 leading-tight opacity-70 focus:border-blue focus:bg-white focus:outline-none"
                :value="inputValue"
                v-on="inputEvents"
              />
            </template>
          </date-picker>
          <input-box
            :textvalue="profile.nik"
            v-on:update:modelValue="(e) => (profile.nik = e)"
            label="NIK"
            placeholder="5314196206960065"
            type="text"
          ></input-box>
          <input-box
            :textvalue="profile.alamat"
            v-on:update:modelValue="(e) => (profile.alamat = e)"
            label="Alamat"
            placeholder="Jl Makan Nasi Goreng"
            type="text"
          ></input-box>
          <input-box
            :textvalue="profile.notelpon"
            v-on:update:modelValue="(e) => (profile.notelpon = e)"
            label="Nomor Telepon"
            placeholder="0728 3894 127"
            type="text"
          ></input-box>
          <input-box
            :textvalue="profile.nowa"
            v-on:update:modelValue="(e) => (profile.nowa = e)"
            label="Nomor Whatsapp"
            placeholder="0728 3894 127"
            type="text"
          ></input-box>
          <div class="mt-4 mb-8 pl-3">
            <button
              class="w-36 rounded-xl border border-secondary border-opacity-60 bg-darkencream py-2 px-6 opacity-70 hover:border-blue hover:opacity-100"
              @click="updateProfile"
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
import { Calendar, DatePicker } from "v-calendar";
import vSelect from "vue-select";
import anime from "animejs";
import { onBeforeRouteLeave } from "vue-router";

const date = ref();
const inputValue = ref("");
const inputEvents = ref("");

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

const gender = [{ title: "Laki-Laki" }, { title: "Perempuan" }];

const profile = ref({
  name: "",
  email: "",
  jenisKelamin: "",
  tanggalLahir: "",
  nik: "",
  alamat: "",
  notelpon: "",
  nowa: "",
});
const username = ref("");
const email = ref("");
const lastLogin = ref();

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

const svg = ref("");

onMounted(() => {
  axios
    .get("/api/user")
    .then((res) => {
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

      profile.value = {
        name: res.data.name,
        email: res.data.email,
        jenisKelamin: res.data.jenis_kelamin,
        tanggalLahir: res.data.tanggal_lahir,
        nik: res.data.nik,
        alamat: res.data.alamat,
        notelpon: res.data.no_telp,
        nowa: res.data.no_wa,
      };

      date.value = new Date(res.data.tanggal_lahir);
    })
    .catch((err) => {
      console.log(err);
    });
});
const updateProfile = () => {
  console.log(profile.value);
  axios
    .put("/api/user", profile.value)
    .then((res) => {})
    .catch((err) => {
      console.log(err);
    });
};
</script>

<style>
@import "v-calendar/dist/style.css";
@import "vue-select/dist/vue-select.css";
</style>

<style lang="postcss">
.gender .vs__dropdown-toggle {
  @apply mb-3 appearance-none rounded-xl border border-secondary border-opacity-60 bg-darkencream bg-opacity-100  px-2 pt-[5px] pb-[9px]   focus:border-blue focus:bg-white focus:outline-none;
}
.gender .vs__selected {
  @apply opacity-70;
}
.gender .vs__dropdown-menu {
  @apply top-12 appearance-none rounded-xl leading-tight !text-opacity-70;
}
</style>
