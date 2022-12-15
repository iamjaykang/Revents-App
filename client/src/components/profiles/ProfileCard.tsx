import { observer } from "mobx-react-lite";
import React from "react";
import { Link } from "react-router-dom";
import { Card, Icon, Image } from "semantic-ui-react";
import { Profile } from "../../app/models/profile";

interface Props {
  profile: Profile;
}

const ProfileCard = ({ profile }: Props) => {
  return (
    <Card as={Link} to={`/profiles/${profile.username}`} fluid>
      <Image src={profile.image || require("../../assets/images/user.png")} />
      <Card.Content>
        <Card.Header>{profile.displayName}</Card.Header>
        <Card.Description
          style={{ overflow: "hidden", textOverflow: "ellipsis" }}
        >
          {profile.bio && profile.bio?.length > 28
            ? profile.bio.slice(0, 28) + "..."
            : profile.bio}
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Icon name="user" />
        20 Followers
      </Card.Content>
    </Card>
  );
};

export default observer(ProfileCard);
