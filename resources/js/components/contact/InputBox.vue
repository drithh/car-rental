<template>
  <div class="w-full px-3">
    <label
      class="text-gray-700 mb-2 block font-Yantramanav text-lg font-medium tracking-wide opacity-70"
    >
      {{ label }}
    </label>
    <input
      :type="type"
      :name="label"
      autocomplete="off"
      class="text-gray-700 mb-3 block w-full appearance-none rounded-xl border border-secondary border-opacity-60 bg-darkencream bg-opacity-100 py-3 px-4 leading-tight opacity-70 focus:border-blue focus:bg-white focus:outline-none"
      :placeholder="placeholder"
      :value="modelValue"
      @input="updateValue"
    />
  </div>
</template>

<script setup>
import { ref, onUpdated, onMounted } from "vue";

const emit = defineEmits(["update:modelValue"]);
const props = defineProps({
  label: String,
  placeholder: String,
  type: String,
  textvalue: String,
});

const modelValue = ref();

let defaultValue = false;

onUpdated(() => {
  modelValue.value = props.textvalue;
});

const updateValue = (event) => {
  emit("update:modelValue", event.target.value);
};
</script>
