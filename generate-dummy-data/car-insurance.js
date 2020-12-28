const isNode = new Function(
  "try {return this===global;}catch(e){return false;}"
);

if (!isNode()) {
  return;
}

require("dotenv").config();
const firebase = require("firebase");
require("firebase/firestore");
const faker = require("faker");

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

const numberOfDataToAdd = 10;

addDataToServer(numberOfDataToAdd)
  .then(() => {
    console.log(numberOfDataToAdd + " documents are added");
    process.exit();
  })
  .catch(error => {
    console.error(error);
    process.exit();
  });

function getDummyCarInsuranceData() {
  return {
    date: faker.date.recent().toString(),
    email: faker.internet.email(),
    name: faker.name.findName(),
    phone: faker.phone.phoneNumber(),
    note: faker.hacker.phrase(),
    insuranceCompany: faker.company.companyName(),
    insuranceValue: faker.commerce.price(),
    isDone: false
  };
}

async function addDataToServer(count) {
  for (let i = 0; i < count; i++) {
    await db.add(getDummyCarInsuranceData());
  }
}
