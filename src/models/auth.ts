import Fire from "./fire";

const firebase = new Fire();
const auth = firebase.auth;

export default class AuthModel {
  public static login(email: string, password: string) {
    return auth.signInWithEmailAndPassword(email, password);
  }

  public static logout() {
    return auth.signOut();
  }

  public static watchLoginState(
    callbackLoggedIn: Function,
    callbackNotLoggedIn: Function
  ) {
    auth.onAuthStateChanged(user => {
      if (user) {
        callbackLoggedIn(user);
      } else {
        callbackNotLoggedIn(callbackNotLoggedIn);
      }
    });
  }

  public static changePassword(newPassword: string) {
    return auth.currentUser!.updatePassword(newPassword);
  }
}
