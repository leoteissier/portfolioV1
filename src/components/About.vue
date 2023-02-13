<script>
// import { Bio, Interests, Education } from '@/components/index.js'
import Bio from "@/components/about/Bio.vue";
import Interests from "@/components/about/Interests.vue";
import Education from "@/components/about/Education.vue";




export default {
  name: 'About',
  components: {
    Bio,
    Interests,
    Education,
  },
  data() {
    return {
      choix: 'Bio',
      composants: [
        'Bio',
        'Interests',
        'Education',
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
    <div id="about">
      <div class="nom-page1 border-bottom"><img class="petit-logo-arrow" src="../assets/arrow-drop-down.svg" alt=""><p>personal-info</p></div>
      <div class="nom-page2 border-left border-bottom border-right"><p>personal-info</p><img class="petit-logo-cross" src="../assets/close.svg" alt=""></div>
      <div class="nom-page3 border-bottom"></div>
      <div class="details border-bottom flex">
        <div class="flex-center">
          <img class="petit-logo-arrow" src="../assets/arrow-right-s-line.svg" alt="logo arrow">
          <img class="logo" src="../assets/dossier-rose.png" alt="">
          <div><span @click="choix='Bio'" class="text-18px color-white">bio</span></div>
        </div>
        <div class="flex-center">
          <img class="petit-logo-arrow" src="../assets/arrow-right-s-line.svg" alt="logo arrow">
          <img class="logo" src="../assets/dossier-vert.png" alt="">
<!--          <div @click="choix='interests'" class="text-18px personal-info">interests</div>-->
          <div><span @click="choix='Interests'" class="text-18px">interests</span></div>
        </div>
        <div class="flex-center">
          <img class="petit-logo-arrow" src="../assets/arrow-right-s-line.svg" alt="logo arrow">
          <img class="logo" src="../assets/dossier-bleu.png" alt="">
          <div><span @click="choix='Education'" class="text-18px">eduacation</span></div>
        </div>
      </div>
      <div class="border-left" id="description">
        <div class="description">
          <div class="personal-info">
            <Bio v-if="choix === 'Bio'"></Bio>
            <Interests v-if="choix === 'Interests'"></Interests>
            <Education v-if="choix === 'Education'"></Education>
          </div>
          <div class="scroll border-left">
            <span></span>
          </div>
        </div>
        <div class="border-left snippet">
          <div class="scroll border-left">
            <span></span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>

</style>