import firebase from "firebase/app";
import "firebase/firestore";

export default class FireBase {
  private _firestore!: firebase.firestore.Firestore;

  get firestore(): firebase.firestore.Firestore {
    return this._firestore;
  }

  constructor() {
    this.setup();
  }

  private setup() {
    this.initFirebase();
    this.initFirestore();
  }

  private initFirebase() {
    const firebaseConfig = {
      apiKey: process.env.VUE_APP_FIREBASE_API_KEY,
      authDomain: process.env.VUE_APP_FIREBASE_AUTH_DOMAIN,
      projectId: process.env.VUE_APP_FIREBASE_PROJECT_ID
    };

    if (firebase.apps.length === 0) {
      firebase.initializeApp(firebaseConfig);
    }
  }

  private initFirestore() {
    this._firestore = firebase.firestore();

    if (process.env.NODE_ENV === "development") {
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
}
