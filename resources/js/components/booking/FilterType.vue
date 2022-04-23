<script setup>
import { ref, watch } from "vue";

const content = ref(false);

const checkboxItem = ref(4);

const dropdownHeight = 32;
const containerHeight = ref(dropdownHeight);

let buttonEnabled = true;

function toggleContent() {
  if (buttonEnabled) {
    content.value = !content.value;
    containerHeight.value = content.value
      ? 24 * checkboxItem.value + 24 + dropdownHeight
      : dropdownHeight;

    buttonEnabled = false;
    waitForContent();
  }
}

function waitForContent() {
  setTimeout(() => {
    buttonEnabled = true;
  }, 900);
}
</script>

<template>
  <div
    :style="{
      height: `${containerHeight}px`,
    }"
    class="filter-type my-6 h-auto overflow-hidden transition-[height] duration-[1.5s]"
  >
    <div
      class="filter-name relative z-10 flex place-content-between bg-darkencream"
    >
      <p class="font-Yantramanav text-xl font-black text-primary">Car Type</p>
      <button @click="toggleContent" class="button-primary">
        <span class="button-primary-text text-xl text-primary">
          <font-awesome-icon
            :class="{ 'rotate-[360deg]': content }"
            class="scale-x-[1.1] text-primary duration-700"
            :icon="['fas', content ? 'minus' : 'plus']"
          />
        </span>
      </button>
    </div>
    <transition name="expand">
      <div v-show="content" class="check-box-wrapper my-6">
        <div class="check-box">Coupe</div>
        <div class="check-box">Hatchback</div>
        <div class="check-box">Sedan</div>
        <div class="check-box">Suv</div>
      </div>
    </transition>
  </div>
</template>

<style scope>
.expand-enter-active,
.expand-leave-active {
  transition: all 1s linear;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 1500ms;
}

.expand-enter-from,
.expand-leave-to {
  transform: translateY(-200%);
}

.expand-enter-to,
.expand-leave-from {
  transform: translateY(0%);
}
</style>
