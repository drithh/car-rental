<template>
  <teleport to="body">
    <transition name="flash">
      <div v-if="open" class="fixed top-4 left-0 z-[100] w-full">
        <div
          class="flash mx-auto flex h-16 w-[35rem] place-content-between place-items-center rounded-md bg-white py-2 px-6 shadow-lg"
        >
          <div class="text w-4/5">
            {{ message }}
          </div>
          <div class="divider block h-4 w-2 bg-gray"></div>
          <button
            @click="$emit('close')"
            class="close w-6 cursor-pointer text-secondary"
          >
            <font-awesome-icon class="h-7 w-7 opacity-50" icon="xmark" />
          </button>
        </div>
      </div>
    </transition>
  </teleport>
</template>

<script setup>
import { ref } from "vue";
import anime from "animejs";
const emit = defineEmits(["close"]);

const props = defineProps({
  open: {
    type: Boolean,
    default: false,
  },
  message: String,
});
</script>

<style lang="postcss">
.flash-leave-to {
  opacity: 0;
  transform: translateY(10px);
}

.flash-enter-from {
  opacity: 0;
  transform: translateY(-100px);
}

.flash-enter-active,
.flash-leave-active {
  transition: opacity 300ms ease-in-out, transform 300ms ease-in-out;
}
</style>
