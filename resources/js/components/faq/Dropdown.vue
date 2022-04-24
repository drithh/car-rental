<script setup>
import { ref, watch } from "vue";
const content = ref(false);
</script>
<template>
  <div
    class="wrapper min-h-16 flex w-full flex-col rounded-2xl border border-secondary border-opacity-70 px-6 py-4"
    :class="{ 'border-blue': content }"
  >
    <div class="question flex place-content-between text-xl opacity-80">
      <div
        class="text-pimary flex items-center opacity-70"
        :class="{ 'opacity-100': content }"
      >
        Lorem ipsum dolor sit amet.
      </div>
      <button @click="content = !content" class="button-primary">
        <span class="button-primary-text text-pimary text-xl opacity-70">
          <font-awesome-icon
            :class="{ 'rotate-[360deg]': content }"
            class="scale-x-[1.1] text-primary opacity-70 duration-700"
            :icon="['fas', content ? 'minus' : 'plus']"
          />
        </span>
      </button>
    </div>
    <div class="content text-pimary mt-6 mb-4 opacity-70" v-if="content">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda quasi
      et nobis iusto doloremque accusantium vel consequatur, a eligendi velit!
      Ut nulla aut ea saepe ullam provident vel aperiam veritatis amet sapiente
      facilis deserunt laboriosam, delectus dolorum soluta reprehenderit
      accusamus, quam ab necessitatibus quaerat adipisci? Amet, eveniet tenetur
      iure fuga perspiciatis cupiditate dolore magnam non animi labore porro
      odit fugiat repudiandae nobis eos, maxime nostrum deleniti autem
      consequatur? Odit sunt ipsum, vero odio soluta, doloribus illo, eum
      aliquam obcaecati eveniet vel exercitationem similique expedita
      praesentium facere. Enim vitae quidem, ut voluptatem sapiente aspernatur
      libero quos delectus repellendus! Ipsam, minima odio.
    </div>
  </div>
</template>
