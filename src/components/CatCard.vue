<script setup lang="ts">
import { defineProps } from 'vue'

defineProps<{
  title: string
  description: string
  image: string
}>()
</script>
<template>
  <div
    class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
  >
    <div href="#">
      <img class="rounded-t-lg" :src="image" alt="cat_image" />
    </div>
    <div class="p-5">
      <div>
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {{ title }}
        </h5>
      </div>
      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
        {{ description }}
      </p>
    </div>
  </div>
</template>
