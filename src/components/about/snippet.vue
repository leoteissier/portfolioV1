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
            <p>{{starCount}} start</p>
          </div>
        </div>
      </div>
      <div class="function">
        <p>
          <span class="color-quinary">
            En travaux f zhfzgf eqgfeg zjf
            hjeqfdjhq fhjqe f eqf ghqsjhfdsjq
            fjyqesf hsqf hqv  fq hqhscefsios jkesfhs
            sqvsvsvdsfdj  euizhfiks  ezsfqg hs dqgu
          </span>
        </p>
      </div>
    </div>


  </div>
</template>

<script>
// import { db } from '/src/js/firebase.js';
export default {
  name: "snippet",
  data() {
    return {
      clicked: false,
      starCount : 0,
      // snippetId: 'portfolio-e6f81', // stocker l'ID du document Firestore
    }
  },
  computed:{
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
      localStorage.setItem("starCount", this.clicked ? "1" : "0");
    }
  },
  mounted() {
    const starCount = localStorage.getItem("starCount");
    if (starCount !== null) {
      this.clicked = starCount === "1";
    }
  },
  // props: {
  //   snippetId: {
  //     type: String,
  //     required: true
  //   },
  // },
  // firestore: {
  //   starCount: db.collection('snippets').doc(this.snippetId),
  // },
  // methods: {
  //   toggleStar() {
  //     const snippetRef = db.collection('snippets').where(firebase.firestore.FieldPath.documentId(), '==', this.snippetId).limit(1);
  //     snippetRef.get().then((querySnapshot) => {
  //       if (!querySnapshot.empty) {
  //         const doc = querySnapshot.docs[0];
  //         const oldStarCount = doc.data().star_count;
  //         const newStarCount = this.clicked ? oldStarCount - 1 : oldStarCount + 1;
  //         snippetRef.doc(doc.id).update({ star_count: newStarCount });
  //         this.clicked = !this.clicked;
  //       }
  //     });
  //   }
  // },
  // mounted() {
  //   // Récupérer le document Firestore
  //   db.collection('snippets')
  //       .add({
  //         username: 'votre_nom_utilisateur',
  //         created_at: new Date(),
  //         star_count: 0,
  //         function: 'nom d\'étoile',
  //       })
  //       .then((docRef) => {
  //         this.snippetId = docRef.id;
  //         console.log('Document written with ID: ', docRef.id);
  //       })
  //       .catch((error) => {
  //         console.error('Error adding document: ', error);
  //       });
  //
  //   // Écouter les mises à jour du document Firestore
  //   const snippetRef = db.collection('snippets').doc(this.snippetId);
  //   snippetRef.onSnapshot((doc) => {
  //     if (doc.exists) {
  //       this.starCount = doc.data().star_count;
  //     }
  //   });
  // },
}
</script>

<style scoped>

</style>