import React from "react";
import {Popover, Modal, Tooltip, OverlayTrigger, Button} from 'react-bootstrap';
import {Button as UIButton} from "semantic-ui-react";

import HeaderButtons from "./HeaderButtons"
export default class Header extends React.Component {
  render() {
    return (<div className="header">
      <img className="logo" src={require("../../res/icons/ic_logo.png")}/>
      <p className="game-header">{this.props.currentTab}</p> 
      <HeaderButtons/>
    </div>)
  }
}
