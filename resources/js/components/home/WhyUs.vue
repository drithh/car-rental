<template>
  <div
    class="draggable relative my-8 mx-auto h-[28rem] w-[24rem] select-none overflow-hidden rounded-3xl border-2 border-blue border-opacity-20 bg-cream text-center font-Yantramanav text-base"
    @mousedown="startDrag"
    @touchstart="startDrag"
    @mousemove="onDrag"
    @touchmove="onDrag"
    @mouseup="stopDrag"
    @touchend="stopDrag"
    @mouseleave="stopDrag"
  >
    <svg
      class="bg absolute top-0 left-0 z-0 text-white"
      width="384"
      height="448"
    >
      <path :d="headerPath" fill="currentColor"></path>
    </svg>

    <div
      class="header color-white relative z-0 box-border flex h-32 place-content-center pt-4 text-xl font-bold"
    >
      <img
        :src="
          'https://res.cloudinary.com/dcqu7m9lc/image/upload/v1655879528/car/' +
          image
        "
        class="h-40 w-40"
      />
    </div>
    <div
      class="content relative z-10 box-border p-8 pt-28"
      :style="contentPosition"
    >
      <div class="title my-4 text-2xl font-bold text-primary opacity-90">
        {{ title }}
      </div>
      <div class="title text-lg text-primary opacity-70">{{ description }}</div>
    </div>
  </div>
</template>

<script setup>
import dynamics from "dynamics.js";
import { ref, computed } from "vue";

const props = defineProps({
  title: String,
  description: String,
  image: String,
});

const headerHeight = 210;

let isDragging = false;
const start = { x: 0, y: 0 };
let c = ref({ x: headerHeight, y: headerHeight });

const headerPath = computed(() => {
  return `M0,0 L384,0 384,${headerHeight}Q${c.value.x},${c.value.y} 0,${headerHeight}`;
});

const contentPosition = computed(() => {
  const dy = c.value.y - headerHeight;
  const dampen = dy > 0 ? 2 : 4;
  return {
    transform: `translate(0,${dy / dampen}px)`,
  };
});

function startDrag(e) {
  e = e.changedTouches ? e.changedTouches[0] : e;
  isDragging = true;
  start.x = e.pageX;
  start.y = e.pageY;
}

function onDrag(e) {
  e = e.changedTouches ? e.changedTouches[0] : e;
  if (isDragging) {
    c.value.x = headerHeight + (e.pageX - start.x);
    const dy = e.pageY - start.y;
    const dampen = dy > 0 ? 1.5 : 4;
    c.value.y = headerHeight + dy / dampen;
  }
}

function stopDrag() {
  if (isDragging) {
    isDragging = false;
    dynamics.animate(
      c.value,
      { x: headerHeight, y: headerHeight },
      { type: dynamics.spring, duration: 700, firction: 280 }
    );
  }
}
</script>

<style scoped></style>
