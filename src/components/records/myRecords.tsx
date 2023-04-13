import { useFetchAttachmentsQuery, useAddAttachmentMutation } from '../../store/apis/attachments';
import Table from '../shared/components/CustomizedTable';
import SingleFileUpload from '../forms/fileupload/SingleFileUpload';
import { Button } from '@mui/material';
import { RootState } from '../../store';
import { useSelector } from 'react-redux';
 
const FileUploadButton = ({onFileChange}) => {
    
    return <SingleFileUpload faceComponent={<Button variant='contained'>Add Record</Button>} onFileChange={onFileChange} />
} 
export default ({id_patient}) => {
    const patientid = useSelector((state:RootState) => state.user.currentUser['patient.id'] || id_patient)
    const {data} = useFetchAttachmentsQuery(patientid);
    const [addAttachment, {isLoading}] = useAddAttachmentMutation();
    const columns = [{title:'#',field:'#'},{title:'ID',field:'id'},{title:'Name',field:'name'},{title:'Download',field:'url', render:(rowData:any) => <a href={rowData.url}>Click Here</a>}]
    const onFileChange=(files:any[]) => {
        addAttachment({fileFieldName:'profile',data:{'profile':files, patientid:patientid}})}
    return <Table columns={columns} data={data?.length?data.map((o,i) => ({ ...o,'#':i+1 })):[]} 
    label='Records'
    components={{RightToolbar:<FileUploadButton onFileChange={onFileChange}  />}}
    options={{
        paging:false,
          }} 
    />
}