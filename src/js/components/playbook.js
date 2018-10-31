import React from "react";


import Workspace from "./workspace";
export default class Playbook extends React.Component {

  constructor(props) {
    super(props);
    this.state = {currentTab: this.props.currentTab, currentMap: "SRFull.png"};
  }

  getCurrentMap = () => {
  }

  render() {
    return (<div>
      <div>
        <h1>Playbook</h1>
        <Workspace/>
      </div>

    </div>)
  }
}
