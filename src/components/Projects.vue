<script>
import Javascript from '@/components/projects/Javascript.vue'
import Css3 from '@/components/projects/Css3.vue'
import React from '@/components/projects/React.vue'
import Vuejs from '@/components/projects/Vuejs.vue'
import Symfony from '@/components/projects/Symfony.vue'
import Threejs from '@/components/projects/Threejs.vue'
export default {
  name: 'Projects',
  components: {
    Javascript,
    Css3,
    Vuejs,
    React,
    Symfony,
    Threejs,
  },
  data() {
    return {
      choix: 'Javascript',
      component: [
        'Javascript',
        'Css3',
        'Vuejs',
        'React',
        'Symfony',
        'Threejs',
      ],
      checkedComponents: [],
    }
  },
  computed: {
    selectComponent() {
      return this.checkedComponents.length ? this.checkedComponents : this.component
    }
  },
}
</script>

<template>
    <div id="projects">
      <div class="nom-page1 border-bottom"><img class="petit-logo-arrow" src="/assets/arrow-drop-down.svg" alt=""><p>projects</p></div>
      <div class="nom-page2 border-left border-bottom border-right"><p>projects</p><img class="petit-logo-cross" src="/assets/close.svg" alt=""></div>
      <div class="nom-page3 border-bottom"></div>
      <div class="details-projects flex">

        <div v-for="component in component" :key="component" class="flex-center">
          <div class="position-checkbox">
            <label class="checkbox">
              <input type="checkbox" :value="component" v-model="checkedComponents" />
              <span class="checkmark"></span>
            </label>
          </div>
          <img class="logo-projects" :src="`/assets/${component.toLowerCase()}.svg`" :alt="`${component} logo`" />
          <p>{{ component }}</p>
        </div>

      </div>

      <div class="border-left" id="list-projects">
        <section class="list-projects">
          <div v-for="component in component" :key="component">
              <div v-if="selectComponent.includes(component)">
                <component :is="component" />
              </div>
          </div>
        </section>
        <div class="scroll border-left">
          <span></span>
        </div>
      </div>

    </div>
</template>

<style scoped>

</style>