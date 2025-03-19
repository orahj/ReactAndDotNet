import { Box, Container, CssBaseline} from "@mui/material";
import { useEffect, useState } from "react";
import axios from 'axios';
import NavBar from "./NavBar";
import ActivityDashboard from "../../features/activities/Dashboard/ActivityDashboard";

function App() {

const [actvities, setActivities] = useState<Activity[]>([]);
const [selectedActivity,setSelectedActivity] = useState<Activity | undefined>(undefined);

useEffect(() => {
  axios.get<Activity[]>('https://localhost:44365/api/Activities')
  .then(response => setActivities(response.data))

  return () => {}
}, [])

const handleSelect = (id: string) =>{
  setSelectedActivity(actvities.find(a=>a.id === id));
}
const handleCancelSelectActivity = ()=>{
  setSelectedActivity(undefined);
}

  return (
    <Box sx={{bgcolor: '#eeeeee'}}>
    <CssBaseline />     
    <NavBar />
    <Container maxWidth='xl' sx={{mt: 3}}>
      <ActivityDashboard 
      actvities = {actvities} 
      selectActivity ={handleSelect}
      cancelSelectActivity = {handleCancelSelectActivity}
      selectedActivity = {selectedActivity}
      />
    </Container>
    
    </Box>
  )
}

export default App
