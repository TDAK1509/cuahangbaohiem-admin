import Fire from "./fire";

const firebase = new Fire();
const firestore = firebase.firestore;
const db = firestore.collection("car_insurance_request");

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
  public static async fetch(): Promise<RawCarInsuranceRequest[]> {
    const rawRequests: RawCarInsuranceRequest[] = [];

    const querySnapshot = await db.get();

    querySnapshot.forEach(function(doc) {
      const rawRequest = doc.data() as RawCarInsuranceRequest;
      rawRequests.push(rawRequest);
    });

    return rawRequests;
  }
}
