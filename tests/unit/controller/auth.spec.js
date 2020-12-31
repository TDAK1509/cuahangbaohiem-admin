import AuthController, { LOCAL_STORAGE_KEY } from "@/controller/auth";

describe("AuthController", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  describe("isAuth()", () => {
    it("returns false if localStorage doesn't have auth key", () => {
      expect(AuthController.isAuth()).toBe(false);
    });

    it("returns true if localStorage has auth key", () => {
      expect(AuthController.isAuth()).toBe(false);
      localStorage.setItem(LOCAL_STORAGE_KEY, "true");
      expect(AuthController.isAuth()).toBe(true);
    });
  });

  describe("setIsAuth()", () => {
    it("sets value to local storage key", () => {
      expect(AuthController.isAuth()).toBe(false);
      AuthController.setIsAuth();
      expect(AuthController.isAuth()).toBe(true);
    });
  });

  describe("clearAuth()", () => {
    it("isAuth() returns false after clearing", () => {
      localStorage.setItem(LOCAL_STORAGE_KEY, "true");
      expect(AuthController.isAuth()).toBe(true);
      AuthController.clearAuth();
      expect(AuthController.isAuth()).toBe(false);
    });
  });
});
