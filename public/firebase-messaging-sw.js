importScripts('https://www.gstatic.com/firebasejs/8.4.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.4.1/firebase-messaging.js');

firebase.initializeApp({
    apiKey: "AIzaSyBTY7ZC4_gGd08PXCajksBeDo-Rz6LYcVk",
    authDomain: "next-pwa-da81c.firebaseapp.com",
    projectId: "next-pwa-da81c",
    storageBucket: "next-pwa-da81c.appspot.com",
    messagingSenderId: "116120973182",
    appId: "1:116120973182:web:8d54a01bb3239df5154d2f",
    measurementId: "G-MPYMK8STTX"
});
const messaging = firebase.messaging();