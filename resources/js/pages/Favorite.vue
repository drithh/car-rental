<template>
  <transition name="page" @enter="onPageEnter" appear>
    <main class="">
      <section
        id="car-container"
        class="relative z-0 flex flex-col bg-cream pb-20"
      >
        <div
          id="title"
          class="my-12 text-center font-Yantramanav text-5xl font-black text-primary"
        >
          Your Favorites
        </div>
        <div class="flex place-content-center">
          <div class="flex w-[92vw] flex-row place-content-end gap-x-10 py-12">
            <div
              class="sticky top-12 h-fit min-w-[24rem] rounded-3xl border-2 border-secondary border-opacity-20 bg-darkencream p-6"
            >
              <div
                class="border-b-2 border-b-secondary border-opacity-20 pt-4 pb-6 text-3xl font-bold text-dark"
              >
                Filter By
              </div>
              <div class="filter-container py-6">
                <filter-type
                  v-for="(filter, index) in filters"
                  :key="index"
                  :filterType="filter.filterType"
                  :filterList="filter.filterList"
                ></filter-type>
              </div>
            </div>
            <div
              class="grid w-full grid-cols-[repeat(auto-fit,minmax(18rem,_max-content))] gap-10"
            >
              <car
                v-for="(car, index) in cars"
                :key="index"
                :name="car.nama"
                :type="car.type"
                :transmission="car.tipe_transmisi"
                :capacity="car.kapasitas"
                :price="Math.ceil(car.harga_sewa / 1000)"
                favorite="true"
              ></car>
            </div>
          </div>
        </div>
      </section></main
  ></transition>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import BookingForm from "@/components/booking/BookingForm.vue";
import Car from "@/components/booking/Car.vue";
import FilterType from "@/components/booking/FilterType.vue";
import anime from "animejs";
import { onBeforeRouteLeave } from "vue-router";
import axios from "axios";

const cars = ref([]);

onMounted(() => {
  axios
    .get("/api/favorite")
    .then((res) => {
      cars.value = res.data;
    })
    .catch((err) => {
      console.log(err);
    });
});

const filters = [
  {
    filterType: "Car Type",
    filterList: [
      "SUV (10)",
      "Sedan (15)",
      "Hatchback (18)",
      "MPV (10)",
      "Coupe (19)",
    ],
  },
  {
    filterType: "Capacity",
    filterList: ["2-4 (53)", "5 or more (20)"],
  },
  {
    filterType: "Transmission Type",
    filterList: ["Automatic", "Manual"],
  },
];

const header = ref("");

const animateCar = (start, end) => {
  anime({
    targets: "#car-container",
    translateY: [start, end],
    easing: "easeInOutQuart",
    duration: 800,
  }).finished;
};

const onPageEnter = () => {
  animateCar("100%", "0%");
};

onBeforeRouteLeave((to, from, next) => {
  animateCar("0%", "100%");

  setTimeout(() => {
    next();
  }, 800);
});
</script>
