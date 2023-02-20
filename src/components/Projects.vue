<script>
// import { Javascript, Css3, React, Vuejs, Symfony, Nextjs, Threejs } from '@/components/index.js'
import Javascript from '@/components/projects/Javascript.vue'
import Css3 from '@/components/projects/Css3.vue'
import React from '@/components/projects/React.vue'
import Vuejs from '@/components/projects/Vuejs.vue'
import Symfony from '@/components/projects/Symfony.vue'
import Nextjs from '@/components/projects/Nextjs.vue'
import Threejs from '@/components/projects/Threejs.vue'
export default {
  name: 'Projects',
  components: {
    Javascript,
    Css3,
    React,
    Vuejs,
    Symfony,
    Nextjs,
    Threejs,
  },
  data() {
    return {
      choix: 'Javascript',
      composants: [
        'Javascript',
        'Css3',
        'React',
        'Vuejs',
        'Symfony',
        'Nextjs',
        'Threejs',
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
  <section class="main">
    <div id="projects">
      <div class="nom-page1 border-bottom"><img class="petit-logo-arrow" src="/assets/arrow-drop-down.svg" alt=""><p>projects</p></div>
      <div class="nom-page2 border-left border-bottom border-right"><p>projects</p><img class="petit-logo-cross" src="/assets/close.svg" alt=""></div>
      <div class="nom-page3 border-bottom"></div>
      <div class="details-projects flex">
        <!--
        <div class="flex-center"><div class="position-checkbox"><label class="checkbox"><input @click="choix='Javascript'" type="checkbox"><span class="checkmark"></span></label></div><img class="logo-projects" src="../assets/logo-javascript.svg" alt="logo reactjs"><p>Javascript</p></div>
        <div class="flex-center"><div class="position-checkbox"><label class="checkbox"><input @click="choix='React'" type="checkbox"><span class="checkmark"></span></label></div><img class="logo-projects" src="../assets/reactjs.svg" alt="logo reactjs"><p>React</p></div>
        <div class="flex-center"><div class="position-checkbox"><label class="checkbox"><input @click="choix='Html'" type="checkbox"><span class="checkmark"></span></label></div><img class="logo-projects" src="../assets/html5.svg" alt="logo html5"><p>HTML</p> </div>
        <div class="flex-center"><div class="position-checkbox"><label class="checkbox"><input @click="choix='Css'" type="checkbox"><span class="checkmark"></span></label></div><img class="logo-projects" src="../assets/css3.svg" alt="logo css3"><p>CSS</p></div>
        <div class="flex-center"><div class="position-checkbox"><label class="checkbox"><input @click="choix='Vuejs'" type="checkbox"><span class="checkmark"></span></label></div><img class="logo-projects" src="../assets/vuejs.svg" alt="logo vuejs"><p>Vue</p></div>
        <div class="flex-center"><div class="position-checkbox"><label class="checkbox"><input @click="choix='Angularjs'" type="checkbox"><span class="checkmark"></span></label></div><img class="logo-projects" src="../assets/angularjs.svg" alt="logo angularjs"><p>Angular</p></div>
        <div class="flex-center"><div class="position-checkbox"><label class="checkbox"><input @click="choix='Symphony'" type="checkbox"><span class="checkmark"></span></label></div><img class="logo-projects" src="../assets/logo-symfony.svg" alt="logo symphony"><p>Symphony</p></div>
        -->
        <div class="flex-center"><div class="position-checkbox"><label class="radio"><input @click="choix='Javascript'" name="radio" type="radio" checked><span></span></label></div><img class="logo-projects" src="/assets/logo-javascript.svg" alt="logo javascript"><p>Javascript</p></div>
        <div class="flex-center"><div class="position-checkbox"><label class="radio"><input @click="choix='Css'" name="radio" type="radio"><span></span></label></div><img class="logo-projects" src="/assets/css3.svg" alt="logo css"><p>Css</p></div>
        <div class="flex-center"><div class="position-checkbox"><label class="radio"><input @click="choix='React'" name="radio" type="radio"><span></span></label></div><img class="logo-projects" src="/assets/reactjs.svg" alt="logo reactjs"><p>React</p></div>
        <div class="flex-center"><div class="position-checkbox"><label class="radio"><input @click="choix='Vuejs'" name="radio" type="radio"><span></span></label></div><img class="logo-projects" src="/assets/vuejs.svg" alt="logo vuejs"><p>Vuejs</p> </div>
        <div class="flex-center"><div class="position-checkbox"><label class="radio"><input @click="choix='Symphony'" name="radio" type="radio"><span></span></label></div><img class="logo-projects" src="/assets/logo-symfony.svg" alt="logo symfony"><p>Symphony</p></div>
        <div class="flex-center"><div class="position-checkbox"><label class="radio"><input @click="choix='Nextjs'" name="radio" type="radio"><span></span></label></div><img class="logo-projects" src="/assets/logo-nextjs.svg" alt="logo nextjs"><p>Nextjs</p></div>
        <div class="flex-center"><div class="position-checkbox"><label class="radio"><input @click="choix='Threejs'" name="radio" type="radio"><span></span></label></div><img class="logo-projects" src="/assets/three-js-icon.svg" alt="logo threejs"><p>Threejs</p></div>
       </div>
      <div class="border-left" id="list-projects">
        <section class="list-projects">
          <Javascript v-if="choix === 'Javascript'"></Javascript>
          <Css3 v-if="choix === 'Css'"></Css3>
          <React v-if="choix === 'React'"></React>
          <Vuejs v-if="choix === 'Vuejs'"></Vuejs>
          <Symfony v-if="choix === 'Symphony'"></Symfony>
          <Nextjs v-if="choix === 'Nextjs'"></Nextjs>
          <Threejs v-if="choix === 'Threejs'"></Threejs>
        </section>
        <div class="scroll border-left">
          <span></span>
        </div>
      </div>

    </div>
  </section>
</template>

<style scoped>

</style>