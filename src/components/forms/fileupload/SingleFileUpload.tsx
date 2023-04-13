import { Box } from "@mui/material";
import {useRef} from 'react';

export default ({faceComponent, onFileChange}:{faceComponent:any, onFileChange:(a:any) => void}) => 
{
    const fileUploadRef : React.RefObject<HTMLInputElement> = useRef(null);
    return <Box>
    <input
        style={{ display: "none" }}
        ref={fileUploadRef}
        type="file"
        multiple
        onChange={(e:React.BaseSyntheticEvent) => {onFileChange(e.target.files)
        }}
    />
    <Box onClick={() => {if(fileUploadRef?.current)fileUploadRef.current.click()}}>
        {faceComponent}
    </Box>
    </Box>
}