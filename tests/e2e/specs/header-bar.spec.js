describe("Header bar", () => {
  beforeEach(() => {
    cy.login();
  });

  it("renders logo", () => {
    cy.get("[data-cy=logo]").should("be.visible");
  });

  it("clicking logo goes to home page", () => {
    const homePageUrl = Cypress.config().baseUrl + "/";
    cy.visit("/bao-hiem/o-to");
    cy.url().should("not.eq", homePageUrl);
    cy.get("[data-cy=logo]").click();
    cy.url().should("eq", homePageUrl);
  });

  it("clicking change password open popup", () => {
    openChangePasswordModal();
  });

  it("shows error message if new password != confirm password", () => {
    openChangePasswordModal();
    typeNewPassword("new-password");
    typeConfirmPassword("different-password");
    clickChangePasswordButtonInModal();
    cy.contains("Mật khẩu không khớp nhau");
  });

  it("can change password in change password popup", () => {
    const newPassword = "newPassword";

    changePassword(newPassword);
    getChangePasswordModal().should("not.exist");
    cy.logout();

    cy.fixture("user").then(user => {
      const email = user.email;
      const oldPassword = user.password;
      cy.loginWithEmailPassword(email, newPassword);
      // Change back password for other tests
      changePassword(oldPassword);
      getChangePasswordModal().should("not.exist");
    });
  });

  it("clicking logout works and redirects to login page", () => {
    cy.get("[data-cy=logout]").should("not.exist");
    clickAccountButton();
    cy.get("[data-cy=logout]")
      .should("be.visible")
      .click();
    cy.url().should("include", "/login");
  });
});

function openChangePasswordModal() {
  getChangePasswordModal().should("not.exist");
  clickAccountButton();
  cy.get("[data-cy=change-password-button]").click();
  getChangePasswordModal().should("be.visible");
}

function clickAccountButton() {
  cy.get("[data-cy=account-button]").click();
}

function getChangePasswordModal() {
  return cy.get("[data-cy=change-password-modal]");
}

function changePassword(password) {
  openChangePasswordModal();
  typePasswordToChange(password);
  clickChangePasswordButtonInModal();
}

function typePasswordToChange(password) {
  typeNewPassword(password);
  typeConfirmPassword(password);
}

function typeNewPassword(password) {
  cy.get("[data-cy=new-password]").type(password);
}

function typeConfirmPassword(password) {
  cy.get("[data-cy=confirm-password]").type(password);
}

function clickChangePasswordButtonInModal() {
  cy.get("[data-cy=change-password-modal-button]").click();
}
