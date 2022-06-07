<template>
  <div class="w-[95%]">
    <Carousel v-if="cars.length !== 0" :items-to-show="4" :wrap-around="true">
      <Slide v-for="(car, index) in cars" :key="index">
        <div class="carousel__item">
          <car
            @openCar="openCar"
            :id="car.id"
            :name="car.nama"
            :type="car.type"
            :transmission="car.tipe_transmisi"
            :capacity="car.kapasitas"
            :price="Math.ceil(car.harga_sewa / 1000)"
            :favorite="car.favorite ? true : false"
          ></car>
        </div>
      </Slide>

      <template #addons>
        <Navigation />
      </template>
    </Carousel>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
import Car from "@/components/booking/Car.vue";
import axios from "axios";

const cars = ref([]);

onMounted(() => {
  axios
    .get("/api/car")
    .then((res) => {
      cars.value = res.data;

      axios.get("/api/authenticated").then((res) => {
        if (res.data != "guest") {
          axios.get("/api/favorite-id").then((res) => {
            res.data.forEach((favorite) => {
              cars.value[favorite.armada_id - 1].favorite = true;
            });
          });
        }
      });
    })
    .catch((err) => {
      console.log(err);
    });
});

const emit = defineEmits(["openFleetCar"]);

const openCar = (id) => {
  emit("openFleetCar", id);
};
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
