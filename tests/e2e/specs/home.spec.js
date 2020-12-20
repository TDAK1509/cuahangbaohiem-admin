describe("Home page", () => {
  it("Render text 'Khách hàng đăng ký mua bảo hiểm'", () => {
    cy.visit("/");
    cy.contains("Khách hàng đăng ký mua bảo hiểm").should("be.visible");
  });
});
