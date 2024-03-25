<script setup lang="ts">
import TitleText from '../components/common/TitleText.vue'
</script>

<template>
  <main>
    <TitleText title="About" />
  </main>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
