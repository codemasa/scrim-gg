import React from "react";
import {SideNav, Nav, NavIcon} from "react-sidenav";
import Icon from "react-icons-kit";

import {ic_settings as settingsIcon, ic_home as homeIcon} from 'react-icons-kit/md/';
import Settings from "./modals/settings";
export default class Header extends React.Component {

  constructor(props){
    super(props);
    this.child = React.createRef();
  }

  onItemSelection = (id) => {
    switch(id.id){
      case("SETTINGS"):
        if(this.child.current.state.show == false){
          this.child.current.handleShow();
        }

        break;
    }
  };

  render() {
    const {currentModal} = this.props
    return (<div className="side-bar">

      <div className="side-nav">

        <SideNav defaultSelectedPath="h" onItemSelection={this.onItemSelection}>
          <Nav id="h" className="side-bar-item-logo">
            <Icon className="icon " size="100%" icon={homeIcon}/>
          </Nav>
          <Nav id="1" className="side-bar-item">
            <img className="icon invert" src={require("../../res/icons/ic_lol.png")}  />


          </Nav>
          <Nav id="2" className="side-bar-item">
            <img className="icon invert" src={require("../../res/icons/ic_fn.png")}  />

          </Nav>
          <Nav id="3" className="side-bar-item">
            <img className="icon invert" src={require("../../res/icons/ic_rl.png")}  />
          </Nav>
          <Nav id="4" className="side-bar-item">
            <img className="icon" src={require("../../res/icons/ic_ow.png")}  />
          </Nav>
        </SideNav>
      </div>
      <div className="side-nav-settings">
        <SideNav onItemSelection={this.onItemSelection} selectedPath={this.path}>
          <Nav id="SETTINGS" className="side-bar-item-settings">
            <Icon className="icon" size="100%" icon={settingsIcon}/>
            <Settings ref={this.child}/>
          </Nav>
        </SideNav>
      </div>
    </div>)
  }
}
