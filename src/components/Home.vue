<script>
import SnakeGame from "@/components/home/SnakeGame.vue";

export default {
  name: "Home",
  components: {
    SnakeGame
  },
}
</script>

<template>
    <!--faire apparaitre la page demander dans la nav-->
    <div id="home">
      <div class="home-left">
        <div class="presentation">
          <p class="color-white">Hi all. I am</p>
          <h1 class="color-white">Léo Teissier</h1>
          <h2 class="color-secondary">> Front-end developer</h2>
          <div class="link-git">
            <p class="color-font">// you can also see it on my Github page</p>
            <p><span class="color-secondary">const</span> <span class="color-quaternary">githubLink</span> <span class="color-white">=</span> <a href="https://github.com/leoteissier" class="color-quinary" target="_blank">"https://github.com/leoteissier"</a></p>
          </div>
        </div>
      </div>
      <div class="home-right">
        <SnakeGame />
      </div>
    </div>
</template>

<style scoped>

</style>