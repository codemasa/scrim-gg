import React from "react";
import {SideNav, Nav} from "react-sidenav"

import Settings from "./modals/settings"
export default class Header extends React.Component {

  constructor(props){
    super(props);
    this.child = React.createRef();
  }

  onItemSelection = (id) => {
    switch(id.id){
      case("SETTINGS"):
        this.child.current.handleShow();

        break;
    }
  };





  render() {
    const {currentModal} = this.props
    return (<div className="side-bar">
      <div className="side-nav">
        <SideNav defaultSelectedPath="1" onItemSelection={this.onItemSelection}>
          <Nav id="l" className="side-bar-item-logo">
            Logo
          </Nav>
          <Nav id="1" className="side-bar-item">
            League of Legends
          </Nav>
          <Nav id="2" className="side-bar-item">
            Fortnite
          </Nav>
          <Nav id="3" className="side-bar-item">
            Rocket League
          </Nav>
        </SideNav>
      </div>
      <div className="side-nav-settings">
        <SideNav onItemSelection={this.onItemSelection} selectedPath={this.path}>
          <Nav id="SETTINGS" className="side-bar-item-settings">
            <Settings ref={this.child}/>
          </Nav>
        </SideNav>
      </div>
    </div>)
  }
}
