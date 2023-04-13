import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { fetchPrescriptionsByPatientIdDummy } from "../../../store/actions/prescriptionActions";
import DenseTable from "../../shared/components/CustomizedTable";
import { RootState } from "../../../store";
import {Box} from '@mui/material';
import Label from "../../shared/components/label";
import BasicModal from "../../shared/components/modal";
import { Assignment } from "@mui/icons-material";
import Prescription from "../Prescription";

export default ({id_patient}:{id_patient:string}) => {
    const columndata = [{title:'#', field:'#', width:'2%'},{title:'ID', field:'appid'}, {title:'DATE', field:'date'}, {title:'TIME', field:'time'}, {title:'DOCTOR', field:'doctor'}, {title:'REASON', field:'reason'}, {title:'VIEW', field:'view'}]
    const [data, setData] = useState<any>([]);
    const patientid = useSelector((state:RootState) => state.user.currentUser['patient.id'] || id_patient)

    useEffect(() => {
       (fetchPrescriptionsByPatientIdDummy(patientid)).then(resp => {
        const result = resp.data.map((res:any, index:number) => {
            return {
                '#':index+1,
                prescriptionid:res['id'],
                appid: res['appointment.id'],
                date: res['appointment.date'],
                time:res['appointment.time'],
                reason:res['appointment.reason'],
                doctor: `Dr. ${res['appointment.opd.doctor.user.firstname']} ${res['appointment.opd.doctor.user.lastname']}`,
                view: <BasicModal label={<Assignment />} display = {<Prescription data={res} />} />
            }
        } )
        setData(result);
       });
        
    },[])

    return <Box>
        {/* <Label text="PRESCRIPTIONS" /> */}
        <DenseTable data={data} columns={columndata} label="PRESCRIPTIONS" options={{
            paging:false,
              }} />
    </Box>
}