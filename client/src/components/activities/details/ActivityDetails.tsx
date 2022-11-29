import React from "react";
import { Button, Card, Image } from "semantic-ui-react";
import { Activity } from "../../../app/models/activity";
import photo from "../../../assets/images/categoryImages/culture.jpg";

interface Props {
  activity: Activity;
  selectedActivity: Activity | undefined;
  cancelSelectActivity: () => void;
}

const ActivityDetails = ({
  activity,
  selectedActivity,
  cancelSelectActivity,
}: Props) => {
  return (
    <Card fluid>
      <Image
        src={
          selectedActivity &&
          require(`../../../assets/images/categoryImages/${selectedActivity.category.toLowerCase()}.jpg`)
        }
      />
      <Card.Content>
        <Card.Header>{selectedActivity && selectedActivity.title}</Card.Header>
        <Card.Meta>
          <span>{selectedActivity && selectedActivity.date}</span>
        </Card.Meta>
        <Card.Description>{selectedActivity && selectedActivity.description}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Button.Group widths="2">
          <Button basic color="blue" content="Edit" />
          <Button
            onClick={cancelSelectActivity}
            basic
            color="grey"
            content="Cancel"
          />
        </Button.Group>
      </Card.Content>
    </Card>
  );
};

export default ActivityDetails;
