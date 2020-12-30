describe("Login page", () => {
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
    });

    describe("form handling", () => {
      it("clicks LOGIN button shows 2 errors", () => {
        getLoginButton().click();
        cy.contains("Vui lòng điền email").should("be.visible");
        cy.contains("Vui lòng điền mật khẩu").should("be.visible");
      });

      it("enter wrongs email shows correct message", () => {
        getEmailField().type("wrong-email");
        getLoginButton().click();
        cy.contains("Định dạng email không chính xác").should("be.visible");
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
