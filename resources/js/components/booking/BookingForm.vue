<script setup>
const props = defineProps({
  text: String,
});
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
      <div class="w-full rounded-xl bg-gray py-3 px-6 font-Yantramanav text-xl">
        Solo
      </div>
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
      <div class="w-full rounded-xl bg-gray py-3 px-6 font-Yantramanav text-xl">
        Solo
      </div>
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
      <div class="w-full rounded-xl bg-gray py-3 px-6 font-Yantramanav text-xl">
        Solo
      </div>
    </div>
  </div>
</template>
