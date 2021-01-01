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

      it("clicking forgot password open popup", () => {
        getResetPasswordModal().should("not.exist");
        clickForgotPassword();
        getResetPasswordModal().should("be.visible");
      });

      function getResetPasswordModal() {
        return cy.get("[data-cy=reset-password-modal]");
      }

      function clickForgotPassword() {
        cy.contains("Quên mật khẩu?").click();
      }

      describe("forgot password modal", () => {
        it("clicking RESET button shows error empty email", () => {
          const ERROR_EMPTY_EMAIL = "Vui lòng điền email";

          clickForgotPassword();
          getResetPasswordModal().should("be.visible");

          getResetPasswordModal()
            .contains(ERROR_EMPTY_EMAIL)
            .should("not.exist");

          clickResetPassword();

          getResetPasswordModal()
            .contains(ERROR_EMPTY_EMAIL)
            .should("be.visible");
        });

        function clickResetPassword() {
          getResetPasswordModal()
            .find("[data-cy=reset-password-button]")
            .click();
        }

        it("entering wrong email format and clicking RESET button shows error wrong email format", () => {
          const SUCCESS_MESSAGE =
            "Vui lòng kiểm tra email của bạn để lấy lại mật khẩu!";

          clickForgotPassword();
          getResetPasswordModal().should("be.visible");

          getResetPasswordModal()
            .contains(SUCCESS_MESSAGE)
            .should("not.exist");

          getForgotPasswordEmail()
            .type("test@gmail.com")
            .click();

          clickResetPassword();

          getResetPasswordModal()
            .contains(SUCCESS_MESSAGE)
            .should("be.visible");
        });

        function getForgotPasswordEmail() {
          return cy.get("[data-cy=reset-password-email]");
        }

        it("entering correct emails and clicking RESET button show success message", () => {
          const ERROR_WRONG_EMAIL_FORMAT = "Định dạng email không đúng";

          clickForgotPassword();
          getResetPasswordModal().should("be.visible");

          getResetPasswordModal()
            .contains(ERROR_WRONG_EMAIL_FORMAT)
            .should("not.exist");

          getForgotPasswordEmail()
            .type("wrong-email-format")
            .click();
          clickResetPassword();

          getResetPasswordModal()
            .contains(ERROR_WRONG_EMAIL_FORMAT)
            .should("be.visible");
        });
      });
    });

    describe("form handling", () => {
      it("clicks LOGIN button shows 2 errors", () => {
        getLoginButton().click();
        cy.contains("Vui lòng điền email").should("be.visible");
        cy.contains("Vui lòng điền mật khẩu").should("be.visible");
      });

      it("enter wrongs email format shows correct error message", () => {
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
