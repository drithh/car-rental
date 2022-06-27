<template>
  <teleport to="body">
    <transition name="overlay" @enter="viewModal">
      <div
        class="overlay absolute left-0 top-0 z-40 m-auto flex h-screen w-screen place-content-center place-items-center overflow-hidden bg-black bg-opacity-40 opacity-100"
        v-if="isUlasan"
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
                Menu Ulasan
              </div>
              <div class="col-span-2 flex flex-col">
                <div class="flex flex-col">
                  <label
                    class="text-gray-700 mb-2 block font-Yantramanav text-lg font-medium tracking-wide opacity-70"
                  >
                    Rating
                  </label>
                  <input
                    type="number"
                    v-model="form.rating"
                    min="0"
                    max="5"
                    class="text-gray-700 mb-3 block w-full appearance-none rounded-xl border border-secondary border-opacity-60 bg-darkencream bg-opacity-100 py-3 px-4 leading-tight opacity-70 focus:border-blue focus:bg-white focus:outline-none"
                  />
                  <label
                    class="text-gray-700 mb-2 block font-Yantramanav text-lg font-medium tracking-wide opacity-70"
                  >
                    Ulasan
                  </label>
                  <textarea
                    class="text-gray-700 mb-3 block w-full appearance-none rounded-xl border border-secondary border-opacity-60 bg-darkencream bg-opacity-100 py-3 px-4 leading-tight opacity-70 focus:border-blue focus:bg-white focus:outline-none"
                    v-model="form.text"
                    placeholder="Tulis ulasan anda disini"
                  ></textarea>
                </div>
                <div class="mt-6 flex w-full place-content-end px-3">
                  <button
                    class="w-36 rounded-xl border border-secondary border-opacity-60 bg-darkencream py-2 px-6 opacity-70 hover:border-blue hover:opacity-100"
                    @click="submitUlasan()"
                  >
                    Submit
                  </button>
                </div>
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

const form = ref({
  text: "",
  rating: 0,
});

const props = defineProps({
  isUlasan: false,
  orderItem: {},
});

const viewModal = () => {
  openModal.value = true;
};

const submitUlasan = () => {
  if (form.value.rating < 0 || form.value.rating > 5) {
    alert("Rating harus diantara 0 - 5");
    return;
  }
  const data = {
    ulasan: form.value.text,
    rating: form.value.rating,
    booking_armada_id: props.orderItem.booking_id,
  };
  console.log(data);
  axios
    .post("/api/ulasan/store", data)
    .then((res) => {
      form.value.text = "";
      form.value.rating = 0;
      openModal.value = false;
      close();
    })
    .catch((err) => {
      console.log(err);
    });
};

const payment = ref({
  bank_code: "",
  harga_sewa: "",
  name: "",
  booking_armada_id: "",
});

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
