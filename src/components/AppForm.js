import {Component} from "react";
import React from "react";
import Button from 'react-bootstrap/lib/Button';
import { FormGroup, FormControl, ControlLabel, Form, HelpBlock } from 'react-bootstrap';


class AppForm extends Component {

    render() {

        return (
            <Form onSubmit={this.props.handleSubmit}>
                <ControlLabel>Working example with validation</ControlLabel>
                <FieldGroup
                    id="formControlsText"
                    type="text"
                    label="Title"
                    placeholder="Enter text"
                    name="title"
                />
                <FormGroup controlId="formControlsTextarea">
                    <ControlLabel>description</ControlLabel>
                    <FormControl componentClass="textarea" placeholder="textarea"/>
                </FormGroup>

                <Button type="submit">Submit</Button>
            </Form>
        );
    }
}

function FieldGroup({ id, label, help, ...props }) {
    return (
        <FormGroup controlId={id}>
            <ControlLabel>{label}</ControlLabel>
            <FormControl {...props} />
            {help && <HelpBlock>{help}</HelpBlock>}
        </FormGroup>
    );
}

export default Form;