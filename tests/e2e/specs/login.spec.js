let correctEmail = "";
let correctPassword = "";
const WRONG_EMAIL = "wrong-email@gmail.com";
const WRONG_PASSWORD = "wrong-password";

describe("Login page", () => {
  before(() => {
    cy.fixture("user").then(({ email, password }) => {
      correctEmail = email;
      correctPassword = password;
    });
  });

  beforeEach(() => {
    cy.logout();
  });

  it("redirects to login page if not logged in", () => {
    cy.visit("/");
    cy.url().should("include", "/login");
  });

  describe("login page", () => {
    beforeEach(() => {
      cy.visit("/login");
    });

    describe("rendering", () => {
      it("does not render side bar", () => {
        cy.get("[data-cy=side-bar]").should("not.exist");
      });

      it("renders email field, password field, and login button", () => {
        getEmailField().should("be.visible");
        getPasswordField().should("be.visible");
        getLoginButton().should("be.visible");
      });

      it("has button to reset password", () => {
        cy.contains("Quên mật khẩu?").should("be.visible");
      });
    });

    describe("form handling", () => {
      it("clicks LOGIN button shows 2 errors", () => {
        getLoginButton().click();
        cy.contains("Vui lòng điền email").should("be.visible");
        cy.contains("Vui lòng điền mật khẩu").should("be.visible");
      });

      it("enter wrongs email shows correct error message", () => {
        getEmailField().type("wrong-email-format");
        getLoginButton().click();
        cy.contains("Định dạng email không chính xác").should("be.visible");
      });

      it("enter wrong email but correct password shows correct error message", () => {
        getEmailField().type(WRONG_EMAIL);
        getPasswordField().type(correctPassword);
        getLoginButton().click();
        cy.contains("Email hoặc password không chính xác").should("be.visible");
      });

      it("enter correct email but wrong password shows correct error message", () => {
        getEmailField().type(correctEmail);
        getPasswordField().type(WRONG_PASSWORD);
        getLoginButton().click();
        cy.contains("Email hoặc password không chính xác").should("be.visible");
      });

      it("navigates to home page if login successfully", () => {
        getEmailField().type(correctEmail);
        getPasswordField().type(correctPassword);
        getLoginButton().click();
        const homeUrl = Cypress.config().baseUrl + "/";
        cy.url().should("eq", homeUrl);
      });
    });
  });
});

function getEmailField() {
  return cy.get("[data-cy=email]");
}

function getPasswordField() {
  return cy.get("[data-cy=password]");
}

function getLoginButton() {
  return cy.get("[data-cy=login-button]");
}
