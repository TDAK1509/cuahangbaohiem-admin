describe("bao-hiem/o-to page", () => {
  beforeEach(() => {
    cy.visit("/bao-hiem/o-to");
  });

  it("renders table with correct headings", () => {
    cy.contains("Ngày").should("be.visible");
    cy.contains("Tên").should("be.visible");
    cy.contains("Email").should("be.visible");
    cy.contains("Điện thoại").should("be.visible");
    cy.contains("Công ty bảo hiểm").should("be.visible");
    cy.contains("Số tiền bảo hiểm").should("be.visible");
    cy.contains("Ghi chú").should("be.visible");
  });

  it("renders date", () => {
    cy.contains("2020-12-23 06:43:56").should("be.visible");
  });

  it("renders name", () => {
    cy.contains("Michael Jackson").should("be.visible");
  });

  it("renders email", () => {
    cy.contains("test@gmail.com").should("be.visible");
  });

  it("renders phone", () => {
    cy.contains("1234567").should("be.visible");
  });

  it("renders insurance company", () => {
    cy.contains("PVI").should("be.visible");
  });

  it("renders insurance value", () => {
    cy.contains("12.320.000 ₫").should("be.visible");
  });
});
