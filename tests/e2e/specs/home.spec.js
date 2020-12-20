describe("Home page", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("renders text 'Khách hàng đăng ký mua bảo hiểm'", () => {
    cy.contains("Khách hàng đăng ký mua bảo hiểm").should("be.visible");
  });

  describe("Side bar", () => {
    function getSideBar() {
      return cy.get("[data-cy=side-bar]");
    }

    it("renders button linking to car insurance buying requests", () => {
      getSideBar()
        .contains("Ô tô")
        .click();
      cy.url().should("include", "/bao-hiem/o-to");
    });

    it("renders button linking to accident insurance buying requests", () => {
      getSideBar()
        .contains("Tai nạn 24/24")
        .click();
      cy.url().should("include", "/bao-hiem/tai-nan");
    });

    it("renders button linking to health insurance buying requests", () => {
      getSideBar()
        .contains("Sức khỏe cá nhân")
        .click();
      cy.url().should("include", "/bao-hiem/suc-khoe-ca-nhan");
    });

    it("renders button linking to cancer insurance buying requests", () => {
      getSideBar()
        .contains("Ung thư")
        .click();
      cy.url().should("include", "/bao-hiem/ung-thu");
    });

    it("renders button linking to house insurance buying requests", () => {
      getSideBar()
        .contains("Nhà tư nhân")
        .click();
      cy.url().should("include", "/bao-hiem/nha-tu-nhan");
    });

    it("renders button linking to motorbike insurance buying requests", () => {
      getSideBar()
        .contains("Xe máy")
        .click();
      cy.url().should("include", "/bao-hiem/xe-may");
    });

    it("renders button linking to travel insurance buying requests", () => {
      getSideBar()
        .contains("Du lịch quốc tế")
        .click();
      cy.url().should("include", "/bao-hiem/du-lich-quoc-te");
    });

    it("renders button linking to life insurance buying requests", () => {
      getSideBar()
        .contains("Nhân thọ")
        .click();
      cy.url().should("include", "/bao-hiem/nhan-tho");
    });
  });

  describe("Content", () => {
    it("renders button linking to car insurance buying requests", () => {
      const carInsuranceSelector = "[data-cy=car-insurance-request]";
      cy.get(carInsuranceSelector).should("be.visible");
      cy.get(carInsuranceSelector).click();
      cy.url().should("include", "/bao-hiem/o-to");
    });

    it("renders button linking to accident insurance buying requests", () => {
      const carInsuranceSelector = "[data-cy=accident-insurance-request]";
      cy.get(carInsuranceSelector).should("be.visible");
      cy.get(carInsuranceSelector).click();
      cy.url().should("include", "/bao-hiem/tai-nan");
    });

    it("renders button linking to health insurance buying requests", () => {
      const carInsuranceSelector = "[data-cy=health-insurance-request]";
      cy.get(carInsuranceSelector).should("be.visible");
      cy.get(carInsuranceSelector).click();
      cy.url().should("include", "/bao-hiem/suc-khoe-ca-nhan");
    });

    it("renders button linking to cancer insurance buying requests", () => {
      const carInsuranceSelector = "[data-cy=cancer-insurance-request]";
      cy.get(carInsuranceSelector).should("be.visible");
      cy.get(carInsuranceSelector).click();
      cy.url().should("include", "/bao-hiem/ung-thu");
    });

    it("renders button linking to house insurance buying requests", () => {
      const carInsuranceSelector = "[data-cy=house-insurance-request]";
      cy.get(carInsuranceSelector).should("be.visible");
      cy.get(carInsuranceSelector).click();
      cy.url().should("include", "/bao-hiem/nha-tu-nhan");
    });

    it("renders button linking to motorbike insurance buying requests", () => {
      const carInsuranceSelector = "[data-cy=motorbike-insurance-request]";
      cy.get(carInsuranceSelector).should("be.visible");
      cy.get(carInsuranceSelector).click();
      cy.url().should("include", "/bao-hiem/xe-may");
    });

    it("renders button linking to travel insurance buying requests", () => {
      const carInsuranceSelector = "[data-cy=travel-insurance-request]";
      cy.get(carInsuranceSelector).should("be.visible");
      cy.get(carInsuranceSelector).click();
      cy.url().should("include", "/bao-hiem/du-lich-quoc-te");
    });

    it("renders button linking to life insurance buying requests", () => {
      const carInsuranceSelector = "[data-cy=life-insurance-request]";
      cy.get(carInsuranceSelector).should("be.visible");
      cy.get(carInsuranceSelector).click();
      cy.url().should("include", "/bao-hiem/nhan-tho");
    });
  });
});
