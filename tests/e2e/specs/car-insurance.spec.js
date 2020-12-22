describe("bao-hiem/o-to page", () => {
  beforeEach(() => {
    cy.visit("/bao-hiem/o-to");
  });

  it("renders table with correct titles", () => {
    cy.contains("Ngày").should("be.visible");
    cy.contains("Tên").should("be.visible");
    cy.contains("Email").should("be.visible");
    cy.contains("Điện thoại").should("be.visible");
    cy.contains("Công ty bảo hiểm").should("be.visible");
    cy.contains("Số tiền bảo hiểm").should("be.visible");
    cy.contains("Ghi chú").should("be.visible");
  });
});
