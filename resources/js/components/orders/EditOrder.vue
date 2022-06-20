<template>
  <flash :open="flash" :message="flashMessage" @close="flash = false"></flash>
  <teleport to="body">
    <transition name="overlay">
      <div
        class="absolute left-0 top-0 flex h-screen w-screen place-content-center place-items-center"
      >
        <div
          class="relative flex h-[40rem] w-[36rem] flex-col place-items-center rounded-3xl border border-secondary border-opacity-70 bg-white p-8 transition-all"
          v-click-away="close"
        >
          <div
            class="wrapper text=primary grid w-full grid-cols-2 gap-y-6 overflow-y-visible"
          >
            <div class="col-span-2 mb-6 mt-5 text-center text-xl font-semibold">
              Booking ID {{ order.booking_armada_id }}
            </div>
            <div class="col-span-2 text-xl">
              Harga <span class="text-secondary">{{ order.harga }}</span>
            </div>
            <div class="wrapper col-span-2 grid grid-cols-2 gap-y-3 text-xl">
              <div class="text-xl">
                Tanggal Mulai
                <span class="text-secondary">{{ order.tanggal_mulai }}</span>
              </div>
              <div class="text-right text-xl">
                Waktu Mulai
                <span class="text-secondary">{{ order.waktu_mulai }}</span>
              </div>
              <div class="text-xl">
                Tempat Mulai
                <span class="text-secondary">{{ order.tempat_mulai }}</span>
              </div>
            </div>

            <div class="wrapper col-span-2 grid grid-cols-2 gap-y-3 text-xl">
              <div class="text-xl">
                Tanggal Pengembalian
                <span class="text-secondary">{{
                  order.tanggal_pengembalian
                }}</span>
              </div>
              <div class="text-right text-xl">
                Waktu Pengembalian
                <span class="text-secondary">{{
                  order.waktu_pengembalian
                }}</span>
              </div>
              <div class="text-xl">
                Tempat Pengembalian
                <span class="text-secondary">{{
                  order.tempat_pengembalian
                }}</span>
              </div>
            </div>

            <div
              class="wrapper relative col-span-2 grid grid-cols-2 gap-y-3 text-xl"
            >
              <div class="text-xl">
                Tanggal Harus Kembali
                <span class="text-secondary">{{
                  order.tanggal_harus_kembali
                }}</span>
              </div>

              <v-select
                class="keterangan absolute right-0 top-0 z-10"
                v-model="order.keterangan"
                :options="keterangan"
                label="title"
              ></v-select>
            </div>
            <div class="col-span-2 mt-4 flex place-content-end">
              <button
                class="w-36 rounded-xl border border-secondary border-opacity-60 bg-darkencream py-2 px-6 opacity-70 hover:border-blue hover:opacity-100"
                @click="updateOrder"
              >
                Update
              </button>
            </div>
          </div>
          <div
            @click="close"
            class="close absolute right-6 top-6 z-10 h-6 w-6 cursor-pointer text-secondary"
          >
            <font-awesome-icon class="h-7 w-7 opacity-60" icon="xmark" />
          </div>
        </div>
      </div>
    </transition>
  </teleport>
</template>

<script setup>
import anime from "animejs";
import { onBeforeRouteLeave } from "vue-router";
import vSelect from "vue-select";
import axios from "axios";
import Flash from "@/components/flash/Flash.vue";
import { ref } from "vue";

const keterangan = [
  { title: "Belum Bayar" },
  { title: "Dibatalkan" },
  { title: "Sudah Bayar" },
  { title: "Sedang Berjalan" },
  { title: "Selesai" },
];

const flash = ref(false);
const flashMessage = ref("");

const props = defineProps({
  orderItem: {},
});

const order = ref(props.orderItem);

const updateOrder = () => {
  order.value.keterangan = order.value.keterangan.title;
  axios
    .put(`/api/transactions/edit/${order.value.booking_armada_id}`, order.value)
    .then((res) => {
      flash.value = true;
      setTimeout(() => {
        flash.value = false;
      }, 5000);
      flashMessage.value = res.data.message;
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};

const emit = defineEmits(["closeMenu"]);

const close = () => {
  emit("closeMenu");
};
</script>

<style lang="postcss">
.overlay-enter-from,
.overlay-leave-to {
  @apply opacity-0;
}

.overlay-enter-active,
.overlay-leave-active {
  @apply transition-all duration-500;
}
.overlay-enter-to,
.overlay-leave-from {
  @apply opacity-100;
}

.keterangan .vs__dropdown-toggle {
  @apply mb-3 appearance-none rounded-xl border border-secondary border-opacity-60 bg-darkencream bg-opacity-100  px-2 pt-[5px] pb-[9px]   focus:border-blue focus:bg-white focus:outline-none;
}
.keterangan .vs__selected {
  @apply opacity-70;
}
.keterangan .vs__dropdown-menu {
  @apply top-12 appearance-none rounded-xl leading-tight !text-opacity-70;
}
</style>
