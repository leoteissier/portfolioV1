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
      isActive: 'Home',
      composants: [
        'Home',
        'About',
        'Projects',
        'Contact',
      ],
      show: true,
      showNavBar: false,
    }
  },
  computed: {
    selectComponent() {
      return this.composants.find((component) => component === this.choix)
    },
  },
}
</script>

<template>
  <header>
    <nav>
      <div class="name">
        <p>léo-teissier</p>
      </div>
      <div class="burger">
        <img src="/assets/menu.svg" alt="Menu" @click="showNavBar = !showNavBar">
      </div>
      <div class="liens">
        <ul class="nav-bar">
          <li v-bind:class="{ 'active': isActive === 'Home' }">
            <a v-bind:class="{ 'button-active': isActive === 'Home' }" @click="choix='Home'; isActive = 'Home'" class="border-left">_hello</a><span></span>
          </li>
          <li v-bind:class="{ 'active': isActive === 'About' }">
            <a v-bind:class="{ 'button-active': isActive === 'About' }" @click="choix='About'; isActive = 'About'" class="border-right border-left">_about-me</a><span></span>
          </li>
          <li v-bind:class="{ 'active': isActive === 'Projects' }">
            <a v-bind:class="{ 'button-active': isActive === 'Projects' }" @click="choix='Projects'; isActive = 'Projects'" class="border-right">_projects</a><span></span>
          </li>
        </ul>
        <ul class="nav-bar">
          <li v-bind:class="{ 'active': isActive === 'Contact' }">
            <a v-bind:class="{ 'button-active': isActive === 'Contact' }" @click="choix='Contact'; isActive = 'Contact'" class="border-left">_contact-me</a><span></span>
          </li>
        </ul>
      </div>
    </nav>
  </header>
  <section v-if="show" class="main">
    <component :is="selectComponent" />
    <div class="liens-nav-phone" :class="{ active: showNavBar }">
      <ul class="nav-bar-phone">
        <li class="border-bottom" v-bind:class="{ 'active': isActive === 'Home' }">
          <a v-bind:class="{ 'button-active': isActive === 'Home' }" @click="choix='Home'; isActive = 'Home'">_hello</a>
        </li>
        <li class="border-bottom" v-bind:class="{ 'active': isActive === 'About' }">
          <a v-bind:class="{ 'button-active': isActive === 'About' }" @click="choix='About'; isActive = 'About'">_about-me</a>
        </li>
        <li class="border-bottom" v-bind:class="{ 'active': isActive === 'Projects' }">
          <a v-bind:class="{ 'button-active': isActive === 'Projects' }" @click="choix='Projects'; isActive = 'Projects'">_projects</a>
        </li>
        <li class="border-bottom" v-bind:class="{ 'active': isActive === 'Contact' }">
          <a v-bind:class="{ 'button-active': isActive === 'Contact' }" @click="choix='Contact'; isActive = 'Contact'">_contact-me</a>
        </li>
      </ul>
    </div>
  </section>
  <Footer></Footer>

  <div class="footer-phone border-top" :class="{ active: showNavBar }">
    <div class="footer-nav-phone">
      <div class="find">
        <p>Find me in :</p>
      </div>
      <div class="flex link">
        <div class="border-left">
          <a href="https://www.linkedin.com/in/léo-teissier" target="_blank"><img class="logo" src="/assets/linkedin.svg" alt="logo linkedin"></a>
        </div>
        <div class="border-left">
          <a href="https://github.com/leoteissier" target="_blank"><img  class="logo" src="/assets/github.svg" alt="logo github"></a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .active {
    display: block;
  }
</style>
