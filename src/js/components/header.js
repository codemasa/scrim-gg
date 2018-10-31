import React from "react";
import {Popover, Modal, Tooltip, OverlayTrigger, Button} from 'react-bootstrap';
import {Button as UIButton} from "semantic-ui-react";

import HeaderButtons from "./HeaderButtons"
export default class Header extends React.Component {
  render() {
    return (<div className="header">
      <div className="header-button">
        <HeaderButtons className="header-button-container"/>
      </div>
      <div className="logo-div">
        <img className="logo" src={require("../../res/icons/ic_logo.png")}/>
      </div>
      <div className="game-header">
        <p>{this.props.currentTab}</p>
      </div>
    </div>)
  }
}
