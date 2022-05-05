<template>
  <transition name="page" @enter="onPageEnter" appear>
    <main class="overflow-hidden">
      <section
        class="faq relative m-auto mt-14 flex flex-col place-content-center place-items-center lg:w-[92vw]"
      >
        <div
          id="title"
          class="my-12 font-Yantramanav text-5xl font-black text-primary"
        >
          Frequently Asked Questions
        </div>
        <accordion-container
          v-for="(item, index) in faqsArray"
          class="accordion"
          :key="index"
          :title="item.title"
          :faqs="item.faqs"
        ></accordion-container>
      </section>
      <bottom-border></bottom-border>
    </main>
  </transition>
</template>

<script setup>
import AccordionContainer from "components/faq/AccordionContainer.vue";
import BottomBorder from "components/BottomBorder.vue";
import anime from "animejs";
import { onBeforeRouteLeave } from "vue-router";

const animateContainer = (id, start, end, delay) => {
  anime({
    targets: id,
    translateX: [start, end],
    easing: "easeInOutQuart",
    duration: 800,
    delay: delay,
  }).finished;
};

const onPageEnter = () => {
  const child = faqsArray.length + 2;

  for (let i = 0; i < child; i++) {
    animateContainer(`.faq > div:nth-child(${i})`, "100vw", "0", i * 150);
  }
};

onBeforeRouteLeave((to, from, next) => {
  const child = faqsArray.length + 2;

  for (let i = 0; i < child; i++) {
    animateContainer(`.faq > div:nth-child(${i})`, "0", "-100vw", i * 150);
  }
  setTimeout(() => {
    next();
  }, child * 200);
});

const faqsArray = [
  {
    title: "Reservation FAQ",
    faqs: [
      {
        open: false,
        question: "How do I make a reservation?",
        answer:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel corporis voluptates delectus maxime necessitatibus veritatis explicabo nihil culpa beatae incidunt, temporibus dignissimos nobis, molestias voluptate accusamus ipsam laudantium illum! Sed iusto enim, dolores repellendus nostrum ea sint assumenda praesentium, nulla, vel ipsa a quam placeat facilis vitae id officiis commodi? Ab, autem. Eveniet voluptates consequatur, facere at neque voluptate perferendis, quo error assumenda, dolore reprehenderit suscipit? Possimus illo enim qui voluptates nesciunt veniam eos aliquid? Voluptates architecto distinctio nisi laboriosam vitae aperiam neque sequi minima debitis, vero voluptate facere, pariatur dignissimos maxime unde modi. Ratione nihil commodi sunt nesciunt nam.",
      },
      {
        open: false,
        question: "How do I cancel my reservation?",
        answer:
          "You can cancel your reservation by calling us at (123) 456-7890 or by filling out the form on our website.",
      },
      {
        open: false,
        question: "How do I change my reservation?",
        answer:
          "You can change your reservation by calling us at (123) 456-7890 or by filling out the form on our website.",
      },
      {
        open: false,
        question: "How do I check my reservation status?",
        answer:
          "You can check your reservation status by calling us at (123) 456-7890 or by filling out the form on our website.",
      },
    ],
  },
  {
    title: "Rental FAQ",
    faqs: [
      {
        open: false,
        question: "What is the difference between a car and a truck?",
        answer:
          "A truck is a vehicle that is designed to carry cargo or passengers.",
      },
      {
        open: false,
        question: "Why do we use cars?",
        answer: "Cars are used for many different purposes.",
      },
      {
        open: false,
        question: "What is a truck?",
        answer:
          "A truck is a vehicle that is designed to carry cargo or passengers.",
      },
      {
        open: false,
        question: "Why do we use trucks?",
        answer: "Trucks are used for many different purposes.",
      },
    ],
  },
  {
    title: "Payment FAQ",
    faqs: [
      {
        open: false,
        question: "Which payment methods are available?",
        answer: "We accept Visa, MasterCard, American Express, and Discover.",
      },
      {
        open: false,
        question: "How do I make a payment?",
        answer: "You can make a payment by calling our office.",
      },
    ],
  },
];
</script>
