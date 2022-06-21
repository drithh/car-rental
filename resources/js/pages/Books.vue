<template>
  <transition name="page" @enter="onPageEnter" appear>
    <main v-if="books.length" class="overflow-hidden">
      <flash
        :open="flash"
        :message="flashMessage"
        @close="flash = false"
      ></flash>
      <section
        class="faq relative m-auto mt-14 flex flex-col place-content-center place-items-center lg:w-[92vw]"
      >
        <div
          id="title"
          class="title my-12 font-Yantramanav text-5xl font-black text-primary"
        >
          Your Books
        </div>
        <div class="book flex flex-col gap-y-6">
          <div
            v-for="(item, index) in books"
            :key="index"
            class="flex h-56 w-[60vw] flex-col place-content-between rounded-xl border-2 border-secondary border-opacity-50 px-6 pt-3 pb-6"
          >
            <div class="top flex place-content-between text-secondary">
              <div class="tanggal">
                {{ item.tanggal_transaksi }}
              </div>
              <div class="status">
                {{ item.keterangan }}
              </div>
            </div>
            <div class="car flex place-content-between gap-x-4">
              <div class="flex flex-row gap-x-4">
                <img
                  :src="item.image_link"
                  class="h-24 w-36 rounded-xl border border-secondary border-opacity-20"
                  alt="car"
                />
                <div class="flex flex-col place-content-between py-6">
                  <div class="text-lg font-medium text-primary">
                    {{ item.model }}
                  </div>
                  <div class="text-secondary">{{ item.type }}</div>
                </div>
              </div>
              <div class="flex place-items-center gap-x-8 pr-6">
                <div class="block h-16 w-[1px] bg-secondary opacity-50"></div>
                <div class="flex flex-col place-content-center">
                  <div class="text-secondary">Harga Sewa</div>
                  <div class="font-medium text-primary">
                    Rp{{ item.harga_sewa }}
                  </div>
                </div>
              </div>
            </div>
            <div class="flex place-content-end gap-x-4">
              <div
                v-for="(button, index) in item.buttons"
                :key="index"
                @click="updateProfile"
              >
                <button
                  v-if="button === 'Bayar'"
                  class="w-32 rounded-xl border border-secondary border-opacity-60 bg-darkencream py-2 px-4 text-base opacity-70 hover:border-blue hover:opacity-100"
                >
                  {{ button }}
                </button>
                <button
                  v-else-if="button === 'Batal'"
                  @click="cancelOrder(item.booking_id)"
                  class="w-32 rounded-xl border border-secondary border-opacity-60 bg-darkencream py-2 px-4 text-base opacity-70 hover:border-blue hover:opacity-100"
                >
                  {{ button }}
                </button>
                <button
                  v-else-if="button === 'Beri Ulasan'"
                  class="w-32 rounded-xl border border-secondary border-opacity-60 bg-darkencream py-2 px-4 text-base opacity-70 hover:border-blue hover:opacity-100"
                >
                  {{ button }}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <bottom-border></bottom-border>
    </main>
  </transition>
</template>

<script setup>
import anime from "animejs";
import { BottomBorder } from "@/components/BottomBorder.vue";
import { onBeforeRouteLeave } from "vue-router";
import { ref, onMounted } from "vue";
import axios from "axios";
import Flash from "@/components/flash/Flash.vue";
const flash = ref(false);
const flashMessage = ref("");
const books = ref([]);

const cancelOrder = (id) => {
  axios
    .post("/api/books/cancel", {
      id: id,
    })
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

onMounted(() => {
  axios.get("/api/books").then((res) => {
    books.value = res.data;
    books.value.forEach((item, index) => {
      switch (item.keterangan) {
        case "Belum Bayar":
          books.value[index].buttons = ["Bayar", "Batal"];
          break;
        case "Ulasan":
          books.value[index].buttons = ["Beri Ulasan"];
          break;
        default:
          books.value[index].buttons = [];
          break;
      }
    });
    console.log(books.value);
  });
});

const animateContainer = (id, start, end, delay) => {
  anime({
    targets: id,
    translateX: [start, end],
    easing: "easeInOutQuart",
    duration: 800,
    delay: delay,
  });
};

const onPageEnter = () => {
  animateContainer(`.title`, "100vw", "0", 0);
  animateContainer(`.book`, "100vw", "0", 200);
};

onBeforeRouteLeave((to, from, next) => {
  animateContainer(`.title`, "0", "-100vw", 0);
  animateContainer(`.book`, "0", "-100vw", 200);
  setTimeout(() => {
    next();
  }, 1500);
});
</script>
