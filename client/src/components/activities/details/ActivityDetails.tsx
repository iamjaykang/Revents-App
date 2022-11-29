import React from "react";
import { Button, Card, Image } from "semantic-ui-react";
import { Activity } from "../../../app/models/activity";
import photo from "../../../assets/images/categoryImages/culture.jpg";

interface Props {
  selectedActivity: Activity | undefined;
  cancelSelectActivity: () => void;
  handleFormOpen: (id?:string) => void;
}

const ActivityDetails = ({
  selectedActivity,
  cancelSelectActivity,
  handleFormOpen
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
        <Card.Header>{selectedActivity?.title}</Card.Header>
        <Card.Meta>
          <span>{selectedActivity?.date}</span>
        </Card.Meta>
        <Card.Description>{selectedActivity?.description}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Button.Group widths="2">
          <Button onClick={() => handleFormOpen(selectedActivity?.id)} basic color="blue" content="Edit" />
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
