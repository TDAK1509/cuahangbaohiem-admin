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
});

function openChangePasswordModal() {
  getChangePasswordModal().should("not.exist");
  cy.get("[data-cy=account-button]").click();
  cy.get("[data-cy=change-password-button]").click();
  getChangePasswordModal().should("be.visible");
}

function getChangePasswordModal() {
  return cy.get("[data-cy=change-password-modal]");
}

function changePassword(password) {
  openChangePasswordModal();
  typeNewPassword(password);
  clickChangePasswordButtonInModal();
}

function typeNewPassword(password) {
  cy.get("[data-cy=new-password]").type(password);
  cy.get("[data-cy=confirm-password]").type(password);
}

function clickChangePasswordButtonInModal() {
  cy.get("[data-cy=change-password-modal-button]").click();
}
