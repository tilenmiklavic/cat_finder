<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import BottomFooter from './components/BottomFooter.vue'
</script>

<template>
  <header>
    <nav class="bg-gray-200 w-100 flex flex-row items-center gap-5">
      <img src="./assets/logo_cat.png" width="30" alt="logo" class="ml-5" />
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
    </nav>
  </header>

  <div class="mb-24">
    <Suspense>
      <RouterView />
    </Suspense>
  </div>

  <BottomFooter />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    place-items: center;
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    /* margin-left: -1rem; */
    font-size: 1rem;

    padding: 1rem 0;
  }
}
</style>
