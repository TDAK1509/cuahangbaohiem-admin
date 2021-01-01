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
    cy.get("[data-cy=change-password-modal]").should("not.exist");
    cy.get("[data-cy=account-button]").click();
    cy.get("[data-cy=change-password-button]").click();
    cy.get("[data-cy=change-password-modal]").should("be.visible");
  });
});
