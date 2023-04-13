import {Box} from '@mui/material';
const Section = ({children}:{children:any}) => {
    return <Box sx={{marginBottom:'30px', padding:'20px', backgroundColor:'white', border:'1px solid #1976D2'}}>
        {children}
    </Box>
}
export default Section;