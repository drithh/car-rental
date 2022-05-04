<script setup>
import { ref, watch } from "vue";

const props = defineProps({
  filterName: String,
});

const checkboxActive = ref(false);
</script>

<template>
  <div class="p-1">
    <div
      @click="checkboxActive = !checkboxActive"
      class="flex cursor-pointer items-center"
    >
      <div
        :class="{ 'border-blue': checkboxActive }"
        class="focus-within:border-blue-500 mr-2 flex h-[18px] w-[18px] flex-shrink-0 items-center justify-center rounded-md border-2 bg-white opacity-70 transition-all duration-500"
      >
        <transition name="fade">
          <svg
            class="pointer-events-none h-3 w-3 fill-current text-blue opacity-70 transition-all duration-500"
            v-if="checkboxActive"
            version="1.1"
            viewBox="0 0 17 12"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g fill="none" fill-rule="evenodd">
              <g
                transform="translate(-9 -11)"
                fill="#1F73F1"
                fill-rule="nonzero"
              >
                <path
                  d="m25.576 11.414c0.56558 0.55188 0.56558 1.4439 0 1.9961l-9.404 9.176c-0.28213 0.27529-0.65247 0.41385-1.0228 0.41385-0.37034 0-0.74068-0.13855-1.0228-0.41385l-4.7019-4.588c-0.56584-0.55188-0.56584-1.4442 0-1.9961 0.56558-0.55214 1.4798-0.55214 2.0456 0l3.679 3.5899 8.3812-8.1779c0.56558-0.55214 1.4798-0.55214 2.0456 0z"
                />
              </g>
            </g>
          </svg>
        </transition>
      </div>
      <div
        class="opacity-70 transition-all duration-500"
        :class="{ 'text-blue': checkboxActive }"
      >
        {{ filterName }}
      </div>
    </div>
  </div>
</template>

<style lang="postcss" scoped>
.fade-enter-from,
.fade-leave-to {
  @apply opacity-0;
}
.fade-enter-active,
.fade-leave-active {
  @apply transition-all duration-500;
}
</style>
