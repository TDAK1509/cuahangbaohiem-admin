describe("Login page", () => {
  it("redirects to login page if not logged in", () => {
    cy.visit("/");
    cy.url().should("include", "/login");
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
      getFormErrorMessages().should("have.length", 0);
      getLoginButton().click();
      getFormErrorMessages().should("have.length", 2);
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

function getFormErrorMessages() {
  return cy.get(".v-text-field__details .error--text");
}
