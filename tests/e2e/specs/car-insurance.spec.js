describe("bao-hiem/o-to page", () => {
  beforeEach(() => {
    cy.visit("/bao-hiem/o-to");
  });

  describe("tabs", () => {
    it("renders 2 tabs, 'Chưa tư vấn' and 'Đã tư vấn'", () => {
      getTabs().should("have.length", 2);
      getTabs()
        .first()
        .should("have.text", "Chưa tư vấn");
      getTabs()
        .last()
        .should("have.text", "Đã tư vấn");
    });

    it("clicks 'Đã tư vấn' shows done requests", () => {
      getTabs()
        .last()
        .click();
      cy.get("[data-cy=done-requests]").should("be.visible");
    });

    it("clicks 'Chưa tư vấn' pending requests", () => {
      getTabs()
        .last()
        .click();

      getTabs()
        .first()
        .click();
      cy.get("[data-cy=pending-requests]").should("be.visible");
    });

    function getTabs() {
      return cy.get("[data-cy=request-tab]");
    }
  });

  describe("pending requests content", () => {
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
});
