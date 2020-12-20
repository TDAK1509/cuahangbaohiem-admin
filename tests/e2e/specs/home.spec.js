describe("Home page", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Renders text 'Khách hàng đăng ký mua bảo hiểm'", () => {
    cy.contains("Khách hàng đăng ký mua bảo hiểm").should("be.visible");
  });

  it("Render button linking to car insurance buying requests", () => {
    const carInsuranceSelector = "[data-cy=car-insurance-request]";
    cy.get(carInsuranceSelector).should("be.visible");
    cy.get(carInsuranceSelector).click();
    cy.url().should("include", "/bao-hiem/o-to");
  });

  it("Render button linking to accident insurance buying requests", () => {
    const carInsuranceSelector = "[data-cy=accident-insurance-request]";
    cy.get(carInsuranceSelector).should("be.visible");
    cy.get(carInsuranceSelector).click();
    cy.url().should("include", "/bao-hiem/tai-nan");
  });

  it("Render button linking to health insurance buying requests", () => {
    const carInsuranceSelector = "[data-cy=health-insurance-request]";
    cy.get(carInsuranceSelector).should("be.visible");
    cy.get(carInsuranceSelector).click();
    cy.url().should("include", "/bao-hiem/suc-khoe-ca-nhan");
  });

  it("Render button linking to cancer insurance buying requests", () => {
    const carInsuranceSelector = "[data-cy=cancer-insurance-request]";
    cy.get(carInsuranceSelector).should("be.visible");
    cy.get(carInsuranceSelector).click();
    cy.url().should("include", "/bao-hiem/ung-thu");
  });

  it("Render button linking to house insurance buying requests", () => {
    const carInsuranceSelector = "[data-cy=house-insurance-request]";
    cy.get(carInsuranceSelector).should("be.visible");
    cy.get(carInsuranceSelector).click();
    cy.url().should("include", "/bao-hiem/nha-tu-nhan");
  });

  it("Render button linking to motorbike insurance buying requests", () => {
    const carInsuranceSelector = "[data-cy=motorbike-insurance-request]";
    cy.get(carInsuranceSelector).should("be.visible");
    cy.get(carInsuranceSelector).click();
    cy.url().should("include", "/bao-hiem/xe-may");
  });

  it("Render button linking to travel insurance buying requests", () => {
    const carInsuranceSelector = "[data-cy=travel-insurance-request]";
    cy.get(carInsuranceSelector).should("be.visible");
    cy.get(carInsuranceSelector).click();
    cy.url().should("include", "/bao-hiem/du-lich-quoc-te");
  });

  it("Render button linking to life insurance buying requests", () => {
    const carInsuranceSelector = "[data-cy=life-insurance-request]";
    cy.get(carInsuranceSelector).should("be.visible");
    cy.get(carInsuranceSelector).click();
    cy.url().should("include", "/bao-hiem/nhan-tho");
  });
});
