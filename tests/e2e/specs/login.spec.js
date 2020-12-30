describe("Login page", () => {
  it("redirects to login page if not logged in", () => {
    cy.visit("/");
    cy.url().should("include", "/login");
  });

  describe("rendering", () => {
    it("does not render side bar", () => {
      cy.get("[data-cy=side-bar]").should("not.exist");
    });
  });
});
