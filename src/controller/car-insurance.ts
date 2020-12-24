import CarInsuranceModel, {
  RawCarInsuranceRequest
} from "@/models/car-insurance";
import moment from "moment";

export interface CarInsuranceRequest {
  id: string;
  name: string;
  email: string;
  phone: string;
  note?: string;
  insuranceCompany: string;
  insuranceValue: string;
  date: string;
}

export default class CarInsurance {
  public async fetchPendingRequests(): Promise<CarInsuranceRequest[]> {
    const rawRequests = await this.fetchPendingRequestsFromServer();
    const requests = this.cookRawRequests(rawRequests);
    return requests;
  }

  private async fetchPendingRequestsFromServer(): Promise<
    RawCarInsuranceRequest[]
  > {
    const rawRequests = await CarInsuranceModel.fetchPendingRequests();
    return rawRequests;
  }

  private cookRawRequests(
    rawRequests: RawCarInsuranceRequest[]
  ): CarInsuranceRequest[] {
    return rawRequests.map(rawRequest => {
      return {
        id: rawRequest.id,
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

  public setRequestDone(requestId: string) {
    return CarInsuranceModel.setRequestDone(requestId);
  }
}
