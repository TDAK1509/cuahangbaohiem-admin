export interface RawCarInsuranceRequest {
  name: string;
  email: string;
  phone: string;
  note?: string;
  insuranceCompany: string;
  insuranceValue: string;
  date: string;
}

export default class CarInsuranceModel {
  public static fetch(): RawCarInsuranceRequest[] {
    return [
      {
        date: "Wed Dec 23 2020 06:43:56 GMT+0700 (Indochina Time)",
        name: "Michael Jacksonnn",
        email: "test@gmail.com",
        phone: "1234567",
        insuranceCompany: "PVI",
        insuranceValue: "12.320.000 ₫",
        note: ""
      }
    ];
  }
}
