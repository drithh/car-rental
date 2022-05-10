<script setup>
import {
  dashboardOne,
  dashboardTwo,
  splineAreaWidgetTwo,
  splineAreaWidgetThree,
} from "@/data/dashboard.js";
import Breadcrumbs from "@/components/dashboard/Breadcrumbs.vue";
import BaseBtn from "@/components/dashboard/BaseBtn.vue";
import BaseCard from "@/components/dashboard/BaseCard.vue";
import BottomBorder from "@/components/BottomBorder.vue";
import { onMounted } from "vue";

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
  animateHorizontal("#page", "100vw", "0", 0);
};

onBeforeRouteLeave((to, from, next) => {
  animateHorizontal("#page", "0", "-100vw", 0);

  setTimeout(() => {
    next();
  }, 800);
});
</script>

<template>
  <transition name="page" @enter="onPageEnter" appear>
    <div id="page" class="container mx-auto mt-12">
      <div class="grid grid-cols-12 gap-5">
        <div
          class="col-span-12 sm:col-span-6 md:col-span-6 lg:col-span-6 xl:col-span-3"
        >
          <BaseCard>
            <div class="align-center flex">
              <i class="i-Add-User text-6xl text-purple-200"></i>
              <div class="m-auto">
                <p class="text-gray-400">Pelanggan</p>
                <p class="text-xl text-blue">205</p>
              </div>
            </div>
          </BaseCard>
        </div>
        <div
          class="col-span-12 sm:col-span-6 md:col-span-6 lg:col-span-6 xl:col-span-3"
        >
          <BaseCard>
            <div class="align-center flex">
              <i class="i-Financial text-6xl text-purple-200"></i>
              <div class="m-auto">
                <p class="text-gray-400">Penjualan</p>
                <p class="text-xl text-blue">Rp.4021</p>
              </div>
            </div>
          </BaseCard>
        </div>
        <div
          class="col-span-12 sm:col-span-6 md:col-span-6 lg:col-span-6 xl:col-span-3"
        >
          <BaseCard>
            <div class="align-center flex">
              <i class="i-Car-2 text-6xl text-purple-200"></i>
              <div class="m-auto">
                <p class="text-gray-400">Orders</p>
                <p class="text-xl text-blue">20</p>
              </div>
            </div>
          </BaseCard>
        </div>
        <div
          class="col-span-12 sm:col-span-6 md:col-span-6 lg:col-span-6 xl:col-span-3"
        >
          <BaseCard>
            <div class="align-center flex">
              <i class="i-Money-2 text-6xl text-purple-200"></i>
              <div class="m-auto">
                <p class="text-gray-400">Pengeluaran</p>
                <p class="text-xl text-blue">Rp.200</p>
              </div>
            </div>
          </BaseCard>
        </div>
        <div class="col-span-12 md:col-span-6 xl:col-span-8">
          <BaseCard>
            <h4 class="card-title mb-4">Penjualan Tahun Ini</h4>
            <apexchart
              type="bar"
              height="255"
              :options="dashboardOne.chartOptions"
              :series="dashboardOne.series"
            ></apexchart>
          </BaseCard>
        </div>
        <div class="col-span-12 md:col-span-6 xl:col-span-4">
          <BaseCard>
            <h4 class="card-title mb-4">Penjualan dengan Type Mobil</h4>
            <apexchart
              type="pie"
              height="290"
              :options="dashboardTwo.chartOptions"
              :series="dashboardTwo.series"
            ></apexchart>
          </BaseCard>
        </div>
        <div
          class="col-span-12 sm:col-span-6 md:col-span-6 lg:col-span-3 xl:col-span-3"
        >
          <BaseCard noPadding class="overflow-hidden">
            <div class="p-5">
              <div class="text-gray-500">Pendapatan Bulan Terakhir</div>
              <p class="m-0 text-2xl text-blue">Rp.40250</p>
            </div>
            <div id="basicArea-chart">
              <apexchart
                type="area"
                height="270"
                :options="splineAreaWidgetTwo.chartOptions"
                :series="splineAreaWidgetTwo.series"
              />
            </div>
          </BaseCard>
        </div>

        <div
          class="col-span-12 sm:col-span-6 md:col-span-6 lg:col-span-3 xl:col-span-3"
        >
          <BaseCard noPadding class="overflow-hidden">
            <div class="p-5">
              <div class="text-gray-500">Pendapatan Minggu Terakhir</div>
              <p class="text-warning m-0 text-2xl">Rp.10250</p>
            </div>
            <div id="basicArea-chart">
              <apexchart
                type="area"
                height="270"
                :options="splineAreaWidgetThree.chartOptions"
                :series="splineAreaWidgetThree.series"
              />
            </div>
          </BaseCard>
        </div>

        <div class="col-span-12 lg:col-span-6 xl:col-span-6">
          <BaseCard>
            <div class="card-title mb-4">Mobil Yang Sering Disewa</div>

            <div class="mb-4 flex flex-col items-center md:flex-row">
              <img
                class="avatar-md mr-2 h-20 w-44 rounded"
                :src="require(`public/images/car/mustang.jpg`).default"
                alt=""
              />
              <div class="flex-grow text-center md:text-left">
                <h5>
                  <router-link to="" class="text-gray-800 hover:text-blue">
                    Mustang GT
                  </router-link>
                </h5>
                <p class="text-gray-400 mb-3 text-xs md:mb-0">Fastback</p>
                <div class="mb-4 flex justify-center md:mb-0 md:justify-start">
                  <p class="mr-2 text-sm text-blue">Rp.100</p>
                </div>
              </div>
              <BaseBtn
                sm
                class="rounded-full border border-blue text-blue hover:bg-blue hover:text-white"
                >View Details</BaseBtn
              >
            </div>
            <div class="mb-4 flex flex-col items-center md:flex-row">
              <img
                class="avatar-md mr-2 h-20 w-44 rounded"
                :src="require(`public/images/car/mustang.jpg`).default"
                alt=""
              />
              <div class="flex-grow text-center md:text-left">
                <h5>
                  <router-link to="" class="text-gray-800 hover:text-blue">
                    Mustang GT
                  </router-link>
                </h5>
                <p class="text-gray-400 mb-3 text-xs md:mb-0">Fastback</p>
                <div class="mb-4 flex justify-center md:mb-0 md:justify-start">
                  <p class="mr-2 text-sm text-blue">Rp.100</p>
                </div>
              </div>
              <BaseBtn
                sm
                class="rounded-full border border-blue text-blue hover:bg-blue hover:text-white"
                >View Details</BaseBtn
              >
            </div>
            <div class="mb-4 flex flex-col items-center md:flex-row">
              <img
                class="avatar-md mr-2 h-20 w-44 rounded"
                :src="require(`public/images/car/mustang.jpg`).default"
                alt=""
              />
              <div class="flex-grow text-center md:text-left">
                <h5>
                  <router-link to="" class="text-gray-800 hover:text-blue">
                    Mustang GT
                  </router-link>
                </h5>
                <p class="text-gray-400 mb-3 text-xs md:mb-0">Fastback</p>
                <div class="mb-4 flex justify-center md:mb-0 md:justify-start">
                  <p class="mr-2 text-sm text-blue">Rp.100</p>
                </div>
              </div>
              <BaseBtn
                sm
                class="rounded-full border border-blue text-blue hover:bg-blue hover:text-white"
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
