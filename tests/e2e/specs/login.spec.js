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
      cy.get("[data-cy=email]").should("be.visible");
      cy.get("[data-cy=password]").should("be.visible");
      cy.get("[data-cy=button]").should("be.visible");
    });
  });
});
