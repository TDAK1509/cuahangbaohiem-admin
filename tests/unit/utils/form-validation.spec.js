import { isEmail } from "@/utils/form-validation";

describe("utils/form-validation", () => {
  describe("isEmail()", () => {
    it("given 'hahaha', expected false", () => {
      expect(isEmail("hahaha")).toBe(false);
    });

    it("given 'hahaha@gmail' expected false", () => {
      expect(isEmail("hahaha@gmail")).toBe(false);
    });

    it("given 'hahaha@gmail.' expected false", () => {
      expect(isEmail("hahaha@gmail.")).toBe(false);
    });

    it("given 'hahaha@gmail.com' expected true", () => {
      expect(isEmail("hahaha@gmail.com")).toBe(true);
    });

    it("given 'gjrl2khuyen_nhjn_duyenvkl@gmail.com' expected true", () => {
      expect(isEmail("gjrl2khuyen_nhjn_duyenvkl@gmail.com")).toBe(true);
    });
  });
});
