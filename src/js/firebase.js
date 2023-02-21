import { initializeApp } from 'firebase/app'
import { getFirestore, collection } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDydXahhkQ3WJN61eFYuB8QvN8ZIMklUfw",
    authDomain: "portfolio-e6f81.firebaseapp.com",
    projectId: "portfolio-e6f81",
    storageBucket: "portfolio-e6f81.appspot.com",
    messagingSenderId: "740221621666",
    appId: "1:740221621666:web:ac3b7b26cf2532476ecefb",
    measurementId: "G-GYYV6TS0PB"
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

// Make sure the Firestore reference was initialized correctly
db.collection('test').get().then((querySnapshot) => {
    console.log('Firestore initialized successfully')
})

export { db }


// const firebaseConfig = {
//     apiKey: "AIzaSyDydXahhkQ3WJN61eFYuB8QvN8ZIMklUfw",
//     authDomain: "portfolio-e6f81.firebaseapp.com",
//     projectId: "portfolio-e6f81",
//     storageBucket: "portfolio-e6f81.appspot.com",
//     messagingSenderId: "740221621666",
//     appId: "1:740221621666:web:ac3b7b26cf2532476ecefb",
//     measurementId: "G-GYYV6TS0PB"
// }
//
// // Initialisation de l'application Firebase
// firebase.initializeApp(firebaseConfig);
//
// // Export de la référence à la base de données Firestore
// export const db = firebase.firestore();