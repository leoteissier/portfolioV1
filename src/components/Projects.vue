<script>
export default {
  name: 'Projects',
  data() {
    return {
      langages: [
        'Javascript',
        'Css',
        'Vuejs',
        'Symfony',
        'Unity',
      ],
      projets: [
        {
          id: 1,
          titre: 'Weather App',
          langages: 'Javascript',
          description: 'My weather app is a simple and user-friendly application that provides real-time weather updates for any location.',
          image: 'weather-app.png',
          lien: 'https://weatherapp.leoteissier.fr',
        },
        {
          id: 2,
          titre: 'Flip Coin',
          langages: 'Css',
          description: 'My flipcoin app is a fun and interactive way to make decisions. With just a flip of a virtual coin, users can quickly and easily settle any dispute or make a random choice.',
          image: 'flip-coin.png',
          lien: 'https://flipcoin.leoteissier.fr',
        },
        {
          id: 3,
          titre: 'Portfolio',
          langages: 'Vuejs',
          description: 'My portfolio is a site where I list all my achievements.',
          image: 'portfolio.png',
          lien: 'https://leoteissier.fr',
        },
        {
          id: 4,
          titre: 'SQY Culture',
          langages: 'Symfony',
          description: 'Here is a site for the sale of cultural places for the city of Saint-Quentin-en-Yvelines, I made this site with a classmate.',
          image: 'sae301.png',
          lien: 'https://mmi21d14.sae301dev.ovh',
        },
        {
            id: 4,
            titre: 'World of tanks',
            langages: 'Unity',
            description: 'Here is a tank game, but also a race against time. Play you will understand.',
            image: 'worldoftanks.png',
            lien: 'https://worldoftanks.leoteissier.fr',
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
            this.checkedLangages.includes(p.langages)
        );
      }
    },
  },
}
</script>

<template>
  <div id="projects">
    <div class="nom-page1 border-bottom"><img class="petit-logo-arrow" src="/assets/arrow-drop-down.svg" alt=""><p>projects</p></div>
    <div class="nom-page2 border-left border-bottom border-right"><p>projects</p><img class="petit-logo-cross" src="/assets/close.svg" alt=""></div>
    <div class="nom-page3 border-bottom"></div>
    <div class="details-projects flex">

      <div class="flex-center" v-for="l in langages" :key="l">
        <div class="position-checkbox">
          <label class="checkbox">
            <input type="checkbox" v-model="checkedLangages" :value="l" />
            <span class="checkmark"></span>
          </label>
        </div>
        <img class="logo-projects" :src="`/logo/${l}.svg`" :alt="`${l} logo`">
        <p>{{ l }}</p>
      </div>

    </div>

    <div class="border-left-phone" id="list-projects">

      <section class="list-projects">
        <div v-for="p in filteredProjets" :key="p.id">
          <div class="project">
            <p class="margin-bottom-10px"><span class="color-secondary">Project {{ p.langages }}</span> // _{{ p.titre }}</p>
            <div class="card">
              <div class="img-card">
                <img class="img-projet" :src="`/projects_img/${p.image}`">
                <img :class="`logo-card-${p.langages}`" :src="`/logo/${p.langages}-black.svg`" :alt="`${p.titre} logo`" />
              </div>
              <div class="description-card border-top">
                <p>{{ p.description }}</p>
                <a class="button" :href="p.lien" target="_blank">view-project</a>
              </div>
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