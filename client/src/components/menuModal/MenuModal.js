import React, { Component } from 'react';
import { Accordion, Card, Button, Modal} from 'react-bootstrap';
import { connect } from 'react-redux';
import { getMenu, clearMenu } from '../../store/actions/dataActions';

class MenuModal extends Component 
{
    // Component state, different from redux/application state
    state = 
    {
        modal: false,
    }

    componentDidMount()
    {
        this.props.getMenu(this.props.locationId);
    }

    toggle = () => 
    {
        this.props.clearMenu();
        this.props.getMenu(this.props.locationId);

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
                    <p>{this.props.address}</p>
                    <Button
                        block
                        color="primary"
                        style={{ marginTop: '1rem' }}
                        onClick={this.toggle}
                    >View Menu</Button>
                    <Modal
                        show={this.state.modal}
                        onHide={this.toggle}>
                        <Modal.Header>{this.props.name}</Modal.Header>
                        <Modal.Body>
                            <Accordion style={{justifyContent: 'center'}}>
                                {this.props.menu.map(({ _id, name, price, description}) => (
                                    <Card key={_id}>

                                        <Accordion.Toggle style={{padding:'0px, 4rem'}} as={Card.Header} eventKey={_id}>
                                            <p style={{float:"left", margin:"0"}}>{name}</p>
                                            <p style={{float:"right", margin:"0"}}>{price}</p>
                                        </Accordion.Toggle>
                                        
                                        <Accordion.Collapse eventKey={_id}>
                                            <Card.Body>
                                                {description}
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                ))}
                            </Accordion>
                            <Button
                                color="dark"
                                style={{marginTop: '2rem'}}
                                block
                                onClick={this.toggle}
                            >Close</Button>
                        </Modal.Body>
                    </Modal>
                </div>
            );
        }

        return (
            <div>
               <p>{this.props.address}</p>
                    <Button
                        block
                        color="primary"
                        style={{ marginTop: '1rem' }}
                        onClick={this.toggle}
                    >View Menu</Button>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    menu: state.data.menu,
    loaded: state.data.menuLoaded
});

export default connect(mapStateToProps, { getMenu, clearMenu })(MenuModal);