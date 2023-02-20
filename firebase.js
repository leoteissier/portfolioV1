// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDydXahhkQ3WJN61eFYuB8QvN8ZIMklUfw",
    authDomain: "portfolio-e6f81.firebaseapp.com",
    projectId: "portfolio-e6f81",
    storageBucket: "portfolio-e6f81.appspot.com",
    messagingSenderId: "740221621666",
    appId: "1:740221621666:web:ac3b7b26cf2532476ecefb",
    measurementId: "G-GYYV6TS0PB"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
