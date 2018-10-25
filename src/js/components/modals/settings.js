import React from 'react';
import {Popover, Modal, Tooltip, OverlayTrigger, Button} from 'react-bootstrap';


class SettingsModal extends React.Component {
  constructor(props, context) {
    super(props, context);
    //this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false
    };
  }

  handleClose = () => {
    this.setState({show: false});
  }

  handleShow = () => {
    this.setState({show: true});
  }

  render() {
    const popover = (<Popover id="modal-popover" title="popover">
      very popover. such engagement
    </Popover>);
    const tooltip = <Tooltip id="modal-tooltip">wow.</Tooltip>;

    return (
    <div>
      <Modal show={this.state.show} onHide={this.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Settings</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Text in a modal</h4>
          <p>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </p>

          <h4>Popover in a modal</h4>
          <p>
            there is a{' '}
            <OverlayTrigger overlay={popover}>
              <a href="#popover">popover</a>
            </OverlayTrigger>{' '}
            here
          </p>

          <h4>Tooltips in a modal</h4>
          <p>
            there is a{' '}
            <OverlayTrigger overlay={tooltip}>
              <a href="#tooltip">tooltip</a>
            </OverlayTrigger>{' '}
            here
          </p>

          <hr/>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.handleClose}>Close</Button>
        </Modal.Footer>
      </Modal>
    </div>);
  }
}

export default SettingsModal;
