<template>
  <div class="formulaire">
    <!--form submitted-->
    <div v-if="formSubmitted" class="width-75">
      <div class="flex-column flex-center">
        <h2 class="color-white">Thank you!</h2>
        <p>Your message has been accepted. You will recieve answer really soon!</p>
        <button @click="formSubmitted = false">send-new-message</button>
      </div>
    </div>
    <!--end form submitted-->
    <!--form-->
    <form ref="form" @submit.prevent="submitForm" v-else>
      <div class="flex-column margin-top-10px">
        <label class="margin-bottom-10px" for="name">_name :</label>
        <input type="text" v-model.trim="name" id="name" name="name" placeholder="votre prénom" required/>
      </div>
      <div class="flex-column margin-top-10px">
        <label class="margin-bottom-10px" for="email">_email :</label>
        <input type="email" v-model.trim="email" id="email" name="email" placeholder="Votre email" required/>
      </div>
      <div class="flex-column margin-top-10px">
        <label class="margin-bottom-10px" for="email">_subject :</label>
        <input type="text" v-model.trim="subject" id="subject" name="subject" placeholder="Votre sujet" required/>
      </div>
      <div class="flex-column margin-top-10px">
        <label class="margin-bottom-10px" for="message">_message :</label>
        <textarea name="message" v-model.trim="message" id="message" cols="30" rows="10" placeholder="Votre message" required></textarea>
      </div>
      <button type="submit">_submit_message</button>
    </form>
    <!--end form-->
  </div>
  <div class="form-result border-left position-rel">
    <div class="margin-left-50px width-form-result">
      <div>
        <div class="flex">
          <p class="margin-right-20px">1</p><p><span class="color-quinary">const</span><span class="color-secondary"> button</span><span class="color-quinary"> =</span><span class="color-secondary"> document.querySelector</span>(<span class="color-tertiary">'#sendBtn'</span>);</p>
        </div>
        <div>
          <p class="hidden">1</p>
        </div>
        <div class="flex">
          <p class="margin-right-20px">2</p><p><span class="color-quinary">const</span><span class="color-secondary"> message</span><span class="color-quinary"> =</span> {</p>
        </div>
        <div class="flex">
          <p class="margin-right-20px">3</p><p class="margin-left-10px"><span class="color-secondary">name</span>: <span class="color-tertiary">"{{ name }}"</span>,</p>
        </div>
        <div class="flex">
          <p class="margin-right-20px">4</p><p class="margin-left-10px"><span class="color-secondary">email</span>: <span class="color-tertiary">"{{ email }}"</span>,</p>
        </div>
        <div class="flex">
          <p class="margin-right-20px">5</p><p class="margin-left-10px"><span class="color-secondary">subject</span>: <span class="color-tertiary">"{{ subject }}"</span>,</p>
        </div>
        <div class="flex">
          <p class="margin-right-20px">6</p><p class="margin-left-10px width-100"><span class="color-secondary">message</span>: <span class="color-tertiary" style="overflow-wrap: break-word;">"{{ message }}"</span>,</p>
        </div>
        <div class="flex">
          <p class="margin-right-20px">7</p><p class="color-secondary">date<span class="color-font">:</span> <span class="color-tertiary">"{{ date }}"</span></p>
        </div>
        <div class="flex">
          <p class="margin-right-20px">8</p><p>}</p>
        </div>
        <div>
          <p class="margin-right-20px">9</p>
        </div>
        <div class="flex">
          <p class="margin-right-20px">10</p><p><span class="color-secondary">button</span>.<span class="color-secondary">addEventListener</span>(<span class="color-tertiary">'click'</span>, () <span class="color-quinary">=></span> {</p>
        </div>
        <div class="flex">
          <p class="margin-right-20px">11</p><p><span class="color-secondary">form</span>.<span class="color-secondary">send</span>(<span class="color-secondary">message</span>);</p>
        </div>
        <p>})</p>
      </div>
    </div>
    <div class="scroll border-left">
      <span></span>
    </div>
  </div>
</template>

<script>
import emailjs from '@emailjs/browser';
export default {
  name: "formulaire",
  data() {
    return {
      name: "",
      email: "",
      subject: "",
      message: "",
      date: new Date().toLocaleDateString(),
      formSubmitted: false,
    };
  },
  mounted() {
    if (localStorage.name) {
      this.name = localStorage.name;
    }
    if (localStorage.email) {
      this.email = localStorage.email;
    }
    if (localStorage.subject) {
      this.subject = localStorage.subject;
    }
    if (localStorage.message) {
      this.message = localStorage.message;
    }
  },
  watch: {
    name() {
      localStorage.name = this.name;
    },
    email() {
      localStorage.email = this.email;
    },
    subject() {
      localStorage.subject = this.subject;
    },
    message() {
      localStorage.message = this.message;
    },
  },
  methods: {
    validEmail: function (email) {
      var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    },
    checkform : function(e) {
      if (this.name && this.email && this.subject && this.message) {
        if (this.validEmail(this.email)) {
          return true;
        } else {
          alert("Veuillez entrer une adresse email valide");
          e.preventDefault();
        }
      } else {
        alert("Veuillez remplir tous les champs");
        e.preventDefault();
      }
    },
    submitForm() {
      // Simuler l'envoi du formulaire avec succès (en vrai on enverrait les données au serveur)
      this.formSubmitted = true;
      // Réinitialiser les champs du formulaire
      this.name = '';
      this.email = '';
      this.subject = '';
      this.message = '';

      // EmailJS----------------------------------------------------------------------------------------------------------------
      // Récupérer les données du formulaire
      let templateParams = {
        name: this.name,
        email: this.email,
        subject: this.subject,
        message: this.message,
        date: this.date,
      };
      // Envoyer les données au serveur
      emailjs.send('service_kgf181f','template_3z2qer7', templateParams, 'SoEDXX_w0v8XL4s8q')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
      }, (err) => {
        console.log('FAILED...', err);
      });
    },
  },
};
</script>

<style scoped>

</style>