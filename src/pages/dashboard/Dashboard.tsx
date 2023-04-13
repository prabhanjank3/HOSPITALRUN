import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import DoctorDashboard from './Doctor';
import PatientDashboard from './Patient';
import styled from '@emotion/styled';
import { Box } from '@mui/material';

const StyledBox = styled(Box)({
    backgroundColor:'#F0F2F5',
    padding:'0px',
})

export default () => {
    const role = useSelector((state:RootState) => state.user.currentUser?.role)
    return <StyledBox>
    {(role == 'DOCTOR' && <DoctorDashboard />)}
    {(role == 'PATIENT' && <PatientDashboard />)}
    </StyledBox>
}