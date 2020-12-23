export interface CarInsuranceRequest {
  name: string;
  email: string;
  phone: string;
  note?: string;
  insuranceCompany: string;
  insuranceValue: string;
  date: string;
}

export default class CarInsurance {
  private _requests: CarInsuranceRequest[];

  constructor() {
    this._requests = [
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
  }

  get requests(): CarInsuranceRequest[] {
    return this._requests;
  }
}
