import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Input, Alert} from 'reactstrap';
import { connect } from 'react-redux';
//import { addContact } from '../actions/contactActions';

class contactModal extends Component 
{
    // Component state, different from redux/application state
    state = 
    {
        modal: false,
        firstName: '',
        lastName: '',
        address: '',
        phoneNumber: '',
        email: ''
    }

    toggle = () => 
    {
        //this.props.clearErrors();

        this.setState({
            modal: !this.state.modal,
            firstName: '',
            lastName: '',
            address: '',
            phoneNumber: '',
            email: ''
        });
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    componentDidUpdate(prevProps) {
        // const { error } = this.props;

        // if (error !== prevProps.error)
        //     if (error.id !== null)
        //         this.setState({ msg: "Please enter both a first and last name" });
        //     else
        //         this.setState({ msg: null });
                
        // if (this.props.contact.contacts.length === prevProps.contact.contacts.length + 1)
        //     this.toggle();
    }

    onSubmit = (e) => {
        // Stops the form from submitting
        e.preventDefault();

        //const { _id } = this.props.auth.user;

        const newContact = {
            user: _id,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            address: this.state.address,
            phoneNumber: this.state.phoneNumber,
            email: this.state.email
        }

        // Add contact via addContact action
        //this.props.addContact(newContact);

        
    }

    render()
    {
        return (
            <div>
                <Button
                    color="light"
                    style={{ marginBottom: '2rem' }}
                    onClick={this.toggle}
                >Add New Contact</Button>
                <Modal
                    isOpen={this.state.modal}
                    toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}>New Contact</ModalHeader>
                    <ModalBody>
                    {this.state.msg ? (<Alert color="danger">{this.state.msg}</Alert>) : null}
                        <Form onSubmit={this.onSubmit}>
                            <FormGroup>
                                <Input
                                    type="text"
                                    name="firstName"
                                    id="firstName"
                                    placeholder="First Name"
                                    onChange={this.onChange}/>
                                <Input
                                    type="text"
                                    name="lastName"
                                    id="lastName"
                                    placeholder="Last Name"
                                    onChange={this.onChange}/>
                                <Input
                                    type="text"
                                    name="address"
                                    id="address"
                                    placeholder="Address"
                                    onChange={this.onChange}/>
                                <Input
                                    type="text"
                                    name="phoneNumber"
                                    id="phoneNumber"
                                    placeholder="Phone Number"
                                    onChange={this.onChange}/>
                                <Input
                                    type="text"
                                    name="email"
                                    id="email"
                                    placeholder="Email"
                                    onChange={this.onChange}/>
                                <Button
                                    color="dark"
                                    style={{marginTop: '2rem'}}
                                    block
                                >Add Contact</Button>
                            </FormGroup>
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
        );
    }
}

const mapStateToProps = state => ({
});

export default connect(mapStateToProps, { })(contactModal);