<template>
  <transition name="page" @enter="onPageEnter" appear>
    <main class="overflow-hidden">
      <div class="header relative m-auto my-32 mt-48 w-full">
        <flash
          :open="flash"
          :message="flashMessage"
          @close="flash = false"
        ></flash>

        <div
          class="flex-between relative flex h-[32rem] w-full overflow-x-hidden overflow-y-hidden pl-[4vw]"
        >
          <div id="hero" class="hero-text flex w-[40vw] flex-col gap-16">
            <div
              class="text-[4.5rem] font-black leading-[4.2rem] text-primary opacity-90"
            >
              Temukan mobil rental terbaik untuk kamu
            </div>
            <div
              class="text-justify text-3xl font-medium text-primary opacity-90"
            >
              Menyewa mobil memberi Anda kebebasan, dan kami akan membantu anda
              menemukan mobil terbaik dengan harga terjangkau.
            </div>
            <router-link
              to="/booking"
              class="book-now flex h-14 w-60 place-content-center self-end rounded-3xl border-2 border-primary py-3 px-10 text-xl font-bold text-primary transition-all duration-500 hover:border-blue hover:text-blue hover:opacity-60"
            >
              Book Now
            </router-link>
          </div>
          <div class="hero-image flex flex-col">
            <img
              id="car"
              :src="require(`public/images/car/mustang.jpg`).default"
              class="absolute top-[-4rem] h-[40rem] w-auto scale-x-[-1]"
            />
          </div>
        </div>
      </div>
      <div class="mt-40 bg-white">
        <div class="wrapper m-auto flex flex-col gap-y-20 lg:w-[75vw]">
          <section
            id="why-us"
            class="why-us mt-32 flex flex-col place-content-center place-items-center"
          >
            <div
              class="font-Yantramanav text-[5rem] font-extrabold text-primary"
            >
              Mengapa Menyewa Dengan Kami?
            </div>
            <div class="wrapper mt-20 mb-32 flex w-full place-content-between">
              <why-us
                title="Check-in super cepat"
                description="Tidak menunggu. Tidak ada antrian. Dapatkan mengemudi dengan mobil sewaan Anda dalam waktu kurang dari 15 menit."
                image="clock"
              ></why-us>
              <why-us
                title="Tidak perlu kartu kredit"
                description="Kami tidak mengambil uang Asuransi dari kartu kredit Anda saat mengambil mobil."
                image="credit-card"
              ></why-us>
              <why-us
                title="Tidak ada biaya tambahan"
                description="Tidak ada kejutan buruk atau biaya tak terduga saat Anda mengambil mobil sewaan Anda."
                image="money-bag"
              ></why-us>
            </div>
          </section>
        </div>
      </div>

      <div id="cream" class="bg-cream">
        <div class="wrapper m-auto flex flex-col gap-y-20 lg:w-[75vw]">
          <section class="services mt-32 flex flex-col place-items-center">
            <div
              class="self-start text-left font-Yantramanav font-extrabold text-primary"
            >
              <div class="text-[3rem] leading-8">Ini yang kamu dapatkan</div>
              <div class="text-[4rem]">Secara Gratis</div>
              <div
                class="mt-10 w-1/2 text-justify text-2xl font-medium text-secondary"
              >
                Manfaatkan layanan yang dipersonalisasi tanpa menghabiskan
                terlalu banyak. Di Car Rental Kami, Anda adalah prioritas utama
                kami. Pesan mobil sewaan terjangkau Anda hari ini dan manfaatkan
                layanan premium Gratis kami.
              </div>
            </div>
            <div class="wrapper my-16 flex w-full place-content-between">
              <what-you-get
                title="Kilometer gratis tanpa batas"
                description="Berkendara sejauh yang Anda inginkan secara gratis. Tidak ada batasan!"
                image="speed"
              ></what-you-get>
              <what-you-get
                title="Gratis Bantuan Mekanik"
                description="Jika terjadi keadaan yang tidak terduga, Anda akan mendapatkan bantuan mekanik langsung secara gratis."
                image="mechanic"
              ></what-you-get>
              <what-you-get
                title="Pengiriman mobil ke hotel gratis"
                description="Anda dapat menerima atau mengembalikan mobil sewaan di akomodasi Anda secara gratis."
                image="hotel"
              ></what-you-get>
            </div>
          </section>
          <section class="fleet mt-20 flex flex-col place-items-center">
            <div
              class="font-Yantramanav text-[5rem] font-extrabold text-primary"
            >
              Armada Kami
            </div>
            <div class="wrapper my-20 flex w-full place-content-center">
              <fleet></fleet>
            </div>
          </section>
          <section
            class="m-auto mb-48 flex h-[30rem] w-full flex-col place-content-center place-items-center rounded-3xl bg-primary py-10"
          >
            <div class="font-Yantramanav text-[4rem] font-extrabold text-white">
              Drive With Us Today
            </div>
            <div class="text-3xl font-medium text-white">
              Pesan mobil Anda hari ini dan nikmati layanan gratis kami.
            </div>
            <router-link
              to="/booking"
              class="book-now mx-auto my-10 h-14 rounded-3xl border-secondary bg-cream py-3 px-10 text-xl font-bold"
            >
              Book Now
            </router-link>
          </section>
        </div>
      </div>
    </main></transition
  >
</template>

<script setup>
import WhyUs from "@/components/home/WhyUs.vue";
import WhatYouGet from "@/components/home/WhatYouGet.vue";
import BottomBorder from "@/components/BottomBorder.vue";
import Fleet from "@/components/home/Fleet.vue";
import Flash from "@/components/flash/Flash.vue";

import anime from "animejs";
import { onBeforeRouteLeave } from "vue-router";
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

const flash = ref(false);
const flashMessage = ref("");

onMounted(() => {
  if (route.params) {
    if (route.params.result === "success") {
      setTimeout(() => {
        flash.value = true;
      }, 1000);
      setTimeout(() => {
        flash.value = false;
      }, 5000);
      if (route.params.message == "email-verified") {
        flashMessage.value = "Email Anda telah diverifikasi";
      }
    }
  }
});

const animateHorizontal = (id, start, end, delay) => {
  anime({
    targets: id,
    translateX: [start, end],
    easing: "easeInOutQuart",
    duration: 800,
    delay: delay,
  });
};

const animateVertical = (id, start, end, delay) => {
  anime({
    targets: id,
    translateY: [start, end],
    easing: "easeInOutQuart",
    duration: 800,
    delay: delay,
  });
};

const animateCar = (id, start, end, delay) => {
  anime({
    targets: id,
    translateX: [start, end],
    scaleX: -1,
    easing: "easeInOutQuart",
    duration: 800,
    delay: delay,
  });
};

const onPageEnter = () => {
  animateHorizontal("#hero", "100vw", "0", 0);
  animateCar("#car", "100vw", "0", 100);
  animateHorizontal("#why-us", "100vw", "0", 0);
  animateVertical("#cream", "100%", "0", 0);
};

onBeforeRouteLeave((to, from, next) => {
  animateHorizontal("#hero", "0", "-100vw", 0);
  animateCar("#car", "0", "-200vw", 100);
  animateHorizontal("#why-us", "0", "-100vw", 0);
  animateVertical("#cream", "0", "100%", 0);
  setTimeout(() => {
    next();
  }, 800);
});
</script>
