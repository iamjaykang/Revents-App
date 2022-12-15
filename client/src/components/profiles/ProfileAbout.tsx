import React, { useState } from "react";
import { Button, Grid, Header, Item, Tab } from "semantic-ui-react";
import { Profile } from "../../app/models/profile";
import { useStore } from "../../app/stores/store";
import ProfileEditForm from "./ProfileEditForm";

interface Props {
  profile: Profile;
}

const ProfileAbout = ({ profile }: Props) => {
  const [editMode, setEditMode] = useState(false);

  const {
    profileStore: { isCurrentUser },
  } = useStore();
  return (
    <Tab.Pane>
      <Grid>
        <Grid.Column width={16}>
          <Header floated="left" icon="address card" content="About" />
          {isCurrentUser && (
            <Button
              basic
              floated="right"
              content={editMode ? "Cancel" : "Edit Profile"}
              onClick={() => setEditMode(!editMode)}
            />
          )}
        </Grid.Column>
        <Grid.Column width={16}>
          {editMode ? (
            <ProfileEditForm profile={profile} setEditMode={setEditMode} />
          ) : (
            <Item.Group>
              <Item>
                <Item.Content>
                  <Item.Header
                    as="h2"
                    content="Display Name"
                    style={{ color: "#00b5ad" }}
                  />
                  <Item.Description>{profile.displayName}</Item.Description>
                </Item.Content>
              </Item>
              <Item>
                <Item.Content>
                  <Item.Header
                    as="h2"
                    content="Bio"
                    style={{ color: "#00b5ad" }}
                  />
                  <Item.Description style={{ whiteSpace: "pre-wrap" }}>
                    {profile.bio}
                  </Item.Description>
                </Item.Content>
              </Item>
            </Item.Group>
          )}
        </Grid.Column>
      </Grid>
    </Tab.Pane>
  );
};

export default ProfileAbout;
