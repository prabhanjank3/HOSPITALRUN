import {useRef} from 'react';
import OneForm from "../../forms/OneForm";
import { Box } from '@mui/system';
import DenseTable from '../../shared/components/Table';

export default ({formFields, columns, data=[], setData}: {formFields:any, columns:string[], data:any[], setData:(data:any[]) => void}) => {
    const handleSubmit = (values:any) => {
        setData([...data, values])
    }
    return <Box>
            <OneForm fieldSet={formFields}  handleSubmit={handleSubmit} />
            <DenseTable rows={data} columns={columns} />
        </Box>
}