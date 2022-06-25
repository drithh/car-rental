<template>
  <teleport to="body">
    <transition name="overlay">
      <div
        class="absolute left-0 top-0 flex h-screen w-screen place-content-center place-items-center"
      >
        <div
          class="relative flex h-max w-[36rem] flex-col place-items-center rounded-3xl border border-secondary border-opacity-70 bg-white p-8 pb-10 transition-all"
          v-click-away="close"
        >
          <div
            class="wrapper text=primary grid w-full grid-cols-2 gap-y-6 overflow-y-visible"
          >
            <div
              @click="close"
              class="close absolute right-6 top-6 z-10 h-6 w-6 cursor-pointer text-secondary"
            >
              <font-awesome-icon class="h-7 w-7 opacity-60" icon="xmark" />
            </div>
            <div
              class="col-span-2 mb-6 mt-5 text-center text-2xl font-semibold"
            >
              Menu Pembayaran
            </div>
            <div class="text-xl">Harga</div>
            <div class="text-xl text-secondary">
              {{ order.harga_sewa }}
            </div>
            <div class="text-xl">Nomor Virtual Akun</div>
            <div class="text-xl text-red-400">
              {{ virtualAkun ? virtualAkun : "Pilih Pembayaran" }}
            </div>
            <div class="col-span-2 mb-6 mt-5 text-center text-xl font-semibold">
              Pilih Metode Pembayaran
            </div>
            <div class="col-span-2 grid w-full grid-cols-3 gap-4">
              <button
                @click="setPayment('BCA')"
                class="pembayaran rounded-xl border border-secondary border-opacity-50 px-4 py-2"
              >
                <img :src="require(`public/banks/bca.svg`).default" alt="bca" />
              </button>
              <button
                @click="setPayment('BNI')"
                class="pembayaran rounded-xl border border-secondary border-opacity-50 px-4 py-2"
              >
                <img :src="require(`public/banks/bni.svg`).default" alt="bni" />
              </button>
              <button
                @click="setPayment('BSI')"
                class="pembayaran rounded-xl border border-secondary border-opacity-50 px-4 py-2"
              >
                <img :src="require(`public/banks/bsi.svg`).default" alt="bsi" />
              </button>
              <button
                @click="setPayment('CIMB')"
                class="pembayaran rounded-xl border border-secondary border-opacity-50 px-4 py-2"
              >
                <img
                  :src="require(`public/banks/cimb.svg`).default"
                  alt="cimb"
                />
              </button>
              <button
                @click="setPayment('MANDIRI')"
                class="pembayaran rounded-xl border border-secondary border-opacity-50 px-4 py-2"
              >
                <img
                  :src="require(`public/banks/mandiri.svg`).default"
                  alt="mandiri"
                />
              </button>
              <button
                @click="setPayment('PERMATA')"
                class="pembayaran rounded-xl border border-secondary border-opacity-50 px-4 py-2"
              >
                <img
                  :src="require(`public/banks/permata.svg`).default"
                  alt="permata"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </teleport>
</template>

<script setup>
import anime from "animejs";
import { onBeforeRouteLeave } from "vue-router";
import axios from "axios";
import { onMounted, ref } from "vue";

const virtualAkun = ref(null);

const props = defineProps({
  orderItem: {},
});

const order = ref(props.orderItem);

const payment = ref({
  bank_code: "",
  harga_sewa: "",
  name: "",
  booking_armada_id: "",
});

const setPayment = (channel) => {
  payment.value.bank_code = channel;
  payment.value.harga_sewa = order.value.harga_sewa;
  payment.value.booking_armada_id = order.value.booking_id;
  console.log(channel);
  axios
    .post("/api/payment/create/", payment.value)
    .then((response) => {
      virtualAkun.value = response.data.account_number;
    })

    .catch((err) => {
      console.log(err);
    });
};

onMounted(() => {
  axios
    .post(`/api/payment/check/${order.value.booking_id}`)
    .then((response) => {
      if (response.data.virtual_account) {
        virtualAkun.value = response.data.virtual_account;
      }
    })
    .catch((err) => {
      console.log(err);
    });
});

const emit = defineEmits(["closeMenu"]);

const close = () => {
  emit("closeMenu");
};
</script>
