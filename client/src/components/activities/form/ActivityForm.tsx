import { observer } from "mobx-react-lite";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Button, Segment } from "semantic-ui-react";
import LoadingComponent from "../../../app/layout/LoadingComponent";
import { useStore } from "../../../app/stores/store";
import { v4 as uuid } from "uuid";
import { Link } from "react-router-dom";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import MyTextInput from "../../../app/common/form/MyTextInput";

const ActivityForm = () => {
  const { activityStore } = useStore();

  const {
    loading: submitting,
    loadActivity,
    loadingInitial,
  } = activityStore;

  const { id } = useParams<{ id: string }>();

  const [activity, setActivity] = useState({
    id: "",
    title: "",
    category: "",
    description: "",
    date: "",
    city: "",
    venue: "",
  });

  const validationSchema = Yup.object({
    title: Yup.string().required("The activity title is required"),
    description: Yup.string().required("The description title is required"),
    category: Yup.string().required(),
    date: Yup.string().required(),
    venue: Yup.string().required(),
    city: Yup.string().required(),
  });

  useEffect(() => {
    if (id) {
      loadActivity(id).then((activity) => setActivity(activity!));
    }
  }, [id, loadActivity]);

  if (loadingInitial) return <LoadingComponent content="Loading Activity..." />;

  return (
    <Segment clearing>
      <Formik
        validationSchema={validationSchema}
        enableReinitialize
        initialValues={activity}
        onSubmit={(values) => console.log(values)}
      >
        {({ handleSubmit }) => (
          <Form className="ui form" onSubmit={handleSubmit} autoComplete="off">
            <MyTextInput name="title" placeholder="Title" />
            <MyTextInput placeholder="Description" name="description" />
            <MyTextInput placeholder="Category" name="category" />
            <MyTextInput placeholder="Date" name="date" />
            <MyTextInput placeholder="City" name="city" />
            <MyTextInput placeholder="Venue" name="venue" />
            <Button
              loading={submitting}
              floated="right"
              positive
              type="submit"
              content="Submit"
            />
            <Button
              as={Link}
              to="/activities"
              floated="right"
              type="button"
              content="Cancel"
            />
          </Form>
        )}
      </Formik>
    </Segment>
  );
};

export default observer(ActivityForm);
