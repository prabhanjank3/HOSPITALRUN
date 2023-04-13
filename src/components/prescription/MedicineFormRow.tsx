import {useRef} from 'react';
import OneForm from "../forms/OneForm"
import prescriptionFields from "../forms/fields/PrescriptionItem";
import {Button} from '@mui/material';
import PrescribedMedicine from '../../models/prescribedMedicine';

export default ({onAdd}:{onAdd:(a:PrescribedMedicine) => void}) => {
    const ref = useRef();
    return <OneForm ref={ref} fieldSet={prescriptionFields} handleSubmit={(values) => {onAdd(values)}} renderActionButtons={<></>} />
}