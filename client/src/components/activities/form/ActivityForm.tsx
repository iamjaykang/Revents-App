import React, { Fragment } from 'react'
import { Button, Form, Segment } from 'semantic-ui-react'

interface Props {
  handleFormClose: () => void;
}

const ActivityForm = ({handleFormClose}: Props) => {
  return (
    <Segment clearing>
        <Form>
            <Form.Input placeholder='Title' />
            <Form.TextArea placeholder='Description' />
            <Form.Input placeholder='Category' />
            <Form.Input placeholder='Date' />
            <Form.Input placeholder='City' />
            <Form.Input placeholder='Venue' />
            <Button floated='right' positive type='submit' content='Submit' />
            <Button onClick={handleFormClose} floated='right' type='button' content='Cancel' />
        </Form>
    </Segment>
  )
}

export default ActivityForm