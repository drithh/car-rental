<template>
  <button @click="setAccordion(props.index)">
    <div
      class="wrapper group flex w-full flex-col rounded-2xl border border-secondary border-opacity-70 px-6 py-4 transition-all duration-500 hover:border-blue"
      :class="{ 'border-blue': props.open }"
    >
      <div class="question flex place-content-between text-xl opacity-80">
        <div
          class="flex items-center text-primary opacity-70 duration-500 group-hover:opacity-100"
          :class="{ 'opacity-100': props.open }"
        >
          {{ question }}
        </div>
        <span
          class="button-primary-text text-xl text-primary opacity-70 duration-500 group-hover:opacity-100"
        >
          <font-awesome-icon
            :class="{ 'rotate-[360deg]': props.open }"
            class="scale-x-[1.1] text-primary duration-700"
            :icon="['fas', props.open ? 'minus' : 'plus']"
          />
        </span>
      </div>
      <transition name="accordion">
        <div
          class="content mt-6 mb-4 h-auto overflow-hidden text-justify text-primary opacity-70 transition-all duration-1000"
          v-show="props.open"
        >
          {{ answer }}
        </div>
      </transition>
    </div>
  </button>
</template>

<script setup>
import { ref, watch } from "vue";

let props = defineProps({
  index: Number,
  open: Boolean,
  question: String,
  answer: String,
});

const emit = defineEmits(["toggle"]);

const setAccordion = (index) => {
  emit("toggle", index);
};
</script>

<style lang="postcss" scoped>
.accordion-enter-active,
.accordion-leave-active {
  @apply max-h-[1000px];
}

.accordion-enter-from,
.accordion-leave-to {
  @apply m-0 max-h-0;
}
</style>
