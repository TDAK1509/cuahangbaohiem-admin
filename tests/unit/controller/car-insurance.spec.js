jest.mock("@/models/fire");

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
        note: "",
        isDone: false
      }
    ];
    controller = new CarInsurance();
    const carInsuranceRequests = await controller.fetchPendingRequests();
    expect(carInsuranceRequests).toEqual(expectedData);
  });

  it("controller.setRequestDone calls CarInsuranceModel.setRequestDone with correct request id", () => {
    const mock = jest.fn();
    CarInsuranceModel.setRequestDone = mock;
    controller = new CarInsurance();
    controller.setRequestDone("random-request-id");
    expect(mock).toBeCalledWith("random-request-id");
  });

  it("controller.fetchDoneRequests() returns expected data", async () => {
    const expectedData = [
      {
        id: "id",
        date: "2020-12-23 06:43:56",
        name: "Michael Jackson",
        email: "test@gmail.com",
        phone: "1234567",
        insuranceCompany: "PVI",
        insuranceValue: "12.320.000 ₫",
        note: "",
        isDone: true
      }
    ];
    controller = new CarInsurance();
    const carInsuranceRequests = await controller.fetchDoneRequests();
    expect(carInsuranceRequests).toEqual(expectedData);
  });

  it("controller.setRequestPending calls CarInsuranceModel.setRequestPending with correct request id", () => {
    const mock = jest.fn();
    CarInsuranceModel.setRequestPending = mock;
    controller = new CarInsurance();
    controller.setRequestPending("random-request-id");
    expect(mock).toBeCalledWith("random-request-id");
  });

  it("controller.deleteRequest calls CarInsuranceModel.deleteRequest with correct request id", () => {
    const mock = jest.fn();
    CarInsuranceModel.deleteRequest = mock;
    controller = new CarInsurance();
    controller.deleteRequest("random-request-id");
    expect(mock).toBeCalledWith("random-request-id");
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
      note: "",
      isDone: false
    }
  ]);

  CarInsuranceModel.fetchPendingRequests = mockFetchPendingRequests;

  const mockFetchDoneRequests = jest.fn();
  mockFetchDoneRequests.mockReturnValue([
    {
      id: "id",
      date: "Wed Dec 23 2020 06:43:56 GMT+0700 (Indochina Time)",
      name: "Michael Jackson",
      email: "test@gmail.com",
      phone: "1234567",
      insuranceCompany: "PVI",
      insuranceValue: "12.320.000 ₫",
      note: "",
      isDone: true
    }
  ]);
  CarInsuranceModel.fetchDoneRequests = mockFetchDoneRequests;
}
