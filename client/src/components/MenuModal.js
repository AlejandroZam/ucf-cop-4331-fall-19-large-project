import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Alert} from 'reactstrap';
import { connect } from 'react-redux';
import { getMenu, clearMenu } from '../store/actions/dataActions';

class MenuModal extends Component 
{
    // Component state, different from redux/application state
    state = 
    {
        modal: false,
    }

    componentDidMount()
    {
        this.props.clearMenu();
        this.props.getMenu(this.props.locationId);
    }

    toggle = () => 
    {
        this.setState({
            modal: !this.state.modal,
        });
    }

    render()
    {
        if (this.props.loaded)
        {
            return(
                <div>
                    <Button
                        color="primary"
                        style={{ marginBottom: '2rem' }}
                        onClick={this.toggle}
                    >View Menu</Button>
                    <Modal
                        isOpen={this.state.modal}
                        toggle={this.toggle}>
                        <ModalHeader toggle={this.toggle}>{this.props.name}</ModalHeader>
                        <ModalBody>
                            {this.props.menu.map(({ _id, name, price}) => (
                                <Label key={_id}>{name}: {price}</Label>
                            ))}
                            <Button
                                color="dark"
                                style={{marginTop: '2rem'}}
                                block
                                onClick={this.toggle}
                            >Close</Button>
                        </ModalBody>
                    </Modal>
                </div>
            );
        }

        return (
            <div>
               <Button
                    color="primary"
                    style={{ marginBottom: '2rem' }}
                    onClick={this.toggle}
                >View Menu</Button>
                <Modal
                    isOpen={this.state.modal}
                    toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}>{this.props.name}</ModalHeader>
                    <ModalBody>
                    {this.state.msg ? (<Alert color="danger">{this.state.msg}</Alert>) : null}
                        <Form onSubmit={this.onSubmit}>
                            <FormGroup>
                                <Label>No Food :(</Label>
                                <Button
                                    color="dark"
                                    style={{marginTop: '2rem'}}
                                    block
                                    onClick={this.toggle}
                                >Close</Button>
                            </FormGroup>
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    menu: state.data.menu,
    loaded: state.data.menuLoaded
});

export default connect(mapStateToProps, { getMenu, clearMenu })(MenuModal);