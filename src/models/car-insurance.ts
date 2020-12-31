import Fire from "./fire";

const firebase = new Fire();
const firestore = firebase.firestore;

export interface RawCarInsuranceRequest {
  id: string;
  name: string;
  email: string;
  phone: string;
  note?: string;
  insuranceCompany: string;
  insuranceValue: string;
  date: string;
  isDone: boolean;
}

export default class CarInsuranceModel {
  private static getFirestoreCollection() {
    return firestore.collection("car_insurance_request");
  }

  public static async fetchPendingRequests(): Promise<
    RawCarInsuranceRequest[]
  > {
    const rawRequests: RawCarInsuranceRequest[] = [];
    const db = this.getFirestoreCollection();

    const querySnapshot = await db.where("isDone", "==", false).get();

    querySnapshot.forEach(function(doc) {
      const rawData = doc.data();
      const rawRequest = { id: doc.id, ...rawData } as RawCarInsuranceRequest;
      rawRequests.push(rawRequest);
    });

    return rawRequests;
  }

  public static async fetchDoneRequests(): Promise<RawCarInsuranceRequest[]> {
    const rawRequests: RawCarInsuranceRequest[] = [];
    const db = this.getFirestoreCollection();

    const querySnapshot = await db.where("isDone", "==", true).get();

    querySnapshot.forEach(function(doc) {
      const rawData = doc.data();
      const rawRequest = { id: doc.id, ...rawData } as RawCarInsuranceRequest;
      rawRequests.push(rawRequest);
    });

    return rawRequests;
  }

  public static setRequestDone(requestId: string) {
    return this.getFirestoreCollection()
      .doc(requestId)
      .update({ isDone: true });
  }

  public static setRequestPending(requestId: string) {
    return this.getFirestoreCollection()
      .doc(requestId)
      .update({ isDone: false });
  }

  public static deleteRequest(requestId: string) {
    return this.getFirestoreCollection()
      .doc(requestId)
      .delete();
  }
}
