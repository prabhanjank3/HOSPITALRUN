import Slot from "../../../models/slot";
import moment from 'moment';
import SelectOptions from "../../../models/selectOptions";

export const createDefaultValuesFromFieldSet = (fieldSet: any[]) => {
  const initialValuesByFieldType: any = {
    date: new Date().toISOString().split("T")[0],
    time: "00:00"
  };
  const defaultValues:any = {};
  fieldSet.forEach((set) => {
    set.fields.forEach((field:any) => {
      defaultValues[field.name] = field.defaultValue || initialValuesByFieldType[field.type] || "";
    });
  });
  return defaultValues;
};
export const createSlots = (timing:Slot[], slotTime:number) => {
    let timeSlots:any = [];
    timing.forEach((slot:Slot) => {
      var start = moment(slot.from, "HH:mm");
      var end = moment(slot.to,"HH:mm");
      while(start.isBefore(end))
      {
        let from = start.format('HH:mm');
        let to = start.add(slotTime, 'minutes').format('HH:mm')
        timeSlots.push({label:`${from}-${to}`, id:timeSlots.length+1});
        start = moment(to,'HH:mm')
      }
    })
    return timeSlots;
}
export const convertDateToIsoString = (date:Date) => {
    return date.toISOString().split('T')[0]
}
export const deleteFromArrayIndexes = (arr:any[], removeValFromIndex:number[]) => {
    let dummy:SelectOptions[] = [...arr];
    for (var i = removeValFromIndex.length -1; i >= 0; i--)
        dummy.splice(removeValFromIndex[i]-1,1);
    return dummy;
}
export const getAge = (dateString:string) => {
  var today = new Date();
  var birthDate = new Date(dateString);
  var age = today.getFullYear() - birthDate.getFullYear();
  var m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
  }
  return age;
}