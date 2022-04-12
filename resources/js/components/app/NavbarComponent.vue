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
          <router-link to="/support">Support</router-link>
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
        class="profile flex w-full flex-row place-content-end place-items-center gap-[15%] text-secondary lg:gap-[7%]"
      >
        <router-link
          @click="
            hideLine();
            profileButton = 1;
          "
          class="relative"
          to="/favorite"
        >
          <font-awesome-icon :icon="['far', 'heart']" />
          <transition>
            <font-awesome-icon
              v-if="profileButton === 1"
              class="absolute left-0 top-[2px] -z-10 origin-center"
              icon="heart"
            />
          </transition>
        </router-link>
        <div @click="profileButton = 2" class="relative cursor-pointer">
          <font-awesome-icon :icon="['far', 'bell']" />
          <transition>
            <font-awesome-icon
              v-if="profileButton === 2"
              class="absolute left-0 top-[2px] -z-10 origin-center"
              icon="bell"
            />
          </transition>
        </div>
        <div class="profile relative">
          <router-link
            @click="
              hideLine();
              profileButton = 3;
            "
            to="/profile"
          >
            <font-awesome-icon :icon="['far', 'circle']" />
            <transition>
              <font-awesome-icon
                v-if="profileButton === 3"
                class="absolute left-0 top-[2px] -z-10 origin-center"
                icon="circle"
              />
            </transition>
          </router-link>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "NavbarComponent",
  data: function () {
    return {
      navWidth: 0,
      positionX: 0,
      scaleX: 0,
      profileButton: 0,
    };
  },

  methods: {
    changeLine(event) {
      const element = event.path[1].getBoundingClientRect();
      const parent = event.path[2].getBoundingClientRect();
      this.scaleX = 1.1;
      this.navWidth = element.width;
      this.positionX = element.x - parent.x;
      this.profileButton = 0;
    },
    hideLine() {
      this.scaleX = 0;
    },
  },
};
</script>

<style lang="postcss" scoped>
.item-nav.router-link-active {
  @apply text-primary;
}
.v-enter-active,
.v-leave-active {
  @apply animate-scale-bounce-enter;
}
.v-enter-from,
.v-leave-to {
  @apply animate-scale-bounce-leave;
}
</style>
