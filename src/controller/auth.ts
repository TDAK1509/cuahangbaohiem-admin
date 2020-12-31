import firebase from "firebase";
import AuthModel from "@/models/auth";
import router from "@/router";

export const LOCAL_STORAGE_KEY = "chbh_admin_auth";

export default class AuthController {
  public static watchLoggedInState() {
    const callbackLoggedIn = (user: firebase.User) => {
      AuthController.setIsAuth();
      AuthController.redirectToHomePageIfIsInLoginPage();
    };

    const callbackNotLoggedIn = () => {
      AuthController.clearAuth();
      AuthController.redirectToLoginPage();
    };

    AuthModel.watchLoginState(callbackLoggedIn, callbackNotLoggedIn);
  }

  public static isAuth(): boolean {
    return !!localStorage.getItem(LOCAL_STORAGE_KEY);
  }

  public static setIsAuth() {
    localStorage.setItem(LOCAL_STORAGE_KEY, "true");
  }

  private static redirectToHomePageIfIsInLoginPage() {
    if (location.pathname === "/login") {
      router.push("/");
    }
  }

  public static clearAuth() {
    localStorage.removeItem(LOCAL_STORAGE_KEY);
  }

  private static redirectToLoginPage() {
    if (location.pathname !== "/login") {
      router.push("/login");
    }
  }

  public static login(email: string, password: string) {
    return AuthModel.login(email, password);
  }

  public static logout() {
    return AuthModel.logout();
  }
}
