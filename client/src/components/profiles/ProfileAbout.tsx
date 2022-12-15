import React, { useState } from "react";
import { Button, Grid, Header, Tab } from "semantic-ui-react";
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
          {isCurrentUser && <Button
            basic
            floated="right"
            content={editMode ? "Cancel" : "Edit Profile"}
            onClick={() => setEditMode(!editMode)}
          />}
        </Grid.Column>
        <Grid.Column width={16}>
          {editMode ? (
            <ProfileEditForm profile={profile} setEditMode={setEditMode} />
          ) : (
            <>
              <Header as="h2" sub color="teal" content="Display Name" />
              <p>{profile.displayName}</p>
              <Header as="h2" sub color="teal" content="Bio" />
              <p>{profile.bio}</p>
            </>
          )}
        </Grid.Column>
      </Grid>
    </Tab.Pane>
  );
};

export default ProfileAbout;
