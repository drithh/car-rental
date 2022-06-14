<template>
  <transition name="page" @enter="onPageEnter" appear>
    <main class="relative -z-0" v-if="singleCar">
      <section id="car" class="m-auto my-20 flex w-[90vw] gap-10">
        <div class="flex h-[28rem] min-h-max w-1/2 place-items-center">
          <div>
            <img
              class="h-fit w-fit"
              src="../../../public/images/car/mustang.jpg"
              alt="car"
            />
          </div>
        </div>
        <div id="detail" class="right-panel w-1/2 font-Yantramanav">
          <div class="car-name text-4xl font-bold text-dark">
            {{ singleCar.nama }}
          </div>
          <div class="car-name text-3xl font-medium text-dark text-opacity-50">
            {{ singleCar.type }}
          </div>
          <div
            class="detail my-8 border-y border-y-secondary border-opacity-30 py-4"
          >
            <div class="tersewa my-2 text-xl font-medium text-dark">
              <span class="opacity-50">Tersewa: </span>
              <span class="opacity-80">20</span>
            </div>
            <div class="harga my-2 text-xl font-medium text-dark">
              <span class="opacity-50">Harga: </span>
              <span class="opacity-80"
                >Rp.{{ singleCar.harga_sewa }} per hari</span
              >
            </div>
            <div class="transmisi my-2 text-xl font-medium text-dark">
              <span class="opacity-50">Transmisi: </span>
              <span class="opacity-80">{{ singleCar.tipe_transmisi }}</span>
            </div>
            <div class="transmisi my-2 text-xl font-medium text-dark">
              <span class="opacity-50">Kapasitas: </span>
              <span class="opacity-80">{{ singleCar.kapasitas }}</span>
            </div>
          </div>
          <div
            id="book-panel"
            class="grid min-h-[20rem] w-full grid-cols-1 gap-8"
          >
            <booking-form
              v-model="pickUp.location"
              @update:date="updatePickUpDate"
              :date="pickUp.date"
              text="Pick-up"
            ></booking-form>
            <booking-form
              v-model="dropOff.location"
              @update:date="updateDropOffDate"
              :date="dropOff.date"
              text="Drop-off"
            ></booking-form>
          </div>
          <div class="mt-10 mb-16 flex place-content-end">
            <button
              class="h-12 w-44 rounded-xl border border-secondary bg-darkencream py-2 px-10 text-xl opacity-70 hover:border-blue hover:opacity-100"
              @click="bookCar"
            >
              Book
            </button>
          </div>
        </div>
      </section>
      <section
        id="fleet"
        class="fleet relative -z-10 mx-auto mt-10 flex flex-col place-content-center place-items-center bg-cream pb-10"
      >
        <div class="w-4/5 py-16">
          <div
            class="text-center font-Yantramanav text-[4rem] font-extrabold text-primary"
          >
            Armada Kami Yang Lain
          </div>
          <div class="wrapper my-5 flex w-full place-content-center">
            <fleet @openFleetCar="openCar"></fleet>
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
import Fleet from "@/components/home/Fleet.vue";
import Car from "@/components/booking/Car.vue";
import BookingForm from "@/components/booking/BookingForm.vue";
import anime from "animejs";
import { onBeforeRouteLeave } from "vue-router";
const route = useRoute();

const singleCar = ref(null);

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

const loadCar = () => {
  pickUp.value.location = route.params.pickUpLocation;
  dropOff.value.location = route.params.dropOffLocation;
  pickUp.value.date = route.params.pickUpDate;
  dropOff.value.date = route.params.dropOffDate;
  axios.get(`/api/car/${route.params.id}`).then((res) => {
    singleCar.value = res.data[0];
  });
};

watch(
  () => route.params,
  (param) => {
    animateExitCar();
    document.querySelector("header").scrollIntoView({
      behavior: "smooth",
    });
    loadCar();
    setTimeout(() => {
      animateEnterCar();
    }, 400);
  }
);

const router = useRouter();

const openCar = (id) => {
  router.push({
    name: "singleCar",
    params: {
      id: id,
      pickUpLocation: pickUp.value.location,
      pickUpDate: pickUp.value.date,
      dropOffLocation: dropOff.value.location,
      dropOffDate: dropOff.value.date,
    },
  });
};

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
