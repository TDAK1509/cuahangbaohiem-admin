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
  public async fetchRequests(): Promise<CarInsuranceRequest[]> {
    const rawRequests = await this.fetchFromServer();
    const requests = this.cookRawRequests(rawRequests);
    return requests;
  }

  private async fetchFromServer(): Promise<RawCarInsuranceRequest[]> {
    const rawRequests = await CarInsuranceModel.fetch();
    return rawRequests;
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
