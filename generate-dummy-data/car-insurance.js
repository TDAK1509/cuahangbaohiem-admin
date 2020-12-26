const isNode = new Function(
  "try {return this===global;}catch(e){return false;}"
);

if (!isNode()) {
  return;
}

require("dotenv").config();
const firebase = require("firebase");
require("firebase/firestore");

const COLLECTION = "car_insurance_request";

firebase.initializeApp({
  piKey: process.env.VUE_APP_FIREBASE_API_KEY,
  authDomain: process.env.VUE_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.VUE_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.VUE_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.VUE_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.VUE_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.VUE_APP_FIREBASE_APP_ID,
  measurementId: process.env.VUE_APP_FIREBASE_MEASUREMENT_ID
});

const firestore = firebase.firestore();

firestore.settings({
  host: "localhost:8081",
  experimentalForceLongPolling: true,
  ssl: false
});

const db = firestore.collection(COLLECTION);

db.add({ test: "test" }).catch(e => {
  console.error(e);
});
