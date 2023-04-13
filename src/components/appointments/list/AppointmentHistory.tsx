import { useEffect, useState } from "react";
import Table from "../../shared/components/CustomizedTable";
// import Table from '../../shared/components/Table';
import { useSelector } from "react-redux";
import { RootState } from "../../../store";
import CrudActions from "../../shared/components/actionMenu/actions/crud";
import { Button } from "@mui/material";
import Modal from '../../shared/components/modal';
import NewAppointment from "../new/NewAppointment";
import SingleFileUpload from "../../forms/fileupload/SingleFileUpload";

const Sample = (props:any) => {
    return <Modal label={<Button
        color="primary"
        variant="contained"
      >
        New Appointment
      </Button>} display= {<NewAppointment />}
      />
  }
export default () => {
    const [data, setData] = useState([]);
    const appointmentData = useSelector((state:RootState) => state.patient.appointmentData);
    useEffect(() => {
        const data =(appointmentData || []).map((data:any, index:number) => {
            return {
                '#':index+1,
                id:data.id,
                patientid:data.patientid,
                doctorname: `Dr. ${data['opd.doctor.user.firstname']} ${data['opd.doctor.user.lastname']}`,
                reason:data.reason,
                date:data.date,
                time:data.time
            }
        }
    )
        setData(data)
    },[appointmentData])

    const columndata = [{title:'#', field:'#', width:'10%'}, {title:'DATE', field:'date'}, {title:'DOCTOR NAME', field:'doctorname'}, {title:'REASON', field:'reason'}, {title:'TIME', field:'time'}]
    
    return (<>
        <Table columns={columndata} data={data} label="APPOINTMENTS" actionMenu={CrudActions} 
        components={{RightToolbar:<Sample />}} 
        options={{
            paging:false,
              }} />
        {/* <Table columns={columns} rows={data} label="APPOINTMENTS" /> */}
    </>)
}