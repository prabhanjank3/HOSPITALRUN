import { useEffect } from "react";
import { fetchAllAppointmentsDetails } from "../../../store/actions/opdActions";
import { convertDateToIsoString } from "../../shared/helpers/helpers";
import { useDispatch, useSelector } from "react-redux";
import Table from "../../shared/components/Table";
import { RootState } from "../../../store";
import Tooltip from "@mui/material/Tooltip";
import { Link } from "react-router-dom";
import { VscDebugStart } from "react-icons/vsc";

export default () => {
    const dispatch = useDispatch();

    const appointmentTableData = useSelector((state:RootState) => {
        return (state.opd?.appointmentData || []).map((data:any, index:number) => {
            return {
                '#':index+1,
                id:data.id,
                patientid:data.patientid,
                name: `${data['patient.user.firstname']} ${data['patient.user.lastname']}`,
                reason:data.reason,
                time:data.time,
                doctorname: `Dr. ${data['opd.doctor.user.firstname']} ${data['opd.doctor.user.lastname']}`,
                phone:`${data['patient.user.phone']}`,
                dob:`${data['patient.user.dob']}`,
                date:`${data['date']}`
            }
        });
    })
    const opdid = useSelector((state:RootState) => state.user.currentUser['doctor.opd.id'])
    useEffect(() => {
        dispatch(fetchAllAppointmentsDetails({opdId:opdid,date:convertDateToIsoString(new Date())}))
    },[])
    const columns = ['#','patientid', 'name', 'reason' ,'time', 'actions'];
    
    appointmentTableData.forEach((row:any) => {
        row['actions'] = (<Tooltip title='Start Consultation'><Link to={'/opd/consultation/'+row.id} state={{...row}}><VscDebugStart size={'20px'} /></Link></Tooltip>)
    })
    
    return (<>
        <Table columns={columns} rows={appointmentTableData} label="APPOINTMENTS" />
    </>)
}