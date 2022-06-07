<template>
  <div
    @click="$emit('openCar', id)"
    class="flex h-[max(max-content,_19rem)] w-full cursor-pointer flex-col place-content-between rounded-3xl bg-white p-6"
  >
    <div class="car-name flex place-content-between font-Yantramanav">
      <div class="name-wrapper text-left">
        <div class="text-2xl font-bold text-dark">
          {{ name }}
        </div>
        <div class="text-xl text-secondary">
          {{ type }}
        </div>
      </div>
      <div class="favorite">
        <div
          @click.stop.prevent="toggleFavorite"
          class="relative top-1 z-0 origin-right cursor-pointer"
        >
          <transition name="bounce">
            <font-awesome-icon
              v-if="favorite"
              class="absolute left-[-0.5px] top-[0.3px] z-10 h-[25px] w-[25px] origin-center text-red-400"
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
        src="../../../public/images/car/mustang.jpg"
        alt="car"
      />
    </div>

    <div class="specification flex place-content-between">
      <div class="capacity">
        <font-awesome-icon class="h-4 w-4 text-blue" :icon="['fas', 'user']" />
        <span class="mx-1 text-lg text-primary">
          {{ capacity }}
          <!-- <slot name="capacity"></slot> -->
        </span>
      </div>
      <div class="transmission">
        <font-awesome-icon class="h-5 w-5 text-blue" :icon="['fas', 'cogs']" />
        <span class="mx-1 text-lg text-primary">
          {{ transmission }}
          <!-- <slot name="cogs"></slot> -->
        </span>
      </div>
      <div class="price">
        <span class="text-lg font-bold text-primary">
          <span>
            IDR {{ price }}
            <!-- <slot name="price"></slot> -->
          </span>
        </span>
        <span class="text-lg text-primary">/d</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, onUpdated, ref, toRef, watch } from "vue";
import axios from "axios";

let props = defineProps({
  id: Number,
  name: String,
  type: String,
  transmission: String,
  capacity: Number,
  price: Number,
  favorite: Boolean,
});
const favorite = ref(false);

onMounted(() => {
  favorite.value = props.favorite;
});

onUpdated(() => {
  favorite.value = props.favorite;
});

const toggleFavorite = () => {
  favorite.value = !favorite.value;
  axios.get("/api/authenticated").then((res) => {
    if (res.data != "guest") {
      if (favorite.value) {
        axios.post("/api/favorite/store", {
          armada_id: props.id,
        });
      } else {
        axios.delete("/api/favorite/destroy", {
          data: {
            armada_id: props.id,
          },
        });
      }
    }
  });
};
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
