<script setup lang="ts">
import TitleText from '../components/common/TitleText.vue'
</script>

<template>
  <main>
    <TitleText title="About" />

    <div class="max-w-4xl mx-auto my-5">
      <h1 class="text-4xl font-bold mb-4">cat_finder 🐈</h1>
      <h2 class="text-2xl font-bold mt-6 mb-2">Setup for dev and preview</h2>
      <p class="mb-4">Make sure npm is installed on your system.</p>
      <p class="mb-4">
        Git clone the project on a location on your computer and move to cloned folder
      </p>
      <pre class="bg-gray-200 rounded p-4 mb-4"><code>cd cat_finder</code></pre>
      <p class="mb-4">Then install all the necessary packages and dependencies</p>
      <pre class="bg-gray-200 rounded p-4 mb-4"><code>npm install</code></pre>
      <p class="mb-4">Run the preview</p>
      <pre class="bg-gray-200 rounded p-4 mb-4"><code>npm run dev</code></pre>
      <h2 class="text-2xl font-bold mt-6 mb-2">Project summary</h2>
      <p class="mb-4">This is a technical assignment project, for interview purposes.</p>
      <h2 class="text-2xl font-bold mt-6 mb-2">API usage</h2>
      <p class="mb-4">
        The app is using
        <a href="https://thecatapi.com/" class="text-blue-600 hover:text-blue-800">The Cat API</a>
        with free tier option.
      </p>
      <p class="mb-4">It is using two endpoints:</p>
      <ul class="list-disc list-inside mb-4">
        <li>Breed list endpoint on https://api.thecatapi.com/v1/breeds</li>
        <li>
          Image search endpoint on https://api.thecatapi.com/v1/images/search?breed_ids={breed.id}
        </li>
      </ul>
      <h2 class="text-2xl font-bold mt-6 mb-2">Technologies 💾</h2>
      <p class="mb-4">
        A couple of different technologies were used to develop this project.<br />
        Mainly this app is build in Vue v3 framework, which is utilising TypeScript.
      </p>
      <h2 class="text-2xl font-bold mt-6 mb-2">Project Setup ⚠️</h2>
      <h3 class="text-xl font-bold mt-4 mb-2">Compile and Hot-Reload for Development</h3>
      <pre class="bg-gray-200 rounded p-4 mb-4"><code>npm run dev</code></pre>
      <h3 class="text-xl font-bold mt-4 mb-2">Type-Check, Compile and Minify for Production</h3>
      <pre class="bg-gray-200 rounded p-4 mb-4"><code>npm run build</code></pre>
      <h3 class="text-xl font-bold mt-4 mb-2">
        Lint with <a href="https://eslint.org/" class="text-blue-600 hover:text-blue-800">ESLint</a>
      </h3>
      <pre class="bg-gray-200 rounded p-4"><code>npm run lint</code></pre>
    </div>
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
