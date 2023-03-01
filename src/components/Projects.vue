<script>
export default {
  name: 'Projects',
  data() {
    return {
      langages: [
          'Javascript',
          'Css',
          'Vuejs',
          'React',
          'Threejs',
          'Symfony',
      ],
      projets: [
        {
          id: 1,
          titre: 'Weather App',
          categories: ['Javascript'],
          description: 'My weather app is a simple and user-friendly application that provides real-time weather updates for any location.',
          image: 'weather-app.png',
          lien: 'https://weatherapp.leoteissier.fr',
        },
        {
          id: 2,
          titre: 'Flip Coin',
          categories: ['Css', 'Javascript'],
          description: 'My flipcoin app is a fun and interactive way to make decisions. With just a flip of a virtual coin, users can quickly and easily settle any dispute or make a random choice.',
          image: 'flip-coin.png',
          lien: 'https://flipcoin.leoteissier.fr',
        },
      ],
      checkedLangages: [],
    }
  },
  computed: {
    filteredProjets() {
      if (this.checkedLangages.length === 0) {
        return this.projets;
      } else {
        return this.projets.filter((p) =>
            this.checkedLangages.some(c => p.categories.includes(c))
        );
      }
    },
  },
}
</script>

<template>
  <div id="projects">
    <div class="nom-page1 border-bottom">
      <img class="petit-logo-arrow" src="/assets/arrow-drop-down.svg" alt="" />
      <p>projects</p>
    </div>
    <div class="nom-page2 border-left border-bottom border-right">
      <p>projects</p>
      <img class="petit-logo-cross" src="/assets/close.svg" alt="" />
    </div>
    <div class="nom-page3 border-bottom"></div>
    <div class="details-projects flex">
      <div class="flex-center" v-for="l in langages" :key="l">
        <div class="position-checkbox">
          <label class="checkbox">
            <input type="checkbox" v-model="checkedLangages" :value="l" />
            <span class="checkmark"></span>
          </label>
        </div>
        <img class="logo-projects" :src="`/assets/${l}.svg`" :alt="`${l} logo`" />
        <p>{{ l }}</p>
      </div>
    </div>
    <div class="border-left" id="list-projects">
      <section class="list-projects">
        <div v-for="p in filteredProjets" :key="p.id">
          <div v-if="checkedLangages.some(c => p.categories.includes(c))" class="project">
            <div class="project-header">
              <p class="margin-bottom-10px">
                <span class="color-secondary">Project {{ p.categories.join(', ') }}</span> // _{{ p.titre }}
              </p>
            </div>
            <div class="card">
              <div class="img-card">
                <img class="img-projet" :src="`/assets/${p.image}`">
                <img v-if="p.categories.includes('Javascript')" class="logo-card-Javascript" :src="`/assets/Javascript-black.svg`" :alt="`Javascript logo`" />
                <img v-if="p.categories.includes('Css')" class="logo-card-Css" :src="`/assets/Css-black.svg`" :alt="`Css logo`" />
                <img v-if="p.categories.includes('Vuejs')" class="logo-card-Vuejs" :src="`/assets/Vuejs-black.svg`" :alt="`Vuejs logo`" />
                <img v-if="p.categories.includes('React')" class="logo-card-React" :src="`/assets/React-black.svg`" :alt="`React logo`" />
                <img v-if="p.categories.includes('Threejs')" class="logo-card-Threejs" :src="`/assets/Threejs-black.svg`" :alt="`Threejs logo`" />
                <img v-if="p.categories.includes('Symfony')" class="logo-card-Symfony" :src="`/assets/Symfony-black.svg`" :alt="`Symfony logo`" />
              </div>
            </div>
            <div class="description-card">
              <p>{{ p.description }}</p>
              <a class="button" :href="p.lien" target="_blank">view-project</a>
            </div>
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
