<script>
import { Footer, Home, About, Projects, Contact, SnakeGame } from '@/components/index.js'
export default {
  name: 'App',
  components: {
    Footer,
    Home,
    About,
    Projects,
    Contact,
    SnakeGame,
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
            <div v-bind:class="{ 'button-active': isActive === 'Home' }" @click="choix='Home'; isActive = 'Home'" class="border-left">_hello</div><span></span>
          </li>
          <li v-bind:class="{ 'active': isActive === 'About' }">
            <div v-bind:class="{ 'button-active': isActive === 'About' }" @click="choix='About'; isActive = 'About'" class="border-right border-left">_about-me</div><span></span>
          </li>
          <li v-bind:class="{ 'active': isActive === 'Projects' }">
            <div v-bind:class="{ 'button-active': isActive === 'Projects' }" @click="choix='Projects'; isActive = 'Projects'" class="border-right">_projects</div><span></span>
          </li>
        </ul>
        <ul class="nav-bar">
          <li v-bind:class="{ 'active': isActive === 'Contact' }">
            <div v-bind:class="{ 'button-active': isActive === 'Contact' }" @click="choix='Contact'; isActive = 'Contact'" class="border-left">_contact-me</div><span></span>
          </li>
        </ul>
      </div>
    </nav>
  </header>

  <section v-if="show" class="main">
    <component :is="selectComponent" />
  </section>

  <nav class="liens-nav-phone" :class="{ active: showNavBar }">
    <ul class="nav-bar-phone">
      <li class="border-bottom" v-bind:class="{ 'active': isActive === 'Home' }">
        <div v-bind:class="{ 'button-active': isActive === 'Home' }" @click="choix='Home'; isActive = 'Home'">_hello</div>
      </li>
      <li class="border-bottom" v-bind:class="{ 'active': isActive === 'About' }">
        <div v-bind:class="{ 'button-active': isActive === 'About' }" @click="choix='About'; isActive = 'About'">_about-me</div>
      </li>
      <li class="border-bottom" v-bind:class="{ 'active': isActive === 'Projects' }">
        <div v-bind:class="{ 'button-active': isActive === 'Projects' }" @click="choix='Projects'; isActive = 'Projects'">_projects</div>
      </li>
      <li class="border-bottom" v-bind:class="{ 'active': isActive === 'Contact' }">
        <div v-bind:class="{ 'button-active': isActive === 'Contact' }" @click="choix='Contact'; isActive = 'Contact'">_contact-me</div>
      </li>
    </ul>
  </nav>
  <Footer></Footer>

  <div class="footer-phone border-top" :class="{ active: showNavBar }">
    <div class="footer-nav-phone">
      <div class="find">
        <p>Find me in :</p>
      </div>
      <div class="flex link">
        <div class="border-left">
          <a href="https://www.linkedin.com/in/léo-teissier" target="_blank" style="margin: 0 20px">
            <svg class="logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="64" height="64">
              <path fill="none" d="M0 0h24v24H0z"/>
              <path d="M6.94 5a2 2 0 1 1-4-.002 2 2 0 0 1 4 .002zM7 8.48H3V21h4V8.48zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91l.04-1.68z"/>
            </svg>
          </a>
        </div>
        <div class="border-left">
          <a href="https://github.com/leoteissier" target="_blank" style="margin: 0 20px">
            <svg class="logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="64" height="64">
              <path fill="none" d="M0 0h24v24H0z"/>
              <path d="M12 2C6.475 2 2 6.475 2 12a9.994 9.994 0 0 0 6.838 9.488c.5.087.687-.213.687-.476 0-.237-.013-1.024-.013-1.862-2.512.463-3.162-.612-3.362-1.175-.113-.288-.6-1.175-1.025-1.413-.35-.187-.85-.65-.013-.662.788-.013 1.35.725 1.538 1.025.9 1.512 2.338 1.087 2.912.825.088-.65.35-1.087.638-1.337-2.225-.25-4.55-1.113-4.55-4.938 0-1.088.387-1.987 1.025-2.688-.1-.25-.45-1.275.1-2.65 0 0 .837-.262 2.75 1.026a9.28 9.28 0 0 1 2.5-.338c.85 0 1.7.112 2.5.337 1.912-1.3 2.75-1.024 2.75-1.024.55 1.375.2 2.4.1 2.65.637.7 1.025 1.587 1.025 2.687 0 3.838-2.337 4.688-4.562 4.938.362.312.675.912.675 1.85 0 1.337-.013 2.412-.013 2.75 0 .262.188.574.688.474A10.016 10.016 0 0 0 22 12c0-5.525-4.475-10-10-10z"/>
            </svg>
          </a>
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
