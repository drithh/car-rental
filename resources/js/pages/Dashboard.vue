<template>
  <transition name="page" @enter="onPageEnter" appear>
    <div id="page" class="container mx-auto mt-12">
      <div class="grid grid-cols-12 gap-5">
        <div class="col-span-12 xl:col-span-4">
          <BaseCard>
            <div class="align-center flex">
              <i class="i-Add-User text-6xl text-purple-200"></i>
              <div class="m-auto">
                <p class="text-gray-400">User</p>
                <p class="text-xl text-blue">{{ data.totalUser }}</p>
              </div>
            </div>
          </BaseCard>
        </div>
        <div class="col-span-12 xl:col-span-4">
          <BaseCard>
            <div class="align-center flex">
              <i class="i-Financial text-6xl text-purple-200"></i>
              <div class="m-auto">
                <p class="text-gray-400">Pendapatan</p>
                <p class="text-xl text-blue">
                  Rp.{{
                    data.pendapatan > 1000
                      ? data.pendapatan / 1000 + " Juta"
                      : data.pendapatan + " Ribu"
                  }}
                </p>
              </div>
            </div>
          </BaseCard>
        </div>
        <div class="col-span-12 xl:col-span-4">
          <BaseCard>
            <div class="align-center flex">
              <i class="i-Car-2 text-6xl text-purple-200"></i>
              <div class="m-auto">
                <p class="text-gray-400">Orders</p>
                <p class="text-xl text-blue">{{ data.totalBooking }}</p>
              </div>
            </div>
          </BaseCard>
        </div>
        <div
          class="col-span-12 md:col-span-6 xl:col-span-8"
          v-if="dataTahunan.loaded"
        >
          <BaseCard>
            <h4 class="card-title mb-4">Pendapatan Setahun Terakhir</h4>
            <apexchart
              type="bar"
              height="255"
              :options="dataTahunan.chartOptions"
              :series="dataTahunan.series"
            ></apexchart>
          </BaseCard>
        </div>
        <div
          class="col-span-12 md:col-span-6 xl:col-span-4"
          v-if="dataTipe.loaded"
        >
          <BaseCard>
            <h4 class="card-title mb-4">Pendapatan Sesuai Tipe Mobil</h4>
            <apexchart
              type="pie"
              height="290"
              :options="dataTipe.chartOptions"
              :series="dataTipe.series"
            ></apexchart>
          </BaseCard>
        </div>
        <div
          class="col-span-12 lg:col-span-6 xl:col-span-6"
          v-if="dataBulan.loaded"
        >
          <BaseCard noPadding class="overflow-hidden">
            <div class="p-5">
              <div class="text-gray-500">Pendapatan Sebulan Terakhir</div>
              <p class="m-0 text-2xl text-blue">
                Rp.{{
                  pendapatanBulanan > 100
                    ? pendapatanBulanan / 1000 + " Juta"
                    : pendapatanBulanan + " Ribu"
                }}
              </p>
            </div>
            <div id="basicArea-chart">
              <apexchart
                type="area"
                height="270"
                :options="dataBulan.chartOptions"
                :series="dataBulan.series"
              />
            </div>
          </BaseCard>
        </div>
        <div class="col-span-12 lg:col-span-6 xl:col-span-6" v-if="mobilDisewa">
          <BaseCard>
            <div class="card-title mb-4">Mobil Yang Sering Disewa</div>
            <div
              v-for="(item, index) in mobilDisewa.car"
              :key="index"
              class="mb-4 flex flex-col items-center md:flex-row"
            >
              <img
                class="avatar-md mr-2 h-20 w-44 rounded"
                :src="require(`public/images/car/mustang.jpg`).default"
                alt=""
              />
              <div class="flex-grow text-center md:text-left">
                <h5>
                  <router-link to="" class="text-gray-800 hover:text-blue">
                    {{ item.nama }}
                  </router-link>
                </h5>
                <p class="text-gray-400 mb-3 text-xs md:mb-0">
                  {{ item.type }}
                </p>
                <div class="mb-4 flex justify-center md:mb-0 md:justify-start">
                  <p class="mr-2 text-sm text-blue">
                    Rp.{{ item.harga_sewa / 1000 }}K
                  </p>
                </div>
              </div>
              <BaseBtn
                sm
                class="rounded-full border border-blue text-blue hover:bg-blue hover:text-white"
                @click="openCar(item.id)"
                >View Details</BaseBtn
              >
            </div>
          </BaseCard>
        </div>
      </div>
    </div>
  </transition>
  <BottomBorder />
</template>

<script setup>
import { DataTahunan, DataTipe, DataBulan } from "@/data/dashboard.js";
import Breadcrumbs from "@/components/dashboard/Breadcrumbs.vue";
import BaseBtn from "@/components/dashboard/BaseBtn.vue";
import BaseCard from "@/components/dashboard/BaseCard.vue";
import BottomBorder from "@/components/BottomBorder.vue";
import { onMounted, ref } from "vue";
import axios from "axios";
import anime from "animejs";
import { onBeforeRouteLeave, useRouter } from "vue-router";

const router = useRouter();

const data = ref({});
const dataTahunan = ref(DataTahunan);
const dataTipe = ref(DataTipe);
const dataBulan = ref(DataBulan);
const pendapatanBulanan = ref(0);
const mobilDisewa = ref({});
onMounted(() => {
  axios.get("/api/dashboard/data").then((res) => {
    data.value = res.data;
  });

  axios.get("/api/dashboard/data/tahunan").then((res) => {
    const data = res.data.pendapatan;
    const series = [];
    const chartType = [];
    for (let i = 0; i < 24; i++) {
      if (data[i]) {
        series.push(data[i].pendapatan);
        chartType.push(data[i].bulan);
      }
    }
    dataTahunan.value.series[0].data = series;
    dataTahunan.value.chartOptions.xaxis.categories = chartType;
    dataTahunan.value.loaded = true;
  });

  axios.get("/api/dashboard/data/tipe").then((res) => {
    const data = res.data.pendapatan;
    const series = [];
    const labels = [];
    for (let i = 0; i < data.length; i++) {
      if (data[i]) {
        series.push(data[i].pendapatan);
        labels.push(data[i].type);
      }
    }

    dataTipe.value.series = series;
    dataTipe.value.chartOptions.labels = labels;
    dataTipe.value.loaded = true;
  });

  axios.get("/api/dashboard/data/bulanan").then((res) => {
    const data = res.data.pendapatan;
    const series = [];
    const time = [];

    const chartType = [];
    for (let i = 0; i < data.length; i++) {
      if (data[i]) {
        series.push(data[i].pendapatan);
        time.push(
          new Date(
            new Date().getFullYear(),
            new Date().getMonth(),
            new Date().getDate(),
            new Date().getHours(),
            new Date().getMinutes() + i * 30
          ).toISOString()
        );
      }
    }
    pendapatanBulanan.value = series.reduce((a, b) => a + b, 0);
    time.forEach((item, index) => {
      time[index] = item.substring(0, 19);
    });
    dataBulan.value.series[0].data = series;
    dataBulan.value.chartOptions.xaxis.categories = time;
    dataBulan.value.loaded = true;
  });

  axios.get("/api/dashboard/data/mobil").then((res) => {
    mobilDisewa.value = res.data;
    console.log(mobilDisewa.value);
  });
});

const openCar = (id) => {
  router.push({
    name: "singleCar",
    params: {
      id: id,
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
  });
};

const onPageEnter = () => {
  animateHorizontal("#page", "100vw", "0", 0);
};

onBeforeRouteLeave((to, from, next) => {
  animateHorizontal("#page", "0", "-100vw", 0);

  setTimeout(() => {
    next();
  }, 800);
});
</script>
