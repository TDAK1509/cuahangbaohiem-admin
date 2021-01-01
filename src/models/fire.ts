import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

export default class FireBase {
  private _firestore!: firebase.firestore.Firestore;
  private _auth!: firebase.auth.Auth;

  get firestore(): firebase.firestore.Firestore {
    return this._firestore;
  }

  get auth(): firebase.auth.Auth {
    return this._auth;
  }

  constructor() {
    this.setup();
  }

  private setup() {
    this.initFirebase();
    this.initFirestore();
    this.initAuth();
  }

  private initFirebase() {
    const firebaseConfig = {
      apiKey: process.env.VUE_APP_FIREBASE_API_KEY,
      authDomain: process.env.VUE_APP_FIREBASE_AUTH_DOMAIN,
      projectId: process.env.VUE_APP_FIREBASE_PROJECT_ID,
      messagingSenderId: process.env.VUE_APP_FIREBASE_MESSAGING_SENDER_ID,
      appId: process.env.VUE_APP_FIREBASE_APP_ID
    };

    if (firebase.apps.length === 0) {
      firebase.initializeApp(firebaseConfig);
    }
  }

  private initFirestore() {
    this._firestore = firebase.firestore();

    if (this.isDevelopmentEnvironment()) {
      try {
        this._firestore.settings({
          host: "localhost:8081",
          experimentalForceLongPolling: true,
          ssl: false
        });
      } catch {
        /* eslint-disable */
        console.warn("Firestore is initialized already");
      }
    }
  }

  private isDevelopmentEnvironment() {
    return process.env.NODE_ENV === "development";
  }

  private initAuth() {
    this._auth = firebase.auth();

    if (this.isDevelopmentEnvironment()) {
      const EMULATOR_AUTH_URL = "http://localhost:9099/";
      this._auth.useEmulator(EMULATOR_AUTH_URL);
    }
  }
}
