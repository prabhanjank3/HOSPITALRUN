import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Medicines from '../prescription/Medicines';
import MyPrescriptions from '../prescription/list/myPrescriptions';
import { useLocation, useNavigate } from 'react-router-dom';
import MyRecords from '../records/myRecords';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      style={{width:'100%', backgroundColor:'#F0F2F5', paddingLeft:'30px', paddingRight:'30px'}}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 2}}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs() {
  const [value, setValue] = React.useState(0);
  const location = useLocation();
  
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{ bgcolor: 'background.paper', display:'flex'}}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{paddingX:'20px', backgroundColor:'#3E3E45', minHeight:'100vh', minWidth:'250px !important', paddingTop:'16px'  }}
      >
        <Tab label='Prescription' {...a11yProps(0)} sx={{padding:'20px', paddingRight:'50px', color:'white'}}  />
        <Tab label='History' {...a11yProps(1)} sx={{padding:'20px', paddingRight:'50px', color:'white'}}  />
        <Tab label='Records' {...a11yProps(2)} sx={{padding:'20px', paddingRight:'50px', color:'white'}} />
      </Tabs>
      <TabPanel value={value} index={0} >
        <Medicines/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <MyPrescriptions id_patient={location.state.patientid} />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <MyRecords id_patient={location.state.patientid} />
      </TabPanel>
    </Box>
  );
}