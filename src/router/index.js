import Vue from 'vue'
import VueRouter from 'vue-router'
import Character from '../components/characters/Character.vue'
import CharacterInfo from '../components/characters/CharacterInfo.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'CharaterPage',
    component: Character
  },
  {
    path: '/character',
    name: 'CharacterInfo',
    component: CharacterInfo
  }
]

const router = new VueRouter({
  routes
})

export default router
