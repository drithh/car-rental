<template>
  <transition name="page" @enter="onPageEnter" appear>
    <main class="relative -z-0" v-if="singleCar">
      <flash
        :open="flash"
        :message="flashMessage"
        @close="flash = false"
      ></flash>
      <section id="car" class="m-auto mt-20 mb-10 flex w-[90vw] gap-10">
        <div class="flex h-[28rem] min-h-max w-1/2 place-items-center">
          <div>
            <img class="h-fit w-fit" :src="singleCar.image_link" alt="car" />
          </div>
        </div>
        <div id="detail" class="right-panel w-1/2 font-Yantramanav">
          <div class="flex flex-row place-content-between">
            <div class="wrapper">
              <div class="car-name text-4xl font-bold text-dark">
                {{ singleCar.nama }}
              </div>
              <div
                class="car-name text-3xl font-medium text-dark text-opacity-50"
              >
                {{ singleCar.type }}
              </div>
            </div>
            <button
              v-if="isAdmin"
              class="h-8 w-32 rounded-md border border-secondary bg-darkencream py-1 px-4 text-base opacity-70 hover:border-blue hover:opacity-100"
              @click="editCar"
            >
              Edit Details
            </button>
          </div>

          <div
            class="detail my-8 border-y border-y-secondary border-opacity-30 py-4"
          >
            <div class="tersewa my-2 text-xl font-medium text-dark">
              <span class="opacity-50">Tersewa: </span>
              <span v-if="reviews" class="opacity-80">{{
                reviews.length
              }}</span>
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
      <section class="ulasan mx-auto mb-24 grid w-[90vw] grid-cols-2 gap-7">
        <div
          v-for="(review, index) in reviews"
          :key="index"
          class="gap-y flex flex-col rounded-lg border border-secondary border-opacity-30 p-4 font-Yantramanav"
        >
          <div class="text-lg font-semibold">{{ review.name }}</div>
          <div class="rating">
            <span class="text-xl font-medium text-dark">
              <font-awesome-icon
                icon="star"
                class="h-5 w-5 text-slate-300"
                :class="{ 'text-orange-200': review.nilai > 0 }"
              />
              <font-awesome-icon
                icon="star"
                class="h-5 w-5 text-slate-300"
                :class="{ 'text-orange-200': review.nilai > 1 }"
              />
              <font-awesome-icon
                icon="star"
                class="h-5 w-5 text-slate-300"
                :class="{ 'text-orange-200': review.nilai > 2 }"
              />
              <font-awesome-icon
                icon="star"
                class="h-5 w-5 text-slate-300"
                :class="{ 'text-orange-200': review.nilai > 3 }"
              />
              <font-awesome-icon
                icon="star"
                class="h-5 w-5 text-slate-300"
                :class="{ 'text-orange-200': review.nilai > 4 }"
              />
            </span>
          </div>
          <div class="tanggal opacity-50">{{ review.created_at }}</div>
          <div class="mt-2 opacity-75">
            {{ review.ulasan }}
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
import Flash from "@/components/flash/Flash.vue";
import anime from "animejs";
import { onBeforeRouteLeave } from "vue-router";
const route = useRoute();

const singleCar = ref(null);
const isAdmin = ref(false);
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

const checkUser = () => {
  axios.get("/api/is-admin").then((resp) => {
    isAdmin.value = resp.data;
  });
};

const reviews = ref(null);
onBeforeMount(() => {
  loadCar();
  checkUser();
});

const editCar = () => {
  router.push({
    name: "editCar",
    params: {
      id: route.params.id,
    },
  });
};

const loadCar = () => {
  pickUp.value.location = route.params.pickUpLocation
    ? route.params.pickUpLocation
    : "";
  dropOff.value.location = route.params.dropOffLocation
    ? route.params.dropOffLocation
    : "";
  pickUp.value.date = route.params.pickUpDate
    ? new Date(route.params.pickUpDate)
    : new Date();
  dropOff.value.date = route.params.dropOffDate
    ? new Date(route.params.dropOffDate)
    : new Date();
  axios.get(`/api/car/${route.params.id}`).then((res) => {
    singleCar.value = res.data[0];
  });
  axios.get(`/api/car/ulasan/${route.params.id}`).then((res) => {
    reviews.value = res.data;
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

const bookCar = () => {
  const tanggal_mulai = pickUp.value.date.toISOString().split("T")[0];
  const waktu_mulai = pickUp.value.date
    .toISOString()
    .split("T")[1]
    .split(".")[0];
  const tanggal_selesai = dropOff.value.date.toISOString().split("T")[0];
  const waktu_selesai = dropOff.value.date
    .toISOString()
    .split("T")[1]
    .split(".")[0];
  const tanggalSelesai = new Date(dropOff.value.date);
  var tanggal_harus_kembali = new Date(
    tanggalSelesai.setDate(tanggalSelesai.getDate() + 3)
  )
    .toISOString()
    .split("T")[0];
  const durasi = parseInt(
    (dropOff.value.date.getTime() - pickUp.value.date.getTime()) /
      (1000 * 60 * 60 * 24)
  );

  axios
    .post("/api/booking", {
      armada_id: route.params.id,
      tanggal_mulai: tanggal_mulai,
      waktu_mulai: waktu_mulai,
      tanggal_selesai: tanggal_selesai,
      waktu_selesai: waktu_selesai,
      tanggal_harus_kembali: tanggal_harus_kembali,
      tempat_mulai: pickUp.value.location,
      tempat_pengembalian: dropOff.value.location,
      durasi: durasi + 1,
    })
    .then((res) => {
      router.push({
        name: "books",
      });
      flash.value = true;
      setTimeout(() => {
        flash.value = false;
      }, 3000);
      flashMessage.value = res.data.message;
    })
    .catch((err) => {
      flash.value = true;
      setTimeout(() => {
        flash.value = false;
      }, 3000);
      flashMessage.value = "Isi formulir dengan benar";
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
