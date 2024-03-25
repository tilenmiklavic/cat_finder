import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import LoadingScreen from './components/common/LoadingScreen.vue'
import TitleText from './components/common/TitleText.vue'

import { OhVueIcon, addIcons } from 'oh-vue-icons'
import { BiArrowLeftCircleFill, BiArrowRightCircleFill } from 'oh-vue-icons/icons'

addIcons(BiArrowLeftCircleFill, BiArrowRightCircleFill)

const app = createApp(App)

app
  .component('LoadingScreen', LoadingScreen)
  .component('TitleText', TitleText)
  .component('v-icon', OhVueIcon)

app.use(createPinia())
app.use(router)

app.mount('#app')
