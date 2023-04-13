import {useState, useEffect} from 'react';
import { Box } from "@mui/system"
import Header from './Header';
import Label from '../shared/components/label';
import TabularInput from '../inputs/tabularInput';
import prescriptionFields from '../forms/fields/PrescriptionItem';
import TextEditor from '../inputs/fields/TextEditor';
import Button from '@mui/material/Button';
import { useDispatch, useSelector } from 'react-redux';
import { createAppointment } from '../../store/actions/prescriptionActions';
import { useLocation, useNavigate } from 'react-router-dom';
import Section from '../shared/components/Section';

interface PrescriptionData{
    diagnosis:string,
    comments:string,
    medicines:any[]
}

export default () => {
    
    const dispatch = useDispatch();
    const location = useLocation();

    const navigate = useNavigate();
    const [rxData, setRxData] = useState<PrescriptionData>({diagnosis:'', comments:'', medicines:[]});
    const columns:string[] = ['medicine','dose', 'duration', 'frequency', 'qty', 'comment']

    const handleSubmit = () => {
        dispatch(createAppointment({appointmentid:location.state.id,...rxData}))
        navigate('/')
    }
    return <Box sx={{ padding:'30px', backgroundColor:'#F4F6F8', boxShadow:2}}>
        <Box sx={{width:'100%', textAlign:'right'}}>
            <Button variant='contained' sx={{marginBottom:'8px'}} onClick={handleSubmit}>End Counsultation</Button>
        </Box>
        <Header data={location.state} />
        <Section>
            <Label text='Complaints' />
            <TextEditor name='diagnosis' data={rxData.diagnosis} handleChange={(name,value) => {setRxData({...rxData,[name]:value})} }  />
        </Section>
        <Section>
            <Label text='Rx' />
            <TabularInput formFields={prescriptionFields} columns={columns} data={rxData.medicines} setData={(newData) => {setRxData({...rxData,medicines:newData})}}  />
        </Section>
        <Section>
            <Label text='Comments' />
            <TextEditor name='comments' data={rxData.comments} handleChange={(name,value) => {setRxData({...rxData,[name]:value})} }  />
        </Section>
    </Box>
}