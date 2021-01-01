jest.mock("@/models/fire");

import AuthController, { LOCAL_STORAGE_KEY } from "@/controller/auth";
import AuthModel from "@/models/auth";

jest.mock("@/models/auth");

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

  describe("login()", () => {
    it("calls AuthModel.login with email and password", () => {
      const mockLogin = jest.fn();
      AuthModel.login = mockLogin;
      AuthController.login("email", "password");
      expect(mockLogin).toHaveBeenCalledTimes(1);
      expect(mockLogin).toHaveBeenCalledWith("email", "password");
    });
  });

  describe("logout()", () => {
    it("calls AuthModel.logout", () => {
      const mockLogout = jest.fn();
      AuthModel.logout = mockLogout;
      AuthController.logout();
      expect(mockLogout).toHaveBeenCalledTimes(1);
    });
  });

  describe("changePassword()", () => {
    it("calls AuthModel.changePassword with new password", () => {
      const mockChangePassword = jest.fn();
      AuthModel.changePassword = mockChangePassword;
      AuthController.changePassword("new-password");
      expect(mockChangePassword).toHaveBeenCalledTimes(1);
      expect(mockChangePassword).toHaveBeenCalledWith("new-password");
    });
  });

  describe("sendPasswordResetEmail()", () => {
    it("calls AuthModel.sendPasswordResetEmail with new password", () => {
      const mockSendPasswordResetEmail = jest.fn();
      AuthModel.sendPasswordResetEmail = mockSendPasswordResetEmail;
      AuthController.sendPasswordResetEmail("email");
      expect(mockSendPasswordResetEmail).toHaveBeenCalledTimes(1);
      expect(mockSendPasswordResetEmail).toHaveBeenCalledWith("email");
    });
  });
});
