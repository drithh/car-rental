<template>
  <div
    class="flex h-[max(max-content,_19rem)] w-full flex-col place-content-between rounded-3xl bg-white p-6"
  >
    <div class="car-name flex place-content-between font-Yantramanav">
      <div class="name-wrapper text-left">
        <div class="text-2xl font-bold text-dark">
          <!-- <slot name="name"></slot> -->
          Mustang GT
        </div>
        <div class="text-xl text-secondary">
          <!-- <slot name="description"></slot> -->
          Fastback
        </div>
      </div>
      <div class="favorite">
        <div
          @click="favorite = !favorite"
          class="relative top-1 z-0 origin-right cursor-pointer"
        >
          <transition name="bounce">
            <font-awesome-icon
              v-if="favorite"
              class="absolute left-0 top-[1px] z-10 h-6 w-6 origin-center text-red-400"
              icon="heart"
            />
          </transition>
          <font-awesome-icon
            class="h-6 w-6 text-secondary"
            :icon="['far', 'heart']"
          />
        </div>
      </div>
    </div>

    <div class="car-image">
      <img
        class="h-full w-full"
        src="../../../../public/images/car/mustang.jpg"
        alt="car"
      />
    </div>

    <div class="specification flex place-content-between">
      <div class="capacity">
        <font-awesome-icon class="h-4 w-4 text-blue" :icon="['fas', 'user']" />
        <span class="mx-1 text-lg text-primary">
          2
          <!-- <slot name="capacity"></slot> -->
        </span>
      </div>
      <div class="transmission">
        <font-awesome-icon class="h-5 w-5 text-blue" :icon="['fas', 'cogs']" />
        <span class="mx-1 text-lg text-primary">
          Manual
          <!-- <slot name="cogs"></slot> -->
        </span>
      </div>
      <div class="price">
        <span class="text-lg font-bold text-primary">
          <span>
            IDR 100
            <!-- <slot name="price"></slot> -->
          </span>
        </span>
        <span class="text-lg text-primary">/d</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
const favorite = ref(false);
</script>

<style lang="postcss" scoped>
.bounce-enter-active,
.bounce-leave-active {
  @apply animate-scale-bounce-enter;
}
.bounce-enter-from,
.bounce-leave-to {
  @apply animate-scale-bounce-leave;
}
</style>
