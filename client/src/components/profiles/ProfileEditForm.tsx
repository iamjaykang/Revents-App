import { ErrorMessage, Formik } from "formik";
import React from "react";
import { Button, Form, Header } from "semantic-ui-react";
import * as Yup from "yup";
import MyTextArea from "../../app/common/form/MyTextArea";
import MyTextInput from "../../app/common/form/MyTextInput";
import { Profile } from "../../app/models/profile";
import { useStore } from "../../app/stores/store";
import ValidationErrors from "../errors/ValidationErrors";

interface Props {
  profile: Profile;
  setEditMode: (editMode: boolean) => void;
}

const ProfileEditForm = ({ profile, setEditMode }: Props) => {
  const {
    profileStore: { updateProfile },
  } = useStore();

  return (
    <Formik
      initialValues={{
        displayName: profile?.displayName,
        bio: profile?.bio,
        error: null,
      }}
      onSubmit={(values, { setErrors }) => {
        updateProfile(values)
          .then(() => {
            setEditMode(false);
          })
          .catch((error) => setErrors({ error }));
      }}
      validationSchema={Yup.object({
        displayName: Yup.string().required(),
        bio: Yup.string(),
      })}
    >
      {({ handleSubmit, isSubmitting, errors, isValid, dirty }) => (
        <Form
          className="ui form error"
          onSubmit={handleSubmit}
          autoComplete="off"
        >
          <Header as="h2" sub content="Edit Profile" color="teal" />
          <MyTextInput placeholder="Display Name" name="displayName" />
          <MyTextArea placeholder="Add your bio" name="bio" rows={10} />
          <ErrorMessage
            name="error"
            render={() => <ValidationErrors errors={errors.error} />}
          />
          <Button
            disabled={!isValid || !dirty || isSubmitting}
            loading={isSubmitting}
            positive
            content="Update profile"
            type="submit"
            floated="right"
          />
        </Form>
      )}
    </Formik>
  );
};

export default ProfileEditForm;
