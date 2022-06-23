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
                  :filterCollection="filter.filterCollection"
                  @toggleCheckbox="toggleCheckbox"
                ></filter-type>
              </div>
            </div>
            <div
              class="grid w-full grid-cols-[repeat(auto-fit,minmax(18rem,_max-content))] gap-10"
            >
              <car
                v-for="(car, index) in allCars"
                :key="index"
                :id="car.id"
                :name="car.nama"
                :type="car.type"
                :transmission="car.tipe_transmisi"
                :capacity="car.kapasitas"
                :price="Math.ceil(car.harga_sewa / 1000)"
                :favorite="true"
                :imageLink="car.image_link"
              ></car>
            </div>
          </div>
        </div>
      </section></main
  ></transition>
</template>
fix favorite
<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import BookingForm from "@/components/booking/BookingForm.vue";
import Car from "@/components/booking/Car.vue";
import FilterType from "@/components/booking/FilterType.vue";
import anime from "animejs";
import { onBeforeRouteLeave } from "vue-router";
import axios from "axios";

const allCars = ref([]);

const cars = ref();

onMounted(() => {
  axios
    .get("/api/favorite")
    .then((res) => {
      allCars.value = res.data;
      cars.value = res.data;

      filters.value = [
        {
          filterType: "Car Type",
          filterCollection: [
            ...new Set(allCars.value.map((car) => car.type)),
          ].map((type) => {
            return { name: type, check: false };
          }),
        },
        ...filters.value,
      ];
    })
    .catch((err) => {
      console.log(err);
    });
});

const filters = ref([
  {
    filterType: "Capacity",
    filterCollection: [
      { name: "2-4", check: false },
      { name: "5 or more", check: false },
    ],
  },
  {
    filterType: "Transmission Type",
    filterCollection: [
      { name: "Automatic", check: false },
      { name: "Manual", check: false },
    ],
  },
]);

const toggleCheckbox = (type, name) => {
  filters.value.forEach((filter) => {
    if (filter.filterType === type) {
      filter.filterCollection.forEach((item) => {
        if (item.name === name) {
          item.check = !item.check;
        }
      });
    }
  });
  updateFilter();
};

const updateFilter = () => {
  const filter = filters.value.map((filter) => {
    return {
      filterType: filter.filterType,
      filterCollection: filter.filterCollection.filter((item) => {
        return item.check;
      }),
    };
  });

  let filterEnabled = false;

  let carFilterType = "";
  let carFilterSize = 0;
  let carFilterTransmission = 0;
  cars.value = [];
  filter.forEach((filter, i) => {
    filter.filterCollection.forEach((item) => {
      if (item.check) {
        switch (filter.filterType) {
          case "Car Type":
            carFilterType += `${item.name}|`;
            break;
          case "Capacity":
            if (item.name === "2-4") {
              carFilterSize = 1;
            } else {
              carFilterSize = 2;
            }
            break;
          case "Transmission Type":
            if (item.name === "Automatic") {
              carFilterTransmission = 1;
            } else if (item.name === "Manual") {
              carFilterTransmission = 2;
            }
            break;
        }
      }
    });
  });
  const carFilter = ["type", "kapasitas", "tipe_transmisi"];

  cars.value = allCars.value.filter((car) => {
    let filterType = true;
    let filterSize = true;
    let filterTransmission = true;

    if (carFilterType.length) {
      filterType = toLower(carFilterType).includes(toLower(car["type"]));
    }

    if (carFilterSize === 1) {
      filterSize = car["kapasitas"] >= 2 && car["kapasitas"] <= 4;
    } else if (carFilterSize === 2) {
      filterSize = car["kapasitas"] >= 5;
    }

    if (carFilterTransmission === 1) {
      filterTransmission = car["tipe_transmisi"] === "automatic";
    } else if (carFilterTransmission === 2) {
      filterTransmission = car["tipe_transmisi"] === "manual";
    }

    return filterType && filterSize && filterTransmission;
  });
  // cars.value = new Set([...filteredCars, ...cars.value]);
  // console.log(cars.value);
  // if (!filterEnabled) {
  //   cars.value = allCars.value;
  // }
};

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
