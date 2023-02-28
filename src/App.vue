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
    }
  },
  computed: {
    selectComponent() {
      return this.composants.find((component) => component === this.choix)
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
  </section>
  <Footer></Footer>
</template>

<style scoped>

</style>
