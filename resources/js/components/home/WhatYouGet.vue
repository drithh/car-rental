<template>
  <div class="my-20 flex flex-col place-content-center place-items-center">
    <div
      class="image-wrapper flex h-56 w-56 place-content-center place-items-center rounded-full bg-white"
    >
      <img
        :src="
          'https://res.cloudinary.com/dcqu7m9lc/image/upload/v1655879528/car/' +
          image
        "
        class="h-4/5 w-4/5"
      />
    </div>
    <div class="content relative z-10 box-border p-8 text-center">
      <div class="title my-4 text-2xl font-bold text-primary opacity-90">
        {{ title }}
      </div>
      <div class="title text-lg text-primary opacity-70">{{ description }}</div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  title: String,
  description: String,
  image: String,
});
</script>
