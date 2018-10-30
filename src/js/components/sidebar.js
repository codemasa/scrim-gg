import React from "react";
import {SideNav, Nav, NavIcon} from "react-sidenav";
import Icon from "react-icons-kit";

import {ic_settings as settingsIcon, ic_home as homeIcon} from 'react-icons-kit/md/';
import Settings from "./modals/settings";
export default class Header extends React.Component {

  constructor(props, context){
    super(props,context);
    this.child = React.createRef();
    this.state = {currentTab: "home"};
  }

  onItemSelection = (id) => {
    switch(id.id){
      case("Home"):
        this.setState({currentTab: id.id});
        this.props.tabChanged(id.id)
        break;
      case("League of Legends"):
        this.setState({currentTab: id.id});
        this.props.tabChanged(id.id)
        break;
      case("Fortnite: Battle Royale"):
        this.setState({currentTab: id.id});
        this.props.tabChanged(id.id)
        break;
      case("Rocket League"):
        this.setState({currentTab: id.id});
        this.props.tabChanged(id.id)
        break;
      case("Overwatch"):
        this.setState({currentTab: id.id});
        this.props.tabChanged(id.id)
        break;


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
          <Nav id="Home" className="side-bar-item-logo">
            <Icon className="icon " size="100%" icon={homeIcon}/>
          </Nav>
          <Nav id="League of Legends" className="side-bar-item">
            <img className="icon invert" src={require("../../res/icons/ic_lol.png")}  />


          </Nav>
          <Nav id="Fortnite: Battle Royale" className="side-bar-item">
            <img className="icon invert" src={require("../../res/icons/ic_fn.png")}  />

          </Nav>
          <Nav id="Rocket League" className="side-bar-item">
            <img className="icon invert" src={require("../../res/icons/ic_rl.png")}  />
          </Nav>
          <Nav id="Overwatch" className="side-bar-item">
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
