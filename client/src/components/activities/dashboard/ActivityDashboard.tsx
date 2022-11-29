import React from "react";
import { Grid } from "semantic-ui-react";
import { Activity } from "../../../app/models/activity";
import ActivityDetails from "../details/ActivityDetails";
import ActivityForm from "../form/ActivityForm";
import ActivityList from "./ActivityList";

interface Props {
  activities: Activity[];
  selectedActivity: Activity | undefined;
  selectActivity: (id: string) => void;
  cancelSelectActivity: () => void;
  handleFormOpen: (id?: string) => void;
  handleFormClose: () => void;
  editMode: boolean;
  ceateOrEdit: (activity: Activity) => void;
}

const ActivityDashboard = ({
  activities,
  selectActivity,
  selectedActivity,
  cancelSelectActivity,
  handleFormOpen,
  handleFormClose,
  editMode,
  ceateOrEdit,
}: Props) => {
  return (
    <Grid>
      <Grid.Column width="10">
        <ActivityList activities={activities} selectActivity={selectActivity} />
      </Grid.Column>
      <Grid.Column width="6" className="activityDetails">
        {selectedActivity && !editMode && (
          <ActivityDetails
            selectedActivity={selectedActivity}
            cancelSelectActivity={cancelSelectActivity}
            handleFormOpen={handleFormOpen}
          />
        )}
        {editMode && (
          <ActivityForm
            selectedActivity={selectedActivity}
            handleFormClose={handleFormClose}
            ceateOrEdit={ceateOrEdit}
          />
        )}
      </Grid.Column>
    </Grid>
  );
};

export default ActivityDashboard;
