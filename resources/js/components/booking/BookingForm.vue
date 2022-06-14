<template>
  <div class="input-wrapper grid w-full grid-cols-1 gap-6">
    <div class="full-form">
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
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
        class="w-full rounded-xl border border-secondary bg-gray py-3 px-6 font-Yantramanav text-xl opacity-70 focus:border-blue focus:bg-white focus:outline-none"
      />
    </div>
    <div class="half-form grid grid-cols-1 gap-6 2xl:grid-cols-2">
      <div class="half-form">
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
              class="w-full rounded-xl border border-secondary bg-gray py-3 px-6 font-Yantramanav text-xl hover:border-blue hover:bg-white hover:outline-none"
              :value="inputValue"
              v-on="inputEvents"
            />
          </template>
        </date-picker>
      </div>
      <div class="half-form">
        <div class="label flex flex-row place-items-center gap-x-3 px-2">
          <font-awesome-icon
            class="scale-x-[1.1] text-blue"
            :icon="['fas', 'clock']"
          />
          <p class="font-Yantramanav text-lg font-bold tracking-wide text-dark">
            {{ text }} Time
          </p>
        </div>
        <date-picker class="time" mode="time" v-model="date" :min-date="date" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { Calendar, DatePicker } from "v-calendar";
import { ref, watch } from "vue";
const props = defineProps({
  text: String,
  modelValue: String,
  date: Date,
});

const date = ref(new Date());

if (props.date) {
  date.value = props.date;
}

const emit = defineEmits(["update:date", "update:modelValue"]);

watch(
  () => date.value,
  (newVal) => {
    if (newVal) {
      emit("update:date", newVal);
    }
  }
);

const inputValue = ref("");
const inputEvents = ref("");

const takeTime = () => {
  console.log(date.value);
};

const openCar = (id) => {
  router.push({
    name: "singleCar",
    params: {
      id: id,
      pickUpLocation: pickUp.value.location,
      pickUpDate: pickUp.value.date,
      dropOffLocation: dropOff.value.location,
      dropOffDate: dropOff.value.date,
    },
  });
};
</script>

<style>
@import "v-calendar/dist/style.css";
</style>

<style lang="postcss">
.vc-time-picker svg,
.vc-time-picker .vc-time-date {
  @apply hidden;
}

.vc-time-picker select,
.vc-time-picker .vc-am-pm {
  @apply bg-gray;
}

.time.vc-container.vc-blue {
  @apply flex h-[54px] w-full flex-col place-content-center rounded-xl border border-secondary bg-gray hover:border-blue hover:bg-white hover:outline-none;
}

.vc-time-content {
  @apply w-full;
}

.vc-time-picker {
  @apply flex  place-content-between;
}

.vc-time-picker {
  @apply w-full appearance-none  py-3 px-6 font-Yantramanav text-xl;
}
</style>
