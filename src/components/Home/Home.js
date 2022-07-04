import * as React from "react";

import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';

import CandidateProfile from "../CandidateProfile/CandidateProfile";
import Permission from "../Permission/Permission";
import TabPanel from "../TabPanel/TabPanel";


function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

function Home() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Typography variant="h2" sx={{textAlign: 'center'}}>Candidate Profile!</Typography>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" centered>
          <Tab label="Profile" {...a11yProps(0)} />
          <Tab label="Permission" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <main>
          <CandidateProfile />
        </main>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Permission />
      </TabPanel>
    </Box>
  );
}

export default Home;