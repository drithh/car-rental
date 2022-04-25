<script setup>
import { ref, watch } from "vue";
import { useRoute } from "vue-router";
import BookingForm from "components/booking/BookingForm.vue";
import Car from "components/booking/Car.vue";
import FilterType from "components/booking/FilterType.vue";

const filters = [
  {
    filterType: "Car Type",
    filterList: [
      "SUV (10)",
      "Sedan (15)",
      "Hatchback (18)",
      "MPV (10)",
      "Coupe (19)",
    ],
  },
  {
    filterType: "Capacity",
    filterList: ["2-4 (53)", "5 or more (20)"],
  },
  {
    filterType: "Transmission Type",
    filterList: ["Automatic", "Manual"],
  },
];
</script>

<template>
  <section
    class="m-auto my-12 flex h-80 w-full flex-row justify-between gap-x-10 lg:w-[92vw] lg:p-0"
  >
    <div class="text-panel flex w-[40%] flex-col place-content-center gap-10">
      <h2 class="font-Yantramanav text-5xl font-black text-primary">
        Sewa mobil dengan mudah
      </h2>
      <p class="font-Yantramanav text-lg text-secondary">
        Menyewa mobil memberi Anda kebebasan, dan kami akan membantu anda
        menemukan mobil terbaik dengan harga terjangkau.
      </p>
    </div>
    <div
      class="book-panel grid w-full grid-cols-2 gap-8 rounded-3xl border-2 border-secondary border-opacity-30 p-10"
    >
      <booking-form text="Pick-up"></booking-form>
      <booking-form text="Drop-off"></booking-form>
    </div>
  </section>
  <section class="flex place-content-center bg-cream pb-20">
    <div class="flex w-[92vw] flex-row place-content-end gap-x-10 py-12">
      <div
        class="h-fit min-w-[24rem] rounded-3xl border-2 border-secondary border-opacity-20 bg-darkencream p-6"
      >
        <div
          class="border-b-2 border-b-secondary border-opacity-20 pt-4 pb-6 text-3xl font-bold text-dark"
        >
          Filter By
        </div>
        <div class="filter-container py-6">
          <filter-type
            v-for="(filter, index) in filters"
            :key="index"
            :filterType="filter.filterType"
            :filterList="filter.filterList"
          ></filter-type>
        </div>
      </div>
      <div
        class="grid w-full grid-cols-[repeat(auto-fit,minmax(18rem,_max-content))] gap-10"
      >
        <car></car>
        <car></car>
        <car></car>
        <car></car>
        <car></car>
        <car></car>
        <car></car>
        <car></car>
        <car></car>
        <car></car>
        <car></car>
        <car></car>
        <car></car>
        <car></car>
        <car></car>
        <car></car>
        <car></car>
        <car></car>
        <car></car>
        <car></car>
        <car></car>
        <car></car>
      </div>
    </div>
  </section>
</template>

<style lang="postcss" scoped>
.filter-move {
  @apply absolute transition-all;
}

.filter-enter-active,
.filter-leave-active {
  @apply transition-all duration-1000 ease-in-out;
}

.filter-enter-from,
.filter-leave-to {
  @apply -translate-y-[200%];
}

.filter-enter-to,
.filter-leave-from {
  @apply translate-y-0;
}
</style>
