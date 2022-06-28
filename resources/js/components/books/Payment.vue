<template>
  <teleport to="body">
    <transition name="overlay" @enter="viewModal">
      <div
        class="overlay fixed left-0 top-0 z-40 m-auto flex h-screen w-screen place-content-center place-items-center overflow-hidden bg-black bg-opacity-40 opacity-100"
        v-if="openPayment"
      >
        <transition name="zoom">
          <div
            class="relative flex h-max w-[36rem] flex-col place-items-center rounded-3xl border border-secondary border-opacity-70 bg-white p-8 pb-10 transition-all"
            v-if="openModal"
            v-click-away="close"
          >
            <div
              class="wrapper grid w-full grid-cols-2 gap-y-6 overflow-y-visible text-primary"
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
                {{ orderItem.harga }}
              </div>
              <div class="text-xl">Nomor Virtual Akun</div>
              <div class="text-xl text-red-400">
                {{ virtualAkun }}
              </div>
              <div
                class="col-span-2 mb-6 mt-5 text-center text-xl font-semibold"
              >
                Pilih Metode Pembayaran
              </div>
              <div class="col-span-2 grid w-full grid-cols-3 gap-4">
                <button
                  @click="setPayment('BCA')"
                  class="pembayaran rounded-xl border border-secondary border-opacity-50 px-4 py-2"
                >
                  <img
                    :src="require(`public/banks/bca.svg`).default"
                    alt="bca"
                  />
                </button>
                <button
                  @click="setPayment('BNI')"
                  class="pembayaran rounded-xl border border-secondary border-opacity-50 px-4 py-2"
                >
                  <img
                    :src="require(`public/banks/bni.svg`).default"
                    alt="bni"
                  />
                </button>
                <button
                  @click="setPayment('BSI')"
                  class="pembayaran rounded-xl border border-secondary border-opacity-50 px-4 py-2"
                >
                  <img
                    :src="require(`public/banks/bsi.svg`).default"
                    alt="bsi"
                  />
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
        </transition>
      </div>
    </transition>
  </teleport>
</template>

<script setup>
import anime from "animejs";
import { onBeforeRouteLeave } from "vue-router";
import axios from "axios";
import { onMounted, ref } from "vue";
const openModal = ref(false);
const virtualAkun = ref("Pilih Pembayaran");

const viewModal = () => {
  axios
    .post(`/api/payment/check/${props.orderItem.booking_id}`)
    .then((response) => {
      console.log(props.orderItem.booking_id);

      if (response.data.virtual_account) {
        virtualAkun.value = response.data.virtual_account;
      }
    })
    .catch((err) => {
      console.log(err);
    });
  openModal.value = true;
};

const props = defineProps({
  orderItem: {},
  openPayment: false,
});

const order = ref(props.orderItem);

const payment = ref({
  bank_code: "",
  harga: "",
  name: "",
  booking_armada_id: "",
});

const setPayment = (channel) => {
  payment.value.bank_code = channel;
  payment.value.harga = props.orderItem.harga;
  payment.value.booking_armada_id = props.orderItem.booking_id;
  console.log(payment.value);
  axios
    .post("/api/payment/create/", payment.value)
    .then((response) => {
      virtualAkun.value = response.data.account_number;
    })

    .catch((err) => {
      console.log(err);
    });
};

const emit = defineEmits(["closeMenu"]);

const close = () => {
  openModal.value = false;
  setTimeout(() => {
    emit("closeMenu");
  }, 500);
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
  /* @apply opacity-100; */
}

.zoom-enter-active {
  @apply animate-scale-bounce-enter;
}

.zoom-leave-active {
  @apply animate-scale-bounce-leave duration-[0.4s];
}

.zoom-leave-to {
  @apply opacity-0;
}
</style>
