<script setup>
import Accordion from "components/faq/Accordion.vue";
import { ref, watch } from "vue";

const props = defineProps({
  title: String,
  faqs: Array,
});

const localFaqs = ref(props.faqs);

const closeAccordion = (index) => {
  localFaqs.value.forEach((faq, i) => {
    if (i === index) {
      faq.open = !faq.open;
    } else if (faq.open) {
      faq.open = false;
    }
  });
};
</script>

<template>
  <div class="wrapper my-8 w-[80%]">
    <div class="accordion-title flex w-full">
      <div
        class="title text-left font-Yantramanav text-[2.5rem] font-bold text-primary"
      >
        {{ title }}
      </div>
    </div>
    <div
      class="accordion-container flex w-full flex-col place-content-center gap-3"
    >
      <accordion
        v-for="(item, index) in localFaqs"
        @toggle="closeAccordion"
        :key="index"
        :index="index"
        :open="item.open"
        :question="item.question"
        :answer="item.answer"
      ></accordion>
    </div>
  </div>
</template>
