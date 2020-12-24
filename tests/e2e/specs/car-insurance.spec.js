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
      switchToDoneRequests();
      getPendingRequestsTable().should("not.be.visible");
      getDoneRequestsTable().should("be.visible");
    });

    it("clicks 'Chưa tư vấn' pending requests", () => {
      // Default is Pending, so we need to change to DONE and switch back to test
      switchToDoneRequests();
      switchToPendingRequests();
      getPendingRequestsTable().should("be.visible");
      getDoneRequestsTable().should("not.be.visible");
    });
  });

  describe("pending requests", () => {
    it("renders table with correct headings", () => {
      getPendingRequestsTable()
        .contains("Ngày")
        .should("be.visible");
      getPendingRequestsTable()
        .contains("Tên")
        .should("be.visible");
      getPendingRequestsTable()
        .contains("Email")
        .should("be.visible");
      getPendingRequestsTable()
        .contains("Điện thoại")
        .should("be.visible");
      getPendingRequestsTable()
        .contains("Công ty bảo hiểm")
        .should("be.visible");
      getPendingRequestsTable()
        .contains("Số tiền bảo hiểm")
        .should("be.visible");
      getPendingRequestsTable()
        .contains("Ghi chú")
        .should("be.visible");
    });

    it("renders date", () => {
      getPendingRequestsTable()
        .contains("2020-12-23 06:43:56")
        .should("be.visible");
    });

    it("renders name", () => {
      getPendingRequestsTable()
        .contains("Michael Jackson")
        .should("be.visible");
    });

    it("renders email", () => {
      getPendingRequestsTable()
        .contains("test@gmail.com")
        .should("be.visible");
    });

    it("renders phone", () => {
      getPendingRequestsTable()
        .contains("1234567")
        .should("be.visible");
    });

    it("renders insurance company", () => {
      getPendingRequestsTable()
        .contains("PVI")
        .should("be.visible");
    });

    it("renders insurance value", () => {
      getPendingRequestsTable()
        .contains("12.320.000 ₫")
        .should("be.visible");
    });

    it("should not render SET PENDING button", () => {
      getPendingRequestsTable()
        .find("[data-cy=set-pending]")
        .should("not.exist");
    });

    it("clicks SET DONE button will make the request disappear", () => {
      getPendingRequestsTable()
        .find("[data-cy=set-done]")
        .should("be.visible")
        .click();
      getPendingRequestsTable()
        .find("tbody")
        .find("tr")
        .should("have.length", 0);
    });
  });

  describe("done requests", () => {
    beforeEach(() => {
      switchToDoneRequests();
    });

    it("renders table with correct headings", () => {
      getDoneRequestsTable()
        .contains("Ngày")
        .should("be.visible");
      getDoneRequestsTable()
        .contains("Tên")
        .should("be.visible");
      getDoneRequestsTable()
        .contains("Email")
        .should("be.visible");
      getDoneRequestsTable()
        .contains("Điện thoại")
        .should("be.visible");
      getDoneRequestsTable()
        .contains("Công ty bảo hiểm")
        .should("be.visible");
      getDoneRequestsTable()
        .contains("Số tiền bảo hiểm")
        .should("be.visible");
      getDoneRequestsTable()
        .contains("Ghi chú")
        .should("be.visible");
    });

    it("renders date", () => {
      getDoneRequestsTable()
        .contains("2020-12-23 06:43:56")
        .should("be.visible");
    });

    it("renders name", () => {
      getDoneRequestsTable()
        .contains("Michael Jackson")
        .should("be.visible");
    });

    it("renders email", () => {
      getDoneRequestsTable()
        .contains("test@gmail.com")
        .should("be.visible");
    });

    it("renders phone", () => {
      getDoneRequestsTable()
        .contains("1234567")
        .should("be.visible");
    });

    it("renders insurance company", () => {
      getDoneRequestsTable()
        .contains("PVI")
        .should("be.visible");
    });

    it("renders insurance value", () => {
      getDoneRequestsTable()
        .contains("12.320.000 ₫")
        .should("be.visible");
    });

    it("should not render SET DONE button", () => {
      getDoneRequestsTable()
        .find("[data-cy=set-done]")
        .should("not.exist");
    });

    it("clicks SET PENDING button will make the request disappear", () => {
      getDoneRequestsTable()
        .find("[data-cy=set-pending]")
        .should("be.visible")
        .click();
      getDoneRequestsTable()
        .find("tbody")
        .find("tr")
        .should("have.length", 0);
    });
  });
});

function getTabs() {
  return cy.get("[data-cy=request-tab]");
}

function switchToDoneRequests() {
  getTabs()
    .last()
    .click();
}

function switchToPendingRequests() {
  getTabs()
    .first()
    .click();
}

function getPendingRequestsTable() {
  return cy.get("[data-cy=pending-requests]");
}

function getDoneRequestsTable() {
  return cy.get("[data-cy=done-requests]");
}
