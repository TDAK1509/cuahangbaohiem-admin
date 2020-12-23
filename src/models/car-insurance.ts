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
  public static fetch(): RawCarInsuranceRequest[] {
    // db.get()
    return [
      {
        date: "Wed Dec 23 2020 06:43:56 GMT+0700 (Indochina Time)",
        name: "Michael Jackson",
        email: "test@gmail.com",
        phone: "1234567",
        insuranceCompany: "PVI",
        insuranceValue: "12.320.000 ₫",
        note: ""
      }
    ];
    // querySnapshot.forEach(function(doc) {
    //     // doc.data() is never undefined for query doc snapshots
    //     console.log(doc.id, " => ", doc.data());
    // });
  }
}
