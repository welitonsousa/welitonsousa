import { initializeApp } from "firebase-admin/app";
import admin from "firebase-admin";

const serviceAccount = JSON.parse(process.env.FIREBASE || '');

export const initFirebase = async  () => {
  if(!admin.apps.length) {
    await initializeApp({credential: admin.credential.cert(serviceAccount)});
  }
}