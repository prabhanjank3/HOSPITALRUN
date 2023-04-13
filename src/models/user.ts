import AbstractDB from "./abstractDB";

export default interface User extends AbstractDB {
  id:string,
  name: string;
  email: string;
  phone: string;
  role:string;
}
