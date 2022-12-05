import React, { Fragment, useEffect } from "react";
import { Container } from "semantic-ui-react";
import Navbar from "./Navbar";
import ActivityDashboard from "../../components/activities/dashboard/ActivityDashboard";
import { observer } from "mobx-react-lite";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import HomePage from "../../components/home/HomePage";
import ActivityForm from "../../components/activities/form/ActivityForm";
import ActivityDetails from "../../components/activities/details/ActivityDetails";
import TestError from "../../components/errors/TestError";
import { ToastContainer } from "react-toastify";
import NotFound from "../../components/errors/NotFound";
import ServerError from "../../components/errors/ServerError";

function App() {
  let location = useLocation();

  useEffect(() => {}, [location]);

  return (
    <>
      <ToastContainer position="bottom-right" hideProgressBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path={"/*"}
          element={
            <>
              <Navbar />
              <Container style={{ marginTop: "7em" }}>
                <Routes>
                  <Route path="/activities" element={<ActivityDashboard />} />
                  <Route path="/activities/:id" element={<ActivityDetails />} />
                  {["/create-activity", "/manage/:id"].map((path) => (
                    <Route
                      key="activity-form"
                      path={path}
                      element={<ActivityForm key={location.key} />}
                    />
                  ))}
                  <Route path="/errors" element={<TestError />} />
                  <Route path="/server-error" element={<ServerError />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </Container>
            </>
          }
        />
      </Routes>
    </>
  );
}

export default observer(App);
