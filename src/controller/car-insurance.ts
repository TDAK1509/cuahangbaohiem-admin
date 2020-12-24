import CarInsuranceModel, {
  RawCarInsuranceRequest
} from "@/models/car-insurance";
import moment from "moment";

export type CarInsuranceRequest = RawCarInsuranceRequest;

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
      const request = { ...rawRequest };
      request.date = moment(new Date(rawRequest.date)).format(
        "YYYY-MM-DD hh:mm:ss"
      );
      return request;
    });
  }

  public async fetchDoneRequests(): Promise<CarInsuranceRequest[]> {
    const rawRequests = await this.fetchDoneRequestsFromServer();
    const requests = this.cookRawRequests(rawRequests);
    return requests;
  }

  private async fetchDoneRequestsFromServer(): Promise<
    RawCarInsuranceRequest[]
  > {
    const rawRequests = await CarInsuranceModel.fetchDoneRequests();
    return rawRequests;
  }

  public setRequestDone(requestId: string) {
    return CarInsuranceModel.setRequestDone(requestId);
  }

  public setRequestPending(requestId: string) {
    return CarInsuranceModel.setRequestPending(requestId);
  }

  public deleteRequest(requestId: string) {
    return CarInsuranceModel.deleteRequest(requestId);
  }
}
