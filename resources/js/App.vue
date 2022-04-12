<template>
  <header class="flex place-content-center">
    <div
      class="grid h-24 w-screen grid-flow-col place-items-center border-b border-gray-500 border-b-secondary border-opacity-50 px-4 font-Yantramanav text-2xl text-secondary lg:w-[92vw] lg:p-0"
    >
      <nav
        class="relative flex h-full w-full min-w-[38rem] flex-row items-center gap-4 lg:gap-[4%]"
      >
        <div
          @click="hideLine"
          class="font-WorkSans text-3xl font-black uppercase tracking-tighter text-blue lg:w-36"
        >
          <router-link to="/">Rental</router-link>
        </div>
        <div @click="changeLine" class="item-nav">
          <router-link to="/booking">Booking</router-link>
        </div>
        <div @click="changeLine" class="item-nav">
          <router-link to="/about-us">About Us</router-link>
        </div>
        <div @click="changeLine" class="item-nav">
          <router-link to="/contact">Support</router-link>
        </div>
        <div @click="changeLine" class="item-nav">
          <router-link to="/terms-conditions">Terms & Conditions</router-link>
        </div>
        <div
          :style="{
            width: `${navWidth}px`,
            transform: `translateX(${positionX}px) scaleX(${scaleX})`,
          }"
          ref="underlineNav"
          class="absolute left-0 bottom-[-2.5px] h-[5px] origin-center rounded-lg bg-blue transition-all duration-700 ease-in-out"
        ></div>
      </nav>
      <div
        class="profile flex w-full flex-row place-content-end place-items-center gap-[15%] lg:gap-[7%]"
      >
        <router-link @click="hideLine" to="/favorites">
          <font-awesome-icon :icon="['far', 'heart']" />
        </router-link>
        <div class="notification">
          <font-awesome-icon :icon="['far', 'bell']" />
        </div>
        <router-link @click="hideLine" to="/profile">
          <font-awesome-icon :icon="['far', 'circle']" />
        </router-link>
      </div>
    </div>
  </header>
  <router-view />
</template>

<script>
export default {
  name: "App",
  data: function () {
    return {
      navWidth: 0,
      positionX: 0,
      scaleX: 0,
    };
  },

  methods: {
    changeLine(event) {
      const element = event.path[1].getBoundingClientRect();
      const parent = event.path[2].getBoundingClientRect();
      this.scaleX = 1.1;
      this.navWidth = element.width;
      this.positionX = element.x - parent.x;
    },
    hideLine() {
      this.scaleX = 0;
    },
  },
};
</script>
