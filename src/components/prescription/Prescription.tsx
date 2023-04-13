import {Box, Button} from '@mui/material';
import DenseTable from '../shared/components/Table';
import Section from '../shared/components/Section';
import TextEditor from '../inputs/fields/TextEditor';
import Label from '../shared/components/label';

export default ({data}:{data:any}) => {
    return <Box sx={{ padding:'30px', backgroundColor:'#F4F6F8', boxShadow:2}}>
    <Section>
        <Label text='Complaints' />
        <TextEditor name='diagnosis' plain data={data.diagnosis} handleChange={() => {}}  />
    </Section>
    <Section>
        <Label text='Rx' />
        <DenseTable columns={['medicine', 'dose', 'frequency', 'duration', 'qty', 'comments']} rows={data.medicines}  />
    </Section>
    <Section>
        <Label text='Comments' />
        <TextEditor name='comments' plain data={data.comments} handleChange={() => {}}  />
    </Section>
</Box>
}