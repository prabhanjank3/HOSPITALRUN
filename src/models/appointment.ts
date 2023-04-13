import AbstractDB from "./abstractDB";

export default interface Appointment extends AbstractDB {
  patientid: string ;
  opdid: string;
  date: string,
  slot:Number,
  time:string,
  reason: string;
}
