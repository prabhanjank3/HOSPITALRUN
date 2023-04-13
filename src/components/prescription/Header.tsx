import {Box, Grid} from '@mui/material';
import { getAge } from '../shared/helpers/helpers';

export default ({data}:{data:any}) => {
    console.log(data.name)
    const rowmedia = {xl:4,lg:6,md:6,sm:6};
    const media = {xl:9,lg:9,md:6, sm:9};
    const headermedia = {xl:3,lg:3,md:6, sm:3}
    return <Box sx={{border:'1px solid #1976D2', marginBottom:'20px', padding:'20px', backgroundColor:'white'}}>
        <strong><Grid container>
            <Grid item {...rowmedia} style={{marginBottom:'10px'}}>
                <Grid container>
                    <Grid item {...headermedia}><strong>Patient Name:</strong>:</Grid> 
                    <Grid item {...media} style={{textAlign:'center'}}>{data.name}</Grid>
                </Grid>
            </Grid>
            <Grid item {...rowmedia} style={{marginBottom:'10px'}}>
                <Grid container>
                    <Grid item {...headermedia}><strong>Age:</strong>:</Grid> 
                    <Grid item {...media} style={{textAlign:'center'}}>{getAge(data.dob)} Years</Grid>
                </Grid>
            </Grid>
        </Grid>
        <Grid container style={{marginBottom:'10px'}}>
            <Grid item {...rowmedia} >
                <Grid container>
                    <Grid item {...headermedia}><strong>Patient ID:</strong>:</Grid> 
                    <Grid item {...media} style={{textAlign:'center'}}>{data.patientid}</Grid>
                </Grid>
            </Grid>
            <Grid item {...rowmedia}>
                <Grid container>
                    <Grid item {...headermedia}><strong>Date:</strong>:</Grid> 
                    <Grid item {...media} style={{textAlign:'center'}}>{data.date}</Grid>
                </Grid>
            </Grid>
        </Grid>
        <Grid container style={{marginBottom:'10px'}}>
            <Grid item {...rowmedia}>
                <Grid container>
                    <Grid item {...headermedia}><strong>Contact No:</strong>:</Grid> 
                    <Grid item {...media} style={{textAlign:'center'}}>{data.phone}</Grid>
                </Grid>
            </Grid>
            <Grid item {...rowmedia}>
                <Grid container>
                    <Grid item {...headermedia}><strong>Doctor Name:</strong>:</Grid> 
                    <Grid item {...media} style={{textAlign:'center'}}>{data.doctorname}</Grid>
                </Grid>
            </Grid>
        </Grid></strong>
    </Box>
}