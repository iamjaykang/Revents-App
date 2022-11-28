import React from "react";
import { Button, Card, Image } from "semantic-ui-react";
import { Activity } from "../../../app/models/activity";
import photo from "../../../assets/images/categoryImages/culture.jpg";

interface Props {
  activity: Activity;
}

const ActivityDetails = ({ activity }: Props) => {
  return (
    <Card fluid>
      <Image
        src={
          activity &&
          require(`../../../assets/images/categoryImages/${activity.category.toLowerCase()}.jpg`)
        }
      />
      <Card.Content>
        <Card.Header>Matthew</Card.Header>
        <Card.Meta>
          <span>{activity && activity.date}</span>
        </Card.Meta>
        <Card.Description>{activity && activity.description}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Button.Group widths="2">
          <Button basic color="blue" content="Edit" />
          <Button basic color="grey" content="Cancel" />
        </Button.Group>
      </Card.Content>
    </Card>
  );
};

export default ActivityDetails;
