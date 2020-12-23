import CarInsuranceModel, {
  RawCarInsuranceRequest
} from "@/models/car-insurance";
import moment from "moment";

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
  private _requests: CarInsuranceRequest[] = [];

  constructor() {
    this.fetchAndCookRequests();
  }

  get requests(): CarInsuranceRequest[] {
    return this._requests;
  }

  private async fetchAndCookRequests() {
    const rawRequests = await this.fetchFromServer();
    this._requests = this.cookRawRequests(rawRequests);
  }

  private fetchFromServer(): RawCarInsuranceRequest[] {
    return CarInsuranceModel.fetch();
  }

  private cookRawRequests(
    rawRequests: RawCarInsuranceRequest[]
  ): CarInsuranceRequest[] {
    return rawRequests.map(rawRequest => {
      return {
        date: moment(new Date(rawRequest.date)).format("YYYY-MM-DD hh:mm:ss"),
        name: rawRequest.name,
        email: rawRequest.email,
        phone: rawRequest.phone,
        insuranceCompany: rawRequest.insuranceCompany,
        insuranceValue: rawRequest.insuranceValue,
        note: rawRequest.note
      };
    });
  }
}
