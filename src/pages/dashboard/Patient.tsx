import { useDispatch, useSelector } from "react-redux";
import AppointmentHistory from "../../components/appointments/list/AppointmentHistory";
import { Grid, Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useEffect } from "react";
import { fetchAllAppointmentsDetails } from "../../store/actions/patientActions";
import { RootState } from "../../store";
import MyPrescriptions from "../../components/prescription/list/myPrescriptions";
import MyRecords from "../../components/records/myRecords";

const useStyles = makeStyles((theme) => ({
    actionBar:{padding:`${theme.spacing(2)} ${theme.spacing(0)}`}
}))
export default () => {
    const dispatch = useDispatch();
    const classes = useStyles();
    const patientid = useSelector((state:RootState) => state.user.currentUser['patient.id'])
    useEffect(() => {
        dispatch(fetchAllAppointmentsDetails(patientid))
    },[])
    return <Grid container spacing={2}>
        <Grid item xl={12} lg={12}>
        <AppointmentHistory />
    </Grid>
    <Grid item xl={12} lg={12}>
        <MyPrescriptions />
    </Grid>
    <Grid item xl={12} lg={12}>
        <MyRecords />
    </Grid>
    </Grid>
}