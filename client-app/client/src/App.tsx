import { List, ListItem, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import axios from 'axios';

function App() {

const [actvities, setActivities] = useState<Activity[]>([]);

useEffect(() => {
  axios.get<Activity[]>('https://localhost:44365/api/Activities')
  .then(response => setActivities(response.data))

  return () => {}
}, [])

  return (
    <>
     <Typography variant="h3">Reactivities</Typography>
     <List>
      {actvities.map((activity) =>(
        <ListItem key={activity.id}>{activity.title}</ListItem>
      ))}
     </List>
    </>
  )
}

export default App
