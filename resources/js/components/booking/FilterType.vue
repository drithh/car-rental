<template>
  <div
    :style="{
      height: `${containerHeight}px`,
    }"
    class="filter-type my-6 h-auto overflow-hidden transition-[height] duration-[1.5s]"
  >
    <div
      @click="toggleContent"
      class="filter-name relative z-10 flex cursor-pointer place-content-between bg-darkencream"
    >
      <p class="font-Yantramanav text-xl font-black text-primary opacity-80">
        {{ props.filterType }}
      </p>
      <button class="button-primary">
        <span class="button-primary-text text-xl text-primary opacity-80">
          <font-awesome-icon
            :class="{ 'rotate-[360deg]': content }"
            class="scale-x-[1.1] text-primary duration-700"
            :icon="['fas', content ? 'minus' : 'plus']"
          />
        </span>
      </button>
    </div>
    <transition name="expand">
      <div
        v-if="content"
        class="check-box-wrapper mb-6 mt-4 transition-all duration-[1.5s]"
      >
        <filter-checkbox
          v-for="(item, index) in props.filterList"
          :key="index"
          :filterName="item"
        >
        </filter-checkbox>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
import FilterCheckbox from "components/booking/FilterCheckbox.vue";
const content = ref(false);

const dropdownHeight = 32;
const containerHeight = ref(dropdownHeight);

let buttonEnabled = true;

const props = defineProps({
  filterType: String,
  filterList: Array,
});

const filterList = ref(props.filterList);

function toggleContent() {
  if (buttonEnabled) {
    content.value = !content.value;
    containerHeight.value = content.value
      ? 32 * filterList.value.length + 24 + dropdownHeight
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

<style lang="postcss" scoped>
.expand-enter-from,
.expand-leave-to {
  @apply translate-y-[-200%];
}

.expand-enter-to,
.expand-leave-from {
  @apply translate-y-[0%];
}
</style>
