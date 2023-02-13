<script>
import { Footer, Home, About, Projects, Contact } from '@/components/index.js'
export default {
  name: 'App',
  components: {
    Footer,
    Home,
    About,
    Projects,
    Contact,
  },
  data() {
    return {
      choix: 'Home',
      composants: [
        'Home',
        'About',
        'Projects',
        'Contact',
      ],
    }
  },
  computed: {
    selectComponent() {
      return this.composants[this.choix]
    }
  }
}

</script>

<template>
  <header>
    <nav>
      <div id="name">
        <p>léo-teissier</p>
      </div>
      <div id="liens">
        <ul class="nav-bar">
          <li class="active"><a  @click="choix='Home'" class="border-left button-active">_hello</a><span></span></li>
          <li><a @click="choix='About'" class="border-right border-left">_about-me</a><span></span></li>
          <li><a @click="choix='Projects'" class="border-right">_projects</a><span></span></li>
        </ul>
        <ul class="nav-bar">
          <li><a @click="choix='Contact'" class="border-left">_contact-me</a><span></span></li>
        </ul>
      </div>
    </nav>
  </header>

  <home v-if="choix === 'Home'"></home>
  <about v-if="choix === 'About'"></about>
  <projects v-if="choix === 'Projects'"></projects>
  <contact v-if="choix === 'Contact'"></contact>

  <Footer></Footer>
</template>

<style scoped>

</style>
