export const LOCAL_STORAGE_KEY = "chbh_admin_auth";

export default class AuthController {
  public static isAuth(): boolean {
    return !!localStorage.getItem(LOCAL_STORAGE_KEY);
  }

  public static setIsAuth() {
    localStorage.setItem(LOCAL_STORAGE_KEY, "true");
  }
}
