<template>
  <div class="formulaire">
    <!--form-->
    <form v-if="!showConfirmationMessage" @submit.prevent>
      <div class="flex-column margin-top-10px">
        <label class="margin-bottom-10px" for="name">_name :</label>
        <input type="text" v-model.trim="name" id="name" name="name" placeholder="votre prénom"/>
      </div>
      <div class="flex-column margin-top-10px">
        <label class="margin-bottom-10px" for="email">_email :</label>
        <input type="email" v-model.trim="email" id="email" name="email" placeholder="Votre email">
        <div v-if="emailIsValid" class="error-message">Adresse e-mail invalide</div>
      </div>
      <div class="flex-column margin-top-10px">
        <label class="margin-bottom-10px" for="email">_subject :</label>
        <input type="text" v-model.trim="subject" id="subject" name="subject" placeholder="Votre sujet"/>
      </div>
      <div class="flex-column margin-top-10px">
        <label class="margin-bottom-10px" for="message">_message :</label>
        <textarea name="message" v-model.trim="message" id="message" cols="30" rows="10" placeholder="Votre message"></textarea>
      </div>
      <div v-if="showErrorMessage" class="error-message">Please fill in all fields</div>
      <button @click="submitForm">_submit_message</button>
    </form>
    <!--end form-->
    <!--form submitted-->
    <div v-else class="width-75">
      <div class="flex-column flex-center">
        <h2 class="color-white">Thank you!</h2>
        <p>Your message has been accepted. You will recieve answer really soon!</p>
        <button @click="resetForm">send-new-message</button>
      </div>
    </div>
    <!--end form submitted-->
  </div>
  <div class="form-result border-left position-rel">
    <div class="margin-left-50px width-form-result">
      <div>
        <div class="flex">
          <p class="margin-right-20px">1</p><p class="color-white"><span class="color-quinary">const</span><span class="color-secondary"> button</span><span class="color-quinary"> =</span><span class="color-secondary"> document.querySelector</span>(<span class="color-tertiary">'#sendBtn'</span>);</p>
        </div>
        <div>
          <p class="hidden">1</p>
        </div>
        <div class="flex">
          <p class="margin-right-20px">2</p><p class="color-white"><span class="color-quinary">const</span><span class="color-secondary"> message</span><span class="color-quinary"> =</span> {</p>
        </div>
        <div class="flex">
          <p class="margin-right-20px">3</p><p class="margin-left-10px color-white"><span class="color-secondary">name</span>: <span class="color-tertiary">"{{ name }}"</span>,</p>
        </div>
        <div class="flex">
          <p class="margin-right-20px">4</p><p class="margin-left-10px color-white"><span class="color-secondary">email</span>: <span class="color-tertiary">"{{ email }}"</span>,</p>
        </div>
        <div class="flex">
          <p class="margin-right-20px">5</p><p class="margin-left-10px color-white"><span class="color-secondary">subject</span>: <span class="color-tertiary">"{{ subject }}"</span>,</p>
        </div>
        <div class="flex">
          <p class="margin-right-20px">6</p><p class="margin-left-10px color-white width-100"><span class="color-secondary">message</span>: <span class="color-tertiary">"{{ message }}"</span>,</p>
        </div>
        <div class="flex">
          <p class="margin-right-20px">7</p><p class="margin-left-10px color-white"><span class="color-secondary">date</span>: <span class="color-tertiary">"{{ date }}"</span></p>
        </div>
        <div class="flex">
          <p class="margin-right-20px">8</p><p class="color-white">}</p>
        </div>
        <div>
          <p class="margin-right-20px">9</p>
        </div>
        <div class="flex">
          <p class="margin-right-20px">10</p><p class="color-white"><span class="color-secondary">button</span>.<span class="color-secondary">addEventListener</span>(<span class="color-tertiary">'click'</span>, () <span class="color-quinary">=></span> {</p>
        </div>
        <div class="flex">
          <p class="margin-right-20px">11</p><p class="margin-left-10px color-white"><span class="color-secondary">form</span>.<span class="color-secondary">send</span>(<span class="color-secondary">message</span>);</p>
        </div>
        <div class="flex">
          <p class="margin-right-20px">12</p><p class="color-white">});</p>
        </div>
      </div>
    </div>
    <div class="scroll border-left">
      <span></span>
    </div>
  </div>
</template>

<script>
export default {
  name: "formulaire",
  data() {
    return {
      name: localStorage.getItem("name") || "",
      email: localStorage.getItem("email") || "",
      subject: localStorage.getItem("subject") || "",
      message: localStorage.getItem("message") || "",

      emailIsValid: false,
      showErrorMessage: false,
      showConfirmationMessage: false,

      date: new Date().toLocaleDateString()
    };
  },
  methods: {
    validateEmail(email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    },
    submitForm() {
      // Vérifiez si les champs requis sont remplis
      if (!this.name || !this.email || !this.subject || !this.message) {
        this.showErrorMessage = true;
        return;
      } else{
        this.showErrorMessage = false;
      }

      // Vérifiez si l'email est valide
      if (!this.validateEmail(this.email)) {
        this.emailIsValid = true;
        return;
      } else{
        this.emailIsValid = false;
      }

     //si emailIsValid est false et que showErrormessage est false alors on envoie le message
      if(!this.emailIsValid && !this.showErrorMessage){
        // Afficher le message de confirmation
        this.showConfirmationMessage = true;
        // Envoyer le formulaire
        this.sendForm();
      }
    },
    sendForm() {
      const message = {
        name: this.name,
        email: this.email,
        subject: this.subject,
        message: this.message,
        date: new Date().toUTCString()
      };
      console.log(message);

      // const nodemailer = require('nodemailer');
      // const transporter = nodemailer.createTransport({
      //   service: 'gmail',
      //   auth: {
      //     user: 'acsioses6@gmail.com',
      //     pass: 'sarahleo78'
      //   }
      // });
      //
      // const message = {
      //   from: '{{ email }}',
      //   to: 'leo.teissier@numericable.fr',
      //   subject: 'New message from your website',
      //   html: ' <p>Name: ${name}</p><br><p>Subject: ${subject}</p><br><p>Message: ${message}</p>'
      // };
      //
      // transporter.sendMail(message, (err, info) => {
      //   if (err) {
      //     console.log(err);
      //   } else {
      //     console.log(info);
      //   }
      // });
    },
    resetForm(){
      // Réinitialiser les valeurs des propriétés de données à leur état initial
      this.name = "";
      this.email = "";
      this.subject = "";
      this.message = "";
      this.emailIsValid = false;
      this.showErrorMessage = false;
      this.showConfirmationMessage = false;
      // clear localStorage
      localStorage.clear();
    },
    clearLocalStorage() {
      // clear localStorage
      localStorage.clear();
    },
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
};
</script>

<style scoped>

</style>