import React from 'react';
import firebase from 'firebase';

export const initializeFirebase = () => {
  firebase.initializeApp({
    apiKey: "AIzaSyBTY7ZC4_gGd08PXCajksBeDo-Rz6LYcVk",
    authDomain: "next-pwa-da81c.firebaseapp.com",
    projectId: "next-pwa-da81c",
    storageBucket: "next-pwa-da81c.appspot.com",
    messagingSenderId: "116120973182",
    appId: "1:116120973182:web:8d54a01bb3239df5154d2f",
    measurementId: "G-MPYMK8STTX"
  });
}

export const askForPermissionToReceiveNotifications = async () => {
  try {
    const messaging = firebase.messaging();
    await messaging.requestPermission();
    const token = await messaging.getToken();
    console.log('Your token is:', token);
    
    return token;
  } catch (error) {
    console.error(error);
  }
}

