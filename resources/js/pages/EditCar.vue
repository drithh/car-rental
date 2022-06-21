<template>
  <transition name="page" @enter="onPageEnter" appear>
    <main class="relative -z-0" v-if="carInformation">
      <flash
        :open="flash"
        :message="flashMessage"
        @close="flash = false"
      ></flash>
      <section id="car" class="mx-auto mt-20 mb-10 flex w-[90vw] gap-10">
        <div class="mx-auto">
          <img
            class="h-fit max-h-80 w-fit"
            :src="carInformation.image_link"
            alt="car"
          />
        </div>
      </section>
      <section class="mx-auto mt-20 mb-10 flex w-[90vw] gap-10">
        <div id="detail" class="right-panel mx-auto w-1/2 font-Yantramanav">
          <div class="form grid grid-cols-2">
            <input-box
              :textvalue="carInformation.model"
              v-on:update:modelValue="(e) => (carInformation.model = e)"
              label="Model"
              placeholder="Fun Family"
              type="text"
            ></input-box>
            <input-box
              :textvalue="carInformation.type"
              v-on:update:modelValue="(e) => (carInformation.type = e)"
              label="Type"
              placeholder="SUV"
              type="text"
            ></input-box>
            <input-box
              :textvalue="carInformation.brand"
              v-on:update:modelValue="(e) => (carInformation.brand = e)"
              label="Brand"
              placeholder="Honda"
              type="text"
            ></input-box>
            <input-box
              :textvalue="carInformation.tahun_perolehan"
              v-on:update:modelValue="
                (e) => (carInformation.tahun_perolehan = e)
              "
              label="Tahun Perolehan"
              placeholder="2009"
              type="text"
            ></input-box>
            <input-box
              :textvalue="carInformation.no_polisi"
              v-on:update:modelValue="(e) => (carInformation.no_polisi = e)"
              label="Nomor Polisi"
              placeholder="B 12345 JUQ"
              type="text"
            ></input-box>
            <input-box
              :textvalue="carInformation.kapasitas"
              v-on:update:modelValue="(e) => (carInformation.kapasitas = e)"
              label="Kapasitas"
              placeholder="4"
              type="number"
            ></input-box>
            <input-box
              :textvalue="carInformation.harga_satuan"
              v-on:update:modelValue="(e) => (carInformation.harga_satuan = e)"
              label="Harga Satuan"
              placeholder="200000"
              type="number"
            ></input-box>
            <input-box
              :textvalue="carInformation.harga_sewa"
              v-on:update:modelValue="(e) => (carInformation.harga_sewa = e)"
              label="Harga Sewa"
              placeholder="200000"
              type="number"
            ></input-box>
            <input-box
              :textvalue="carInformation.tanggal_pajak"
              v-on:update:modelValue="(e) => (carInformation.tanggal_pajak = e)"
              label="Tanggal Pajak"
              placeholder="2020-01-01"
              type="text"
            ></input-box>
            <input-box
              :textvalue="carInformation.tipe_transmisi"
              v-on:update:modelValue="
                (e) => (carInformation.tipe_transmisi = e)
              "
              label="Tipe Transmisi"
              placeholder="Manual"
              type="text"
            ></input-box>
            <input-box
              :textvalue="carInformation.bahan_bakar"
              v-on:update:modelValue="(e) => (carInformation.bahan_bakar = e)"
              label="Bahan Bakar"
              placeholder="Diesel"
              type="text"
            ></input-box>
          </div>
          <div class="mt-10 mb-16 flex place-content-end pr-3">
            <button
              class="h-12 w-44 rounded-xl border border-secondary bg-darkencream py-2 px-10 text-xl opacity-70 hover:border-blue hover:opacity-100"
              @click="editCar"
            >
              Update
            </button>
          </div>
        </div>
      </section>
    </main>
  </transition>
</template>

<script setup>
import { onBeforeMount, onUpdated, ref, toRef, watch } from "vue";
import { useRoute, useRouter } from "vue-router";

import axios from "axios";
import Car from "@/components/booking/Car.vue";
import InputBox from "@/components/contact/InputBox.vue";
import Flash from "@/components/flash/Flash.vue";
import anime from "animejs";
import { onBeforeRouteLeave } from "vue-router";
const route = useRoute();

const flash = ref(false);
const flashMessage = ref("");

const pickUp = ref({
  location: "",
  date: new Date(),
});
const dropOff = ref({
  location: "",
  date: new Date(),
});

const updatePickUpDate = (newVal) => {
  pickUp.value.date = newVal;
};

const updateDropOffDate = (newVal) => {
  dropOff.value.date = newVal;
};
// const doneFetching = ref(false);

onBeforeMount(() => {
  loadCar();
});

const carInformation = ref({});

const loadCar = () => {
  axios.get(`/api/car/information/${route.params.id}`).then((res) => {
    carInformation.value = res.data[0];
    console.log(res.data[0]);
  });
};

const router = useRouter();

const editCar = () => {
  axios
    .post("/api/car/edit/confirm", {
      id: route.params.id,
      carInformation: carInformation.value,
    })
    .then((res) => {
      flash.value = true;
      setTimeout(() => {
        flash.value = false;
      }, 3000);
      flashMessage.value = res.data.message;
    });
};

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

const animateEnterCar = () => {
  animateHorizontal("#car", "100vw", "0", 0);
  animateHorizontal("#detail", "100vw", "0", 100);
};
const animateExitCar = () => {
  animateHorizontal("#car", "0", "-100vw", 0);
  animateHorizontal("#detail", "0", "-100vw", 100);
};

const onPageEnter = () => {
  animateEnterCar();
  animateVertical("#fleet", "100%", "0", 200);
};

onBeforeRouteLeave((to, from, next) => {
  animateExitCar();
  animateVertical("#fleet", "0", "100%", 200);

  setTimeout(() => {
    next();
  }, 800);
});
</script>
