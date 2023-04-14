<template>
    <div class="code">
        <div class="width-100 flex">
            <p class="color-white">// Code snippet showcase:</p>
        </div>

        <div v-for="(snippet, index) in snippets" :key="index" class="carte-code">
            <div class="flex-center margin-bottom-10px">
                <div class="code_user">
                    <img src="/assets/user.png" alt="profil">
                    <div class="flex-column">
                        <p class="color-secondary">@{{ snippet.username }}</p>
                        <p>Created {{ snippet.created }} ago</p>
                    </div>
                </div>
                <div class="code_note">
                    <div class="flex">
                        <img :src="snippet.starCount > 0 ? snippet.starFull : snippet.starEmpty" alt="start" @click="toggleStar(index)"/>
                        <p>{{ snippet.starCount }} Start</p>
                    </div>
                </div>
            </div>
            <div class="function" v-html="snippet.code"></div>
        </div>
    </div>
</template>

<script>
export default {
  name: "snippet",
  data() {
    return {
      clicked: false,
      snippets: [
        {
            username: "username1",
            created: "5 months",
            starEmpty: "/assets/star-line.svg",
            starFull : "/assets/star-fill.svg",
            starCount: 0,
            code: `
            <p>// Definition of a variable</p>
            <p>
              <span class="color-secondary">const </span>&ensp;
              <span class="color-quaternary">message</span>&ensp;
              <span class="color-white">=</span>&ensp;
              <span class="color-quinary">"Hello World !"</span>
              <span class="color-white">;</span>
            </p>
            <p>// Displaying the variable in the console</p>
            <p>
              <span class="color-secondary">console.log</span>
              <span class="color-white">(</span>
              <span class="color-quaternary">message</span>
              <span class="color-white">);</span>
            </p>
            `
        },
        {
            username: "username2",
            created: "2 months",
            starEmpty: "/assets/star-line.svg",
            starFull : "/assets/star-fill.svg",
            starCount: 0,
            code: `
            <p>// Definition of an add function that returns the sum of two numbers</p>
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
            <p>// Calling the function and displaying the result in the console</p>
            <p>
              <span class="color-secondary">const</span>&ensp;
              <span class="color-quaternary">result</span>&ensp;
              <span class="color-white">=</span>&ensp;
              <span class="color-tertiary">add</span>
              <span class="color-white">(</span>
              <span class="color-quinary">2, 3</span>
              <span class="color-white">);</span>
            </p>
            <p>// Displays the result of the operation</p>
            <p>
              <span class="color-secondary">console.log</span>
              <span class="color-white">(</span>
              <span class="color-quaternary">result</span>
              <span class="color-white">);</span>
            </p>
            `
        },
        {
            username: "username3",
            created: "1 month",
            starEmpty: "/assets/star-line.svg",
            starFull : "/assets/star-fill.svg",
            starCount: 0,
            code: `
            <p>// Definition of a function that returns a random number between min and max</p>
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
            <p>// Calling the getRandomNumber function and displaying the result in the console</p>
            <p>
              <span class="color-secondary">let</span>&ensp;
              <span class="color-quaternary">randomNumber</span>&ensp;
              <span class="color-white">=</span>&ensp;
              <span class="color-tertiary">getRandomNumber</span>
              <span class="color-white">(</span>
              <span class="color-quinary">1, 100</span>
              <span class="color-white">);</span>
            </p>
            <p>// Displays the randomly chosen number between min and max</p>
            <p>
              <span class="color-secondary">console.log</span>
              <span class="color-white">(</span>
              <span class="color-quaternary">randomNumber</span>
              <span class="color-white">);</span>
            </p>
            `
        },
        {
            username: "username4",
            created: "1 week",
            starEmpty: "/assets/star-line.svg",
            starFull : "/assets/star-fill.svg",
            starCount: 0,
            code: `
            <p>// Defining a function that returns today's date</p>
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
            `
        }
      ]
    }
  },
  methods: {
    toggleStar(index) {
        const snippet = this.snippets[index];
        if (snippet.starCount === 0) {
            snippet.starEmpty = snippet.starFull;
            snippet.starCount = ++snippet.starCount;
        } else {
            snippet.starEmpty = "/assets/star-line.svg";
            snippet.starCount = --snippet.starCount;
        }
    }
  }
}
</script>

<style scoped>

</style>