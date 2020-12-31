import firebase from "firebase";
import AuthModel from "@/models/auth";

export const LOCAL_STORAGE_KEY = "chbh_admin_auth";

export default class AuthController {
  public static watchLoggedInState() {
    const callbackLoggedIn = (user: firebase.User) => {
      AuthController.setIsAuth();
      console.log(user);
    };

    const callbackNotLoggedIn = () => {
      AuthController.clearAuth();
      console.log("not logged in");
    };

    AuthModel.watchLoginState(callbackLoggedIn, callbackNotLoggedIn);
  }

  public static isAuth(): boolean {
    return !!localStorage.getItem(LOCAL_STORAGE_KEY);
  }

  public static setIsAuth() {
    localStorage.setItem(LOCAL_STORAGE_KEY, "true");
  }

  public static clearAuth() {
    localStorage.removeItem(LOCAL_STORAGE_KEY);
  }

  public static login(email: string, password: string) {
    return AuthModel.login(email, password);
  }
}
