import CarInsurance from "@/controller/car-insurance";
import CarInsuranceModel from "@/models/car-insurance";

jest.mock("@/models/car-insurance");

let controller;

describe("CarInsuranceController", () => {
  beforeAll(() => {
    mockCarInsuranceModelFetchMethod();
  });

  it("controller.fetchRequests() returns expected data", async () => {
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
    controller = new CarInsurance();
    const carInsuranceRequests = await controller.fetchRequests();
    expect(carInsuranceRequests).toEqual(expectedData);
  });
});

function mockCarInsuranceModelFetchMethod() {
  const mockFetch = jest.fn();
  mockFetch.mockReturnValue([
    {
      date: "Wed Dec 23 2020 06:43:56 GMT+0700 (Indochina Time)",
      name: "Michael Jackson",
      email: "test@gmail.com",
      phone: "1234567",
      insuranceCompany: "PVI",
      insuranceValue: "12.320.000 ₫",
      note: ""
    }
  ]);
  CarInsuranceModel.fetch = mockFetch;
}
