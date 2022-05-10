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
      <div class="col-span-12">
        <BaseCard>
          <template v-slot:cardHeader>
            <div class="card-header">
              <div class="card-title py-3 px-6 text-xl font-semibold">
                Recent Orders
              </div>
            </div>
          </template>
          <div
            class="borderless hover block w-full overflow-x-auto whitespace-nowrap"
          >
            <div
              class="dataTable-wrapper dataTable-loading no-footer fixed-columns"
            >
              <div
                class="dataTable-container borderless hover block w-full overflow-x-auto whitespace-nowrap"
              >
                <table class="table-3 dataTable-table w-full max-w-full">
                  <thead>
                    <tr class="">
                      <th
                        class="text-gray-500 mb-3 border-b pb-3 text-left font-semibold"
                      >
                        Order Id
                      </th>
                      <th
                        class="text-gray-500 mb-3 border-b pb-3 text-left font-semibold"
                      >
                        Nama Pelanggan
                      </th>
                      <th
                        class="text-gray-500 mb-3 border-b pb-3 text-left font-semibold"
                      >
                        Mobil
                      </th>
                      <th
                        class="text-gray-500 mb-3 border-b pb-3 text-left font-semibold"
                      >
                        Status
                      </th>
                      <th
                        class="text-gray-500 mb-3 border-b pb-3 text-left font-semibold"
                      >
                        Harga Rental
                      </th>
                      <th
                        class="text-gray-500 mb-3 border-b pb-3 text-left font-semibold"
                      >
                        Tanggal
                      </th>
                      <th
                        class="text-gray-500 mb-3 border-b pb-3 text-left font-semibold"
                      >
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      class="hover:bg-gray-100 cursor-pointer"
                      v-for="(n, index) in 8"
                      :key="index"
                    >
                      <td class="py-5 px-4">
                        {{ index + 1 }}
                      </td>

                      <td class="">Jhon {{ index + 1 }}</td>
                      <td class="py-5">
                        <div class="flex">
                          <div>Mustang GT&nbsp;</div>
                          <div class="text-secondary">Fastback</div>
                        </div>
                      </td>
                      <td class="py-5">
                        <span
                          class="mr-3 rounded-full border border-blue px-3 py-1 text-xs text-blue"
                          >Selesai</span
                        >
                      </td>
                      <td class="py-5">Rp.{{ 33400 * (index + 1) }}</td>
                      <td class="py-5">10-05-22</td>
                      <td class="py-5">
                        <BaseBtn
                          rounded
                          class="border border-blue text-blue hover:bg-blue hover:text-white"
                        >
                          View
                        </BaseBtn>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div class="dataTable-bottom">
                <div class="dataTable-info">Showing 1 to 8 of 8 entries</div>
                <nav class="dataTable-pagination">
                  <ul class="dataTable-pagination-list"></ul>
                </nav>
              </div>
            </div>
          </div>
        </BaseCard>
      </div>
    </div>
  </transition>
  <BottomBorder />
</template>
