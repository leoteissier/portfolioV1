<script>
// import { Formulaire, } from '@/components/index.js'
import Formulaire from '@/components/contact/Formulaire.vue'
export default {
  name: 'Contact',
  components: {
    Formulaire,
  },
}
</script>


<template>
  <section class="main">
    <div id="contact">
      <div class="nom-page1 border-bottom"><img class="petit-logo-arrow" src="../assets/arrow-drop-down.svg" alt=""><p>contacts</p></div>
      <div class="nom-page2 border-left border-bottom border-right"><p>contacts</p><img class="petit-logo-cross" src="../assets/close.svg" alt=""></div>
      <div class="nom-page3 border-bottom"></div>

      <div class="details border-bottom flex">
        <div class="flex-center"><img class="logo" src="../assets/mail.svg" alt=""><a href="mailto:leo.teissier@numericable.fr">leo.teissier@numericable.fr</a></div>
        <div class="flex-center"><img class="logo" src="../assets/phone.svg" alt=""><a href="tel:+33782869496">+33782869496</a></div>
      </div>
      <div class="contact">
        <Formulaire></Formulaire>
      </div>
    </div>
  </section>
</template>

<style scoped>

</style>