import React, { Fragment } from "react";
import { Container } from "semantic-ui-react";
import Navbar from "./Navbar";
import ActivityDashboard from "../../components/activities/dashboard/ActivityDashboard";
import { observer } from "mobx-react-lite";
import { Route, Routes } from "react-router-dom";
import HomePage from "../../components/home/HomePage";
import ActivityForm from "../../components/activities/form/ActivityForm";

function App() {
  return (
    <Fragment>
      <Navbar />
      <Container style={{ marginTop: "7em" }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/activities" element={<ActivityDashboard />} />
          <Route path="/create-activity" element={<ActivityForm />} />
        </Routes>
      </Container>
    </Fragment>
  );
}

export default observer(App);
