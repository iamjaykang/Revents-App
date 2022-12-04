import React, { Fragment, useEffect } from "react";
import { Container } from "semantic-ui-react";
import Navbar from "./Navbar";
import ActivityDashboard from "../../components/activities/dashboard/ActivityDashboard";
import { observer } from "mobx-react-lite";
import { Route, Routes, useLocation } from "react-router-dom";
import HomePage from "../../components/home/HomePage";
import ActivityForm from "../../components/activities/form/ActivityForm";
import ActivityDetails from "../../components/activities/details/ActivityDetails";

function App() {
  let location = useLocation();

  useEffect(() => {}, [location]);

  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route
          path={"/*"}
          element={
            <>
              <Navbar />
              <Container style={{ marginTop: "7em" }}>
                <Routes>
                  <Route path="/activities" element={<ActivityDashboard key={location.key} />} />
                  <Route path="/activities/:id" element={<ActivityDetails key={location.key} />} />
                  {["/create-activity", "/manage/:id"].map((path) => (
                    <Route
                      path={path}
                      element={<ActivityForm key={location.key} />}
                    />
                  ))}
                </Routes>
              </Container>
            </>
          }
        />
      </Routes>
    </Fragment>
  );
}

export default observer(App);
