import React from 'react'
import { Grid } from 'semantic-ui-react'
import { Activity } from '../../../app/models/activity'
import ActivityDetails from '../details/ActivityDetails';
import ActivityForm from '../form/ActivityForm';
import ActivityList from './ActivityList';

interface Props {
    activities: Activity[];
    selectedActivity: Activity | undefined;
    selectActivity: (id:string) => void;
    cancelSelectActivity: () => void;
}

const ActivityDashboard = ({activities, selectActivity, selectedActivity, cancelSelectActivity}: Props) => {
  return (
    <Grid>
        <Grid.Column width='10'>
          <ActivityList activities={activities} selectActivity={selectActivity}/>
        </Grid.Column>
        <Grid.Column width='6' className='activityDetails'>
            {selectedActivity && <ActivityDetails activity={activities[0]} selectedActivity={selectedActivity} cancelSelectActivity={cancelSelectActivity}/>}
            <ActivityForm />
        </Grid.Column>
    </Grid>
  )
}

export default ActivityDashboard