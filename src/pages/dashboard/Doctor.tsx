import { useEffect } from "react";
import { fetchAllAppointmentsDetails } from "../../store/actions/opdActions";
import { convertDateToIsoString } from "../../components/shared/helpers/helpers";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { Grid } from "@mui/material";
import ListAppointments from "../../components/appointments/list/ListAppointments";

export default () => {
    const dispatch = useDispatch();
    const opdid = useSelector((state:RootState) => state.user.currentUser['doctor.opd.id'])
    
    useEffect(() => {
        dispatch(fetchAllAppointmentsDetails({opdId:opdid,date:convertDateToIsoString(new Date())}))
    },[])

    return (<>
        <Grid container spacing={3} style={{marginTop:'0px !important'}}>
        <Grid item xl={12} lg={12}>
            <ListAppointments />
        </Grid>
        <Grid item xl={12} lg={12}>
        </Grid>
        </Grid>
        
    </>)
}