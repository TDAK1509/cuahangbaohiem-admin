describe("bao-hiem/o-to page", () => {
  beforeEach(() => {
    cy.visit("/bao-hiem/o-to");
  });

  describe("tabs", () => {
    it("renders 2 tabs, 'Chưa tư vấn' and 'Đã tư vấn'", () => {
      getTabs().should("have.length", 2);
      getTabs()
        .first()
        .should("contain", "Chưa tư vấn");
      getTabs()
        .last()
        .should("contain", "Đã tư vấn");
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
        .contains("Thông tin liên lạc")
        .should("be.visible");
      getPendingRequestsTable()
        .contains("Thông tin bảo hiểm")
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
      assertPendingRequestTableIsEmpty();
    });

    it("re visit page to check if request is set DONE in server", () => {
      assertPendingRequestTableIsEmpty();
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
        .contains("Thông tin liên lạc")
        .should("be.visible");
      getDoneRequestsTable()
        .contains("Thông tin bảo hiểm")
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
      assertDoneRequestTableIsEmpty();
    });

    it("re visit page to check if request is set PENDING in server", () => {
      assertDoneRequestTableIsEmpty();
    });
  });

  describe("delete request", () => {
    it("clicks delete open confirm modal", () => {
      cy.get("[data-cy=confirm-delete-modal]").should("not.exist");

      getPendingRequestsTable()
        .find("[data-cy=delete-button]")
        .should("be.visible")
        .click();

      cy.get("[data-cy=confirm-delete-modal]").should("be.visible");
    });

    it("clicks confirm delete in confirm modal make the request disappear", () => {
      getPendingRequestsTable()
        .find("[data-cy=delete-button]")
        .should("be.visible")
        .click();

      cy.get("[data-cy=confirm-delete-button]").click();

      assertPendingRequestTableIsEmpty();
    });

    it("re visit page to check if it is deleted in server", () => {
      assertPendingRequestTableIsEmpty();
      switchToDoneRequests();
      assertDoneRequestTableIsEmpty();
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

function assertPendingRequestTableIsEmpty() {
  getPendingRequestsTable()
    .contains("No data available")
    .should("be.visible");
}

function assertDoneRequestTableIsEmpty() {
  getDoneRequestsTable()
    .contains("No data available")
    .should("be.visible");
}
