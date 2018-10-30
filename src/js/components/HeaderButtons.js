import React from "react";
import {Popover, Modal, Tooltip, OverlayTrigger, Button} from 'react-bootstrap';
import {Button as UIButton} from "semantic-ui-react";

export default class HeaderButtons extends React.Component {
  render() {
    return (<div className="header-button-container">
      <UIButton className="header-button">
        Button 1
      </UIButton>
      <UIButton className="header-button">
        Button 1
      </UIButton>
      <UIButton className="header-button">
        Button 1
      </UIButton>
    </div>)
  }
}
