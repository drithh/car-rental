<template>
  <transition name="page" @enter="onPageEnter" appear>
    <div id="page" class="container mx-auto mt-12">
      <edit-order
        :editOrder="editOrder"
        :orderItem="orderItem"
        @closeMenu="closeModal"
      ></edit-order>
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
                  <tbody
                    id="data-table"
                    class="cursor-default"
                    v-if="laravelData"
                  >
                    <tr
                      class="hover:bg-gray-100 cursor-default"
                      v-for="order in laravelData.result.data"
                      :key="order.id"
                    >
                      <td class="py-5 px-4">
                        {{ order.id }}
                      </td>

                      <td class="">{{ order.name }}</td>
                      <td class="py-5">
                        <div class="text-secondary">{{ order.nama }}</div>
                      </td>
                      <td class="py-5">
                        <span
                          class="mr-3 rounded-full border border-blue px-3 py-1 text-xs text-blue"
                          >{{ order.keterangan }}</span
                        >
                      </td>
                      <td class="py-5">Rp{{ order.harga }}</td>
                      <td class="py-5">{{ order.tanggal_transaksi }}</td>
                      <td class="py-5">
                        <BaseBtn
                          rounded
                          class="cursor-pointer border border-blue text-blue hover:bg-blue hover:text-white"
                          @click="OpenModal(order.id)"
                        >
                          View
                        </BaseBtn>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div class="dataTable-bottom" v-if="laravelData">
                <Pagination :result="laravelData" @changePage="changePage" />
              </div>
            </div>
          </div>
        </BaseCard>
      </div>
    </div>
  </transition>
  <BottomBorder />
</template>

<script setup>
import Breadcrumbs from "@/components/dashboard/Breadcrumbs.vue";
import BaseBtn from "@/components/dashboard/BaseBtn.vue";
import BaseCard from "@/components/dashboard/BaseCard.vue";
import BottomBorder from "@/components/BottomBorder.vue";
import Pagination from "@/components/orders/Pagination.vue";
import EditOrder from "@/components/orders/EditOrder.vue";
import { ref, onMounted } from "vue";
import axios from "axios";
import anime from "animejs";
import { onBeforeRouteLeave } from "vue-router";

const editOrder = ref(false);
const orderItem = ref({});
const closeModal = () => {
  editOrder.value = false;
};

const OpenModal = (id) => {
  axios.get(`/api/transactions/${id}`).then((res) => {
    orderItem.value = res.data.order[0];
    editOrder.value = true;
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

onMounted(() => {
  getResults();
});

const changePage = (page) => {
  axios
    .get(page)
    .then((res) => {
      laravelData.value = res.data;
      animateHorizontal("#data-table", "0", "-100vw", 0);
      animateHorizontal("#data-table", "100vw", "0", 200);
    })
    .catch((err) => {
      console.log(err);
    });
};

const laravelData = ref();
const getResults = (page = 1) => {
  axios
    .get(`/api/transactions?page=${page}`)
    .then((res) => {
      laravelData.value = res.data;
    })
    .catch((err) => {
      console.log(err);
    });
};
</script>
