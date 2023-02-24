<template>
  <div class="code">
    <div class="width-100 flex">
      <p class="color-font">// Code snippet showcase:</p>
    </div>

    <div class="carte-code">
      <div class="flex-center margin-bottom-10px">
        <div class="code_user">
          <img src="/assets/user.png" alt="profil">
          <div class="flex-column">
            <p class="color-secondary">@username</p>
            <p>Created 5 months ago</p>
          </div>
        </div>
        <div class="code_note">
          <div class="flex">
            <img src="/assets/chat-icon.svg" alt="details">
            <p>details</p>
          </div>
          <div class="flex">
            <img @click="toggleStar" :src="starImage" alt="start">
            <p>start</p>
          </div>
        </div>
      </div>
      <div class="function">
        <p>// Définition d'une variable</p>
        <p>
          <span class="color-secondary">const </span>&ensp;
          <span class="color-quaternary">message</span>&ensp;
          <span class="color-white">=</span>&ensp;
          <span class="color-quinary">"Hello World !"</span>
          <span class="color-white">;</span>
        </p>
        <p>// Affichage de la variable dans la console</p>
        <p>
          <span class="color-secondary">console.log</span>
          <span class="color-white">(</span>
          <span class="color-quaternary">message</span>
          <span class="color-white">);</span>
        </p>
      </div>
    </div>

    <div class="carte-code">
      <div class="flex-center margin-bottom-10px">
        <div class="code_user">
          <img src="/assets/user.png" alt="profil">
          <div class="flex-column">
            <p class="color-secondary">@username</p>
            <p>Created 5 months ago</p>
          </div>
        </div>
        <div class="code_note">
          <div class="flex">
            <img src="/assets/chat-icon.svg" alt="details">
            <p>details</p>
          </div>
          <div class="flex">
            <img @click="toggleStar" :src="starImage" alt="start">
            <p>start</p>
          </div>
        </div>
      </div>
      <div class="function">
        <p>// Définition d'une fonction add qui retourne la somme de deux nombre</p>
        <p>
          <span class="color-secondary">function</span>&ensp;
          <span class="color-tertiary">add</span>
          <span class="color-white">(</span>
          <span class="color-quinary">a, b</span>
          <span class="color-white">) {</span>
        </p>
        <p>&ensp;&ensp;&ensp;&ensp;
          <span class="color-secondary">return</span>&ensp;
          <span class="color-quinary"> a + b;</span>
        </p>
        <p>
          <span class="color-white">}</span>
        </p>
        <p>// Appel de la fonction et affichage du résultat dans la console</p>
        <p>
          <span class="color-secondary">const</span>&ensp;
          <span class="color-quaternary">result</span>&ensp;
          <span class="color-white">=</span>&ensp;
          <span class="color-tertiary">add</span>
          <span class="color-white">(</span>
          <span class="color-quinary">2, 3</span>
          <span class="color-white">);</span>
        </p>
        <p>// Affiche le résulat de l'opération</p>
        <p>
          <span class="color-secondary">console.log</span>
          <span class="color-white">(</span>
          <span class="color-quaternary">result</span>
          <span class="color-white">);</span>
        </p>
      </div>
    </div>

    <div class="carte-code">
      <div class="flex-center margin-bottom-10px">
        <div class="code_user">
          <img src="/assets/user.png" alt="profil">
          <div class="flex-column">
            <p class="color-secondary">@username</p>
            <p>Created 5 months ago</p>
          </div>
        </div>
        <div class="code_note">
          <div class="flex">
            <img src="/assets/chat-icon.svg" alt="details">
            <p>details</p>
          </div>
          <div class="flex">
            <img @click="toggleStar" :src="starImage" alt="start">
            <p>start</p>
          </div>
        </div>
      </div>
      <div class="function">
        <p>// Définition d'une fonction qui retourne un nombre aléatoire entre min et max</p>
        <p>
          <span class="color-secondary">function</span>&ensp;
          <span class="color-tertiary">getRandomNumber</span>
          <span class="color-white">(</span>
          <span class="color-quinary">min, max</span>
          <span class="color-white">) {</span>
        </p>
        <p>&ensp;&ensp;&ensp;&ensp;
          <span class="color-secondary">return</span>&ensp;
          <span class="color-quinary"> Math</span>
          <span class="color-white">.</span>
          <span class="color-quaternary">floor</span>
          <span class="color-white">(</span>
          <span class="color-quinary">Math.random</span>
          <span class="color-white">(</span>
          <span class="color-white">)</span>&ensp;
          <span class="color-white">*</span>&ensp;
          <span class="color-white">(</span>
          <span class="color-quinary">max</span>&ensp;
          <span class="color-white">-</span>&ensp;
          <span class="color-quinary">min</span>
          <span class="color-white">)</span>
          <span class="color-white">;</span>
        </p>
        <p>
          <span class="color-white">}</span>
        </p>
        <p>// Appel de la fonction getRandomNumber et affichage du résultat dans la console</p>
        <p>
          <span class="color-secondary">let</span>&ensp;
          <span class="color-quaternary">randomNumber</span>&ensp;
          <span class="color-white">=</span>&ensp;
          <span class="color-tertiary">getRandomNumber</span>
          <span class="color-white">(</span>
          <span class="color-quinary">1, 100</span>
          <span class="color-white">);</span>
        </p>
        <p>// Affiche le nombre aléatoirement choisi entre min et max</p>
        <p>
          <span class="color-secondary">console.log</span>
          <span class="color-white">(</span>
          <span class="color-quaternary">randomNumber</span>
          <span class="color-white">);</span>
        </p>
      </div>
    </div>

    <div class="carte-code">
      <div class="flex-center margin-bottom-10px">
        <div class="code_user">
          <img src="/assets/user.png" alt="profil">
          <div class="flex-column">
            <p class="color-secondary">@username</p>
            <p>Created 5 months ago</p>
          </div>
        </div>
        <div class="code_note">
          <div class="flex">
            <img src="/assets/chat-icon.svg" alt="details">
            <p>details</p>
          </div>
          <div class="flex">
            <img @click="toggleStar" :src="starImage" alt="start">
            <p>start</p>
          </div>
        </div>
      </div>
      <div class="function">
        <p>// Définition d'une fonction qui retourne la date du jour</p>
        <p>
          <span class="color-secondary">function</span>&ensp;
          <span class="color-tertiary">getDate</span>
          <span class="color-white">() {</span>
        </p>
        <p>&ensp;&ensp;&ensp;&ensp;
          <span class="color-secondary">return new</span>&ensp;
          <span class="color-quinary">Date</span>
          <span class="color-white">.</span>
          <span class="color-quaternary">toLocaleDateString</span>
          <span class="color-white">();</span>
        </p>
        <p>
          <span class="color-white">}</span>
        </p>
        <p>// Appel de la fonction getDate</p>
        <p>
          <span class="color-secondary">let</span>&ensp;
          <span class="color-quaternary">currentDate </span>&ensp;
          <span class="color-white">=</span>&ensp;
          <span class="color-tertiary">getDate</span>
          <span class="color-white">();</span>
        </p>
        <p>// Affiche la date actuelle</p>
        <p>
          <span class="color-secondary">console.log</span>
          <span class="color-white">(</span>
          <span class="color-quaternary">currentDate</span>
          <span class="color-white">);</span>
        </p>
      </div>

    </div>

  </div>
</template>

<script>
export default {
  name: "snippet",
  data() {
    return {
      clicked: false,
      starCount: 0,
    }
  },
  computed: {
    starImage() {
      if (this.clicked) {
        return "/assets/star-fill.svg";
      } else {
        return "/assets/star-line.svg";
      }
    }
  },
  methods: {
    toggleStar() {
      this.clicked = !this.clicked;
      // if (this.clicked) {
      //   this.starCount++;
      // } else {
      //   this.starCount--;
      // }
    }
  },
}
</script>

<style scoped>

</style>