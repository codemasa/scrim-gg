import React from "react";

export default class Workspace extends React.Component {

  constructor(props) {
    super(props);
    this.state = {currentTab: this.props.currentTab};
  }



  render() {
    return (<div>

      <img src={require("../../res/image-assets/SRFull.png")} height="800px"/>

    </div>)
  }
}
