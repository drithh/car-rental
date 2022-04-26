<script setup>
import { ref } from "vue";
const props = defineProps({
  text: String,
});

import { Calendar, DatePicker } from "v-calendar";
const date = ref(new Date());
const inputValue = ref("");
const inputEvents = ref("");
</script>

<template>
  <div class="input-wrapper grid w-full grid-cols-2 gap-6">
    <div class="full-form col-span-2">
      <div class="label flex flex-row place-items-center gap-x-3 px-2">
        <font-awesome-icon
          class="scale-x-[1.1] text-blue"
          :icon="['fas', 'location-dot']"
        />
        <p class="font-Yantramanav text-lg font-bold tracking-wide text-dark">
          {{ text }}
        </p>
      </div>
      <input
        class="w-full rounded-xl border border-secondary bg-gray py-3 px-6 font-Yantramanav text-xl opacity-70 focus:border-blue focus:bg-white focus:outline-none"
      />
    </div>
    <div class="half-form col-span-1">
      <div class="label flex flex-row place-items-center gap-x-3 px-2">
        <font-awesome-icon
          class="scale-x-[1.1] text-blue"
          :icon="['fas', 'calendar']"
        />
        <p class="font-Yantramanav text-lg font-bold tracking-wide text-dark">
          {{ text }} Date
        </p>
      </div>
      <date-picker v-model="date" :min-date="new Date()" class="flex-grow">
        <template v-slot="{ inputValue, inputEvents }">
          <input
            id="date"
            class="w-full rounded-xl border border-secondary bg-gray py-3 px-6 font-Yantramanav text-xl hover:border-blue hover:bg-white hover:outline-none"
            :value="inputValue"
            v-on="inputEvents"
          />
        </template>
      </date-picker>
    </div>
    <div class="half-form col-span-1">
      <div class="label flex flex-row place-items-center gap-x-3 px-2">
        <font-awesome-icon
          class="scale-x-[1.1] text-blue"
          :icon="['fas', 'clock']"
        />
        <p class="font-Yantramanav text-lg font-bold tracking-wide text-dark">
          {{ text }} Time
        </p>
      </div>
      <date-picker mode="time" v-model="date" :min-date="date" />
      <!-- <div class="w-full rounded-xl bg-gray py-3 px-6 font-Yantramanav text-xl">
        Solo
      </div> -->
    </div>
  </div>
</template>

<style>
@import "v-calendar/dist/style.css";
</style>

<style lang="postcss">
.vc-time-picker svg,
.vc-time-picker .vc-time-date {
  @apply hidden;
}

.vc-container {
  @apply border-0;
}
.vc-time-picker select,
.vc-time-picker .vc-am-pm {
  @apply bg-gray;
}

.vc-time-picker {
  @apply w-full appearance-none rounded-xl border border-secondary bg-gray py-3 px-6 font-Yantramanav text-xl hover:border-blue hover:bg-white hover:outline-none;
}
</style>
