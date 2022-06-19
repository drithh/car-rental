<template>
  <div class="w-full px-3">
    <label
      class="text-gray-700 mb-2 block font-Yantramanav text-lg font-medium tracking-wide opacity-70"
    >
      {{ label }}
    </label>
    <div
      v-if="wrongMessage"
      class="mb-2 font-Yantramanav text-sm font-medium tracking-wide text-red-500 opacity-70"
    >
      {{ wrongMessage }}
    </div>
    <div class="relative">
      <input
        :type="visibility"
        :name="label"
        autocomplete="off"
        class="text-gray-700 mb-3 block w-full appearance-none rounded-xl border border-secondary border-opacity-60 bg-darkencream bg-opacity-100 py-3 px-4 leading-tight opacity-70 focus:border-blue focus:bg-white focus:outline-none"
        :class="{ 'border-red-500 ring-1 ring-red-500': wrong }"
        :placeholder="placeholder"
        :value="modelValue"
        @input="updateValue"
      />
      <font-awesome-icon
        v-show="type === 'password'"
        @click="togglePasswordVisibility"
        class="absolute right-4 bottom-3 h-5 w-8 cursor-pointer opacity-10"
        :icon="icon"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, onUpdated, onMounted } from "vue";

const emit = defineEmits(["update:modelValue"]);
const props = defineProps({
  label: String,
  placeholder: String,
  type: String,
  textvalue: String | Number,
  wrong: Boolean,
  wrongMessage: String,
});

const visibility = ref(props.type || "text");
const icon = ref("eye");

const togglePasswordVisibility = (e) => {
  if (visibility.value === "password") {
    visibility.value = "text";
    icon.value = "eye-slash";
  } else {
    visibility.value = "password";
    icon.value = "eye";
  }
};

const modelValue = ref();

let defaultValue = false;

onUpdated(() => {
  modelValue.value = props.textvalue;
});

const updateValue = (event) => {
  emit("update:modelValue", event.target.value);
};
</script>
