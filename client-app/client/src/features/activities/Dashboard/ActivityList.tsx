import { Box } from "@mui/material";
import ActivityCard from "./ActivityCard";
type Props = {
    actvities: Activity[]
    selectActivity: (id: string) => void;
}
export default function ActivityList({actvities,selectActivity}: Props) {
  return (
    <Box sx={{display:'flex', flexDirection:'column', gap: 3}}>
        {actvities.map(activity => (
            <ActivityCard key={activity.id} activity={activity} selectActivity = {selectActivity}/>
        ))}
    </Box>
  )
}
