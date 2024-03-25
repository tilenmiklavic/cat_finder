<script setup lang="ts">
defineProps<{
  title: string
}>()
</script>

<template>
  <h1
    class="mb-4 ms-3 mt-2 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white"
  >
    {{ title }}
  </h1>
</template>
