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
  projectId: process.env.VUE_APP_FIREBASE_PROJECT_ID
});

const firestore = firebase.firestore();

firestore.settings({
  host: "localhost:8081",
  experimentalForceLongPolling: true,
  ssl: false
});

const db = firestore.collection(COLLECTION);

db.add({ test: "test" })
  .then(doc => {
    console.log(`${doc.id} added`);
    process.exit();
  })
  .catch(e => {
    console.error(e);
    process.exit();
  });
