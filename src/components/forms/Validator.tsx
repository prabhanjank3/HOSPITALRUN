const checker = (regEx:any, data:any) => {
    if (regEx.test(data)) {
      return true;
    } else {
      return false;
    }
  };
  export const emailChecker = (email:string) => {
    const regEx = /^[a-zA-z0-9._-]+@gmail.com$/;
    if (email.length == 0 || regEx.test(email)) {
      return true;
    } else {
      return false;
    }
  };
  export const phoneChecker = (phoneNo:string) => {
    const regEx = /^(?!(\d)\1+$)[0-9]{10}$/;
    if (regEx.test(phoneNo)) {
      return true;
    } else {
      return false;
    }
  };
  export const nameChecker = (name:string) => {
    const regEx = /[A-Z][a-z]+( [a-zA-Z]+)*$/;
    return checker(regEx, name);
  };
 
  