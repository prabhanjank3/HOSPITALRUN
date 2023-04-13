import { Box } from "@mui/material";
import styled from "@emotion/styled";
import { Grid } from "@mui/material";
import Navbar from "../../components/navbar";
import Sidebar from "./Sidebar";
import { useState } from "react";
import SidebarItem from "../../models/sidebarItem";

const StyledBox = styled(Box)({
    paddingLeft: '5px'
})
    
export default ({sidebarRoutes}:{sidebarRoutes:SidebarItem[]}) => {
    const getFirstRoute: () => JSX.Element | undefined = () => {
        let obj = sidebarRoutes[0];
        while(obj?.child)
        {
            obj = obj.child[0]
        }
        return obj.component
    }
    const [activeItem, setActiveItem] = useState<JSX.Element | undefined>(getFirstRoute());
    return <>
    <Navbar />
    <StyledBox>
    <Grid container spacing={2} marginTop='0px'>
        <Grid item lg={2.5} style={{padding:'0px'}}>
            <Sidebar sidebarRoutes={sidebarRoutes} setItem={setActiveItem} />
        </Grid>
        <Grid item xl={9} lg={9.5} padding='30px !important'>
            {activeItem }
        </Grid>
    </Grid>
    </StyledBox>
    </>
}