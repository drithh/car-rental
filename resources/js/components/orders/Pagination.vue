<template>
  <div
    class="border-gray-200 mt-4 flex items-center justify-between border-t border-secondary border-opacity-60 bg-white px-4 pb-3 pt-8 sm:px-6"
  >
    <div class="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
      <div>
        <p class="text-gray-700 text-sm">
          Showing
          {{ " " }}
          <span class="font-medium">{{ results.from }}</span>
          {{ " " }}
          to
          {{ " " }}
          <span class="font-medium">{{ results.to }}</span>
          {{ " " }}
          of
          {{ " " }}
          <span class="font-medium">{{ results.total }}</span>
          {{ " " }}
          results
        </p>
      </div>
      <div>
        <nav
          class="relative z-0 inline-flex -space-x-px rounded-md shadow-sm"
          aria-label="Pagination"
        >
          <a
            v-for="link in results.links"
            :key="link.label"
            @click="$emit('changePage', link.url)"
            class="relative z-10 inline-flex cursor-pointer items-center border border-primary px-4 py-2 text-sm font-medium text-primary hover:bg-indigo-50 hover:text-indigo-500"
            :class="{ 'bg-indigo-50': link.active }"
          >
            <ChevronLeftIcon
              v-if="link.label.includes('Previous')"
              class="h-5 w-5"
              aria-hidden="true"
            />
            <ChevronRightIcon
              v-else-if="link.label.includes('Next')"
              class="h-5 w-5"
              aria-hidden="true"
            />

            <div v-else class="">
              {{ link.label }}
            </div>
          </a>
        </nav>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/vue/solid";
import { onMounted, onUpdated, ref } from "vue";
const props = defineProps({
  result: {},
});

const emit = defineEmits(["changePage"]);

const results = ref(props.result.result);

onUpdated(() => {
  results.value = props.result.result;
  if (results.value.links.length > 12) {
    results.value.links.splice(6, 5);
  }
});

onMounted(() => {
  results.value.links.splice(6, 5);
});
</script>
