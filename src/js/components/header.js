import React from "react";

export default class Header extends React.Component {
  render() {
    return (<div className="header">
      <img className="logo" src={require("../../res/icons/ic_logo.png")}/>
    </div>)
  }
}
