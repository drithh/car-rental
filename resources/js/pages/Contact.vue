<script setup>
import Contact from "components/contact/Contact.vue";
import InputBox from "components/contact/InputBox.vue";
import BottomBorder from "components/BottomBorder.vue";
</script>

<template>
  <section
    class="contact m-auto mb-20 mt-32 flex flex-row place-content-center gap-x-20 lg:w-[92vw]"
  >
    <div
      class="contact-information flex h-[50rem] w-[36rem] flex-col gap-y-12 rounded-3xl border-2 border-secondary border-opacity-20 bg-darkencream p-10"
    >
      <div class="mb-16 mt-4 font-Yantramanav text-3xl opacity-80">
        Contact Information
      </div>
      <contact name="Email" value="hello@rental.com"></contact>
      <contact name="Support" value="support@rental.com"></contact>
      <contact
        name="Address"
        value="Jl Klipang Bl T-I/3 Sendang Mulyo 001/03, Jawa Tengah"
      ></contact>
    </div>
    <div class="get-in-touch w-[40rem]">
      <div class="font-Yantramanav text-5xl font-bold opacity-80">
        Get in Touch
      </div>
      <div class="text-2xl opacity-80">
        Submit a message and we will get back to you.
      </div>
      <div class="input-container mt-10 flex flex-col gap-y-4">
        <div class="name-input flex place-content-between">
          <input-box
            label="First Name"
            placeholder="John"
            type="text"
          ></input-box>
          <input-box
            label="Last Name"
            placeholder="Doe"
            type="text"
          ></input-box>
        </div>
        <input-box
          label="Email"
          placeholder="your@email.com"
          type="email"
        ></input-box>
        <input-box
          label="Category"
          placeholder="Refund"
          type="text"
        ></input-box>
        <div class="w-full px-3">
          <label
            class="text-gray-700 mb-2 block font-Yantramanav text-lg font-medium tracking-wide opacity-70"
          >
            Message
          </label>
          <textarea
            class="text-gray-700 mb-3 block w-full appearance-none rounded-xl border border-secondary border-opacity-60 bg-darkencream py-4 px-4 leading-tight opacity-70 focus:border-blue focus:bg-white focus:outline-none"
            rows="10"
            placeholder="How might we help you?"
          ></textarea>
          <button class="mt-12 flex w-full place-content-end">
            <div
              class="w-36 rounded-xl border border-secondary border-opacity-60 bg-darkencream py-2 px-6 opacity-70 hover:border-blue hover:opacity-100"
            >
              Submit
            </div>
          </button>
        </div>
      </div>
    </div>
  </section>
  <bottom-border></bottom-border>
</template>
