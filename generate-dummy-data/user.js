require("dotenv").config();

const admin = require("firebase-admin");

const FIRESTORE_URL = "localhost:8081";
const AUTH_URL = "localhost:9099";
const PROJECT_ID = process.env.VUE_APP_FIREBASE_PROJECT_ID;

(async () => {
  await initializeEmulatorAdmin("localhost")
    .auth()
    .createUser({
      email: "test@gmail.com",
      password: "abc123"
    });

  console.log("User created successfully");
  process.exit();
})();

function initializeEmulatorAdmin(name, credential = null) {
  initializeEmulatorVariables();

  const options = {
    projectId: PROJECT_ID
  };

  if (credential) {
    options.credential = credential;
  }

  return admin.apps.length
    ? admin.app(name)
    : admin.initializeApp(options, name);
}

function initializeEmulatorVariables() {
  process.env.FIRESTORE_EMULATOR_HOST = FIRESTORE_URL;
  process.env.FIREBASE_AUTH_EMULATOR_HOST = AUTH_URL;
}
