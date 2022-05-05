<template>
  <transition name="page" @enter="onPageEnter" appear>
    <main class="overflow-hidden">
      <section
        class="faq relative m-auto my-14 flex flex-col place-content-center place-items-center gap-y-16 lg:w-[60vw]"
      >
        <div
          id="title"
          class="my-6 font-Yantramanav text-[3rem] font-black text-primary opacity-90"
        >
          Tentang Kami
        </div>
        <div
          id="sejarah"
          class="wrapper flex flex-col place-content-start gap-y-4"
        >
          <div
            class="font-Yantramanav text-4xl font-bold text-primary opacity-90"
          >
            Sejarah
          </div>
          <div
            class="text-justify font-Yantramanav text-2xl text-primary opacity-70"
          >
            Sejak didirikan pada tahun 2022, RENTAL telah berkembang dengan
            sangat pesat dalam waktu dekat. Dengan harga yang terjangkau serta
            lokasi yang strategis, RENTAL telah menjadi pilihan andalan bagi
            banyak orang, senantiasa melayani kebutuhan anda di manapun dan
            kapanpun.
          </div>
        </div>
        <div
          id="misi"
          class="wrapper flex flex-col place-content-start gap-y-4"
        >
          <div
            class="font-Yantramanav text-4xl font-bold text-primary opacity-90"
          >
            Misi
          </div>
          <div
            class="text-justify font-Yantramanav text-2xl text-primary opacity-70"
          >
            Kami berdedikasi dalam memberikan anda pelayanan yang terbaik,
            menyesuaikan dengan keinginan dan keperluan anda. Variasi armada
            yang kami miliki mencakup berbagai macam jenis kendaraan, mulai dari
            mobil listrik ramah lingkungan hingga mobil berkapasitas penumpang
            tinggi, kepuasan anda pasti terjamin.
          </div>
        </div>
      </section>
      <bottom-border></bottom-border></main
  ></transition>
</template>

<script setup>
import anime from "animejs";
import { onBeforeRouteLeave } from "vue-router";
import BottomBorder from "components/BottomBorder.vue";

const animateHorizontal = (id, start, end, delay) => {
  anime({
    targets: id,
    translateX: [start, end],
    easing: "easeInOutQuart",
    duration: 800,
    delay: delay,
  }).finished;
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

const onPageEnter = () => {
  animateHorizontal("#title", "100vw", "0", 0);
  animateHorizontal("#sejarah", "100vw", "0", 100);
  animateHorizontal("#misi", "100vw", "0", 200);
};

onBeforeRouteLeave((to, from, next) => {
  animateHorizontal("#title", "0", "-100vw", 0);
  animateHorizontal("#sejarah", "0", "-100vw", 100);
  animateHorizontal("#misi", "0", "-100vw", 200);

  setTimeout(() => {
    next();
  }, 800);
});
</script>
