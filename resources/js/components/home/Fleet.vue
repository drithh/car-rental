<template>
  <div class="w-[95%]">
    <Carousel :items-to-show="4" :wrap-around="true">
      <Slide v-for="slide in 10" :key="slide">
        <div class="carousel__item">
          <car></car>
        </div>
      </Slide>

      <template #addons>
        <Navigation />
      </template>
    </Carousel>
  </div>
</template>

<script setup>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
import Car from "components/booking/Car.vue";
</script>

<style lang="postcss">
.carousel__item {
  @apply mx-4 flex min-h-[20rem] w-full items-center justify-center text-xl;
}

.carousel__slide {
  padding: 10px;
}

.carousel__prev,
.carousel__next {
  @apply box-content border-[5px] border-solid border-cream;
}
.carousel__slide > .carousel__item {
  @apply scale-100 opacity-50 duration-500;
}
.carousel__slide--visible > .carousel__item {
  @apply opacity-100;
}
.carousel__slide--next > .carousel__item {
  @apply -translate-x-2 -translate-y-2 scale-90;
}
.carousel__slide--prev > .carousel__item {
  @apply translate-x-2 translate-y-2 scale-90;
}
.carousel__slide--active > .carousel__item {
  @apply scale-105;
}
</style>
