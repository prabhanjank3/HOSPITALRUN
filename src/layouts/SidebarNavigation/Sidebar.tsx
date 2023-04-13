import { Box, List, ListItem, ListItemIcon, ListItemText, Collapse, Divider, Typography } from "@mui/material"
import styled from "@emotion/styled";
import {useState} from 'react';
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import SidebarItem from "../../models/sidebarItem";

const StyledBox = styled(Box)({
    backgroundColor:'#3E3E45',
    minHeight:'100vh !important',
    paddingTop:'40px',
    color:'#B5BFC0',
    fontFamily:'DMSansRegular'
})

export default ({sidebarRoutes,setItem}:{sidebarRoutes:SidebarItem[],setItem:(a:any) => void}) => {
    return <StyledBox>
        {sidebarRoutes.map((o:SidebarItem) => <CustomizedListItem navItem={o} setItem={setItem} />)}
    </StyledBox>
}

const CustomizedListItem = ({navItem, setItem}:{navItem:SidebarItem, setItem:(a:JSX.Element) => void}) => {
    const [state, setState] = useState({open:false});
    
    const handleClick = () => {
         setState((prevState:any) => ({
           open: !prevState.open
         }));
    }
    
    return (
      <div >
        <Box style={{paddingLeft:'20px'}}>
        <ListItem button  onClick={() => {
            handleClick(); 
            if(navItem?.component){
                setItem(navItem.component)
            }
            }}>
          <ListItemText primary={navItem.label} />
          {(navItem?.child) && (state.open  ? <ExpandLess /> : <ExpandMore />)}
        </ListItem>
        {navItem?.child && <Collapse
          in={state.open}
          timeout='auto'
          unmountOnExit
        >
        <List component='li' disablePadding>
          { navItem.child.map((sheet:SidebarItem) => {
            return (
              <ListItem button onClick={() => {setItem(sheet.component?sheet.component:<></>)}} >
                <ListItemIcon sx={{minWidth:'10px'}}>
                </ListItemIcon>
                <ListItemText disableTypography key={sheet.label} primary={<Typography variant="body2" style={{fontFamily:'DMSansRegular'}}>{sheet.label}</Typography>} />
              </ListItem>
            );
          })
          }
        </List>
      </Collapse>
    }
        
    </Box>
    <Divider />
    </div>
    )
    
  }