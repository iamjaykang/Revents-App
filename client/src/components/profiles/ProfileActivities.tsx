import { observer } from "mobx-react-lite";
import React, { SyntheticEvent, useEffect } from "react";
import { Link } from "react-router-dom";
import { format } from "date-fns";
import {
  Card,
  Grid,
  Header,
  Image,
  Tab,
  TabProps,
} from "semantic-ui-react";
import { useStore } from "../../app/stores/store";

const panes = [
  {
    menuItem: "Future Events",
    pane: { key: "future" },
  },
  {
    menuItem: "Past Events",
    pane: { key: "past" },
  },
  {
    menuItem: "Hosting",
    pane: { key: "hosting" },
  },
];

const ProfileActivities = () => {
  const {
    profileStore: {
      profile,
      loadUserActivities,
      userActivities,
      loadingUserActivities,
    },
  } = useStore();

  useEffect(() => {
    profile!.username && loadUserActivities(profile!.username);
  }, [profile, loadUserActivities]);

  const handleTabChange = (e: SyntheticEvent, data: TabProps) => {
    loadUserActivities(
      profile!.username,
      panes[data.activeIndex as number].pane.key
    );
  };

  return (
    <Tab.Pane loading={loadingUserActivities}>
      <Grid>
        <Grid.Column width={16}>
          <Header
            size="medium"
            as="h2"
            content="Activities"
            icon="calendar alternate"
            floated="left"
          />
        </Grid.Column>
        <Grid.Column width={16}>
          <Tab
            menu={{ secondary: true, pointing: true }}
            panes={panes}
            onTabChange={(e, data) => handleTabChange(e, data)}
          />
        </Grid.Column>
        <Grid.Column width={16}>
          <Card.Group itemsPerRow={4}>
            {userActivities &&
              userActivities?.map((a) => (
                <Card as={Link} to={`/activities/${a.id}`} key={a.id} fluid>
                  <Image
                    src={
                      a &&
                      require(`../../assets/images/categoryImages/${a.category.toLowerCase()}.jpg`)
                    }
                  />
                  <Card.Content>
                    <Card.Header textAlign="center">{a.title}</Card.Header>
                    <Card.Meta textAlign="center">
                      <div>{format(new Date(a.date), "do LLL")}</div>
                      <div>{format(new Date(a.date), "h:mm a")}</div>
                    </Card.Meta>
                  </Card.Content>
                </Card>
              ))}
          </Card.Group>
        </Grid.Column>
      </Grid>
    </Tab.Pane>
  );
};

export default observer(ProfileActivities);
