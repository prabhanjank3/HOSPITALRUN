import { useEffect, useState, useRef } from "react";
import {toast} from 'react-toastify';
import {
  Button,
  Card
} from "@mui/material";
import Appointment from "../../../models/appointment";
import { fetchOpdSelectionInfo } from "../../../store/actions/opdActions";
import { useDispatch, useSelector } from "react-redux";
import {RootState, AppDispatch} from '../../../store/index';
import SelectOptions from "../../../models/selectOptions";
import { fetchScheduledSlots } from "../../../apis/apis";
import { createSlots, deleteFromArrayIndexes } from "../../shared/helpers/helpers";
import OneForm from "../../forms/OneForm";
import newAppointmentFields from "../../forms/fields/NewAppointment";
import { createDefaultValuesFromFieldSet } from "../../shared/helpers/helpers";
import { scheduleAppointment } from "../../../apis/apis";
import { fetchAllAppointmentsDetails } from "../../../store/actions/patientActions";

const initialValues:Appointment = createDefaultValuesFromFieldSet(newAppointmentFields)

type CallbackFunction = () => void;

const NewAppointment = ({onFinish}:{onFinish?:CallbackFunction}) => {

  const [data, setData] = useState<Appointment>(initialValues);
  const [fieldState, setFieldState] = useState(newAppointmentFields);
  const [slotOptions, setSlotOptions] = useState<SelectOptions[]>([]);
  const patientid = useSelector((state:RootState) => state.user.currentUser['patient.id'])

  const dispatch = useDispatch<AppDispatch>();
  const OpdOptions: SelectOptions[] = [];
  
  const ref = useRef();

  const userOptions = useSelector((state:RootState) => {
    return [{label:`${state.user.currentUser.firstname} ${state.user.currentUser.lastname}`, id:state.user.currentUser['patient.id']}] 
  })
  const opdData = useSelector((state:RootState) => {
    const opdLookup:any = {};
    (state?.opd?.opdSelection || []).forEach((usr:any) => {
      opdLookup[usr.doctor.opd.id] = usr.doctor.opd;
      OpdOptions.push({label:`${usr.firstname} ${usr.lastname} - ${usr.doctor.opd.name}`, id:usr.doctor.opd.id})
    })
    return opdLookup;
  })
  const setFieldOptions = (fields:any[], rowIndex:number, columnIndex:number, value:SelectOptions[]) => {
    fields[rowIndex]['fields'][columnIndex]['options'] = value;
  }
  setFieldOptions(newAppointmentFields,0,0,userOptions);
  setFieldOptions(newAppointmentFields,0,1,OpdOptions);
  
  useEffect(() => {
    dispatch(fetchOpdSelectionInfo())
  },[]);
  
  useEffect(() => {
    if(data.opdid && data.date)
    {
      fetchScheduledSlots(data.opdid,data.date).then(resp => {
        const slots = createSlots(opdData[data.opdid].timing,opdData[data.opdid].consultationtime);
        const temp = deleteFromArrayIndexes(slots, resp.data);
        setSlotOptions(temp)
        setFieldOptions(newAppointmentFields,1,1,temp);
        setFieldState([...newAppointmentFields])
      })
    }
  },[data.date,data.opdid]);
  
  useEffect(() => {
    if(data.slot !== -1)
    {
      const time = (slotOptions).filter((slot) => slot.id == data.slot)[0].label
      setData({...data, time:time})
    }
  },[data.slot])
 
  const handleSubmit = (values:any) => {
    scheduleAppointment(data).then(data => {
      toast.success('Appointment Scheduled Successfully!')
      dispatch(fetchAllAppointmentsDetails(patientid))
    }).catch(err => {
      toast.error('Error occured while scheduling appointment!')
    })
    setData(initialValues);
    handleCancel();
  }
  const handleCancel = () => {
    if(onFinish)
    onFinish();
  }
  const trackValues = (values:any) => {
    setData({...data, ...values})
  }
  const getButtonWithSubmitRef = (ref:any) => {
    return  <Button ref={ref} variant='contained' sx={{marginRight:'10px'}}>Submit</Button>
  }
  return (
    <Card sx={{padding:'40px'}}>
      <OneForm ref= {ref} fieldSet={fieldState} handleSubmit={handleSubmit} handleCancel={handleCancel} renderActionButtons={
        <div style={{textAlign:'center'}}>
        {getButtonWithSubmitRef(ref)}
        <Button variant='contained'>Cancel</Button>
        </div>
      } 
      trackValues={trackValues}
      />
    </Card>
  );
};
export default NewAppointment;
