<script lang="ts">
import { getCats, getBreeds } from '../services/cats'
import { onMounted, ref, watch } from 'vue'
import { Breed } from '../types/Breed'
import { Cat } from '../types/Cat'
import { CatProps } from '../types/CatProps'
import CatCard from '../components/CatCard.vue'
import ProgressBar from '../components/common/ProgressBar.vue'
import { isEmpty } from '../services/stringUtils'

let catApiKey = import.meta.env.VITE_CAT_API_KEY

export default {
  components: {
    CatCard,
    ProgressBar
  },
  setup() {
    const cats = ref<Cat[]>([])
    const loading = ref(true)
    const breeds = ref<Breed[]>([])
    const selectedBreed = ref('')
    const indexCounter = ref(0)
    const demoProps = {
      title: 'Demo title',
      description: 'Demo description',
      image: 'https://cdn2.thecatapi.com/images/MTYwNjYxNQ.jpg'
    }

    onMounted(async () => {
      try {
        breeds.value = await getBreeds()
      } catch (error) {
        console.error('Error fetching user data:', error)
      } finally {
        loading.value = false
      }
    })

    watch(selectedBreed, async (newBreedId, oldBreedId) => {
      if (newBreedId !== '') {
        try {
          const data = await getCats(catApiKey, newBreedId)
          cats.value = data
        } catch (error) {
          console.error('Error fetching cat details:', error)
        }
      }
    })

    function computedCatProps(): CatProps {
      const cat = cats.value[indexCounter.value]

      if (cat) {
        return {
          title: cat.breeds[0].name,
          description: cat.breeds[0].description,
          image: cat.url
        }
      }
    }

    function changeIndex(increase: boolean) {
      if (increase) {
        indexCounter.value = (indexCounter.value + 1) % cats.value.length
      } else {
        indexCounter.value = (indexCounter.value - 1 + cats.value.length) % cats.value.length
      }
    }

    return {
      breeds,
      loading,
      selectedBreed,
      demoProps,
      isEmpty,
      computedCatProps,
      cats,
      changeIndex,
      indexCounter
    }
  }
}
</script>

<template>
  <main>
    <TitleText title="Home" />
    <LoadingScreen v-if="loading" />

    <div v-else class="flex flex-col justify-center items-center">
      <form>
        <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >Select a cat breed</label
        >
        <select
          id="countries"
          v-model="selectedBreed"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 mb-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option selected>Choose a breed</option>
          <option v-for="breed in breeds" :key="breed.id" :value="breed.id">
            {{ breed.name }}
          </option>
        </select>
      </form>

      <div v-if="cats.length > 0" class="flex flex-row">
        <button @click="changeIndex(false)">
          <v-icon name="bi-arrow-left-circle-fill" scale="3" />
        </button>
        <div>
          <ProgressBar :progress="((indexCounter + 1) / cats.length) * 100" />
          <CatCard v-bind="computedCatProps()" />
        </div>
        <button @click="changeIndex(true)">
          <v-icon name="bi-arrow-right-circle-fill" scale="3" />
        </button>
      </div>
    </div>
  </main>
</template>
