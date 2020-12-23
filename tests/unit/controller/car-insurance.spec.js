import CarInsurance from "@/controller/car-insurance";

const controller = new CarInsurance();

describe("CarInsuranceController", () => {
  it("controller.requests returns expected data", () => {
    const expectedData = [
      {
        date: "2020-12-23 06:43:56",
        name: "Michael Jackson",
        email: "test@gmail.com",
        phone: "1234567",
        insuranceCompany: "PVI",
        insuranceValue: "12.320.000 ₫",
        note: ""
      }
    ];
    expect(controller.requests).toEqual(expectedData);
  });
});
