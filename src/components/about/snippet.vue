<template>
  <div class="code">
    <div class="width-100 flex">
      <p class="color-font">// Code snippet showcase:</p>
    </div>

    <div class="carte-code">
      <div class="flex-center margin-bottom-10px">
        <div class="code_user">
          <img src="/src/assets/user.png" alt="profil">
          <div class="flex-column">
            <p class="color-secondary">@username</p>
            <p>Created 5 months ago</p>
          </div>
        </div>
        <div class="code_note">
          <div class="flex">
            <img src="/src/assets/chat-icon.svg" alt="details">
            <p>details</p>
          </div>
          <div class="flex">
            <img @click="toggleStar" :src="starImage" alt="start">
            <p>{{value}}</p>
            <p>start</p>
          </div>
        </div>
      </div>
      <div class="function">
        <p>
          <span class="color-quinary">
            En travaux f zhfzgf eqgfeg zjf
            hjeqfdjhq fhjqe f eqf ghqsjhfdsjq
            fjyqesf hsqf hqv  fq hq
          </span>
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
      value: 0,
      clicked: false,
    }
  },
  computed:{
    starImage() {
      if (this.clicked) {
        return "/src/assets/star-fill.svg";
      } else {
        return "/src/assets/star-line.svg";
      }
    }
  },
  methods: {
    toggleStar() {
      if (!this.clicked) {
        this.value += 1;
        this.clicked = true;
      } else {
        this.value -= 1;
        this.clicked = false;
      }
      localStorage.setItem('note', this.note);
    },
  },
  mounted() {
    const note = localStorage.getItem('note');
    if (note) {
      this.note = parseInt(note);
    }
  },
}
</script>

<style scoped>

</style>