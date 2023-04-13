import AbstractDB from "./abstractDB";

export default interface Patient extends AbstractDB {
  bloodGroup: string;
}
