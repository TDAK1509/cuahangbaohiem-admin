import CarInsurance from "@/controller/car-insurance";
import CarInsuranceModel from "@/models/car-insurance";

jest.mock("@/models/car-insurance");

let controller;

describe("CarInsuranceController", () => {
  beforeAll(() => {
    mockCarInsuranceModelFetchMethod();
  });

  it("controller.fetchPendingRequests() returns expected data", async () => {
    const expectedData = [
      {
        id: "id",
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
    const carInsuranceRequests = await controller.fetchPendingRequests();
    expect(carInsuranceRequests).toEqual(expectedData);
  });

  it("controller.setRequestDone calls CarInsuranceModel.setRequestDone with correct argument", () => {
    const mockSetDone = jest.fn();
    CarInsuranceModel.setRequestDone = mockSetDone;
    controller = new CarInsurance();
    controller.setRequestDone("random-request-id");
    expect(mockSetDone).toBeCalledWith("random-request-id");
  });
});

function mockCarInsuranceModelFetchMethod() {
  const mockFetchPendingRequests = jest.fn();
  mockFetchPendingRequests.mockReturnValue([
    {
      id: "id",
      date: "Wed Dec 23 2020 06:43:56 GMT+0700 (Indochina Time)",
      name: "Michael Jackson",
      email: "test@gmail.com",
      phone: "1234567",
      insuranceCompany: "PVI",
      insuranceValue: "12.320.000 ₫",
      note: ""
    }
  ]);
  CarInsuranceModel.fetchPendingRequests = mockFetchPendingRequests;
}
