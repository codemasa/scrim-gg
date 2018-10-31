import React from "react"

import Header from "./header";
import Body from "./body";
import SideBar from "./sidebar"


class Layout extends React.Component {

    constructor(props){
      super(props);
      this.state = {currentTab: "Home"};
    }


    tabChanged = id => {
      this.setState({currentTab: id});
    }

    render() {
        return (
        <div>
            <Header currentTab={this.state.currentTab}/>
            <Body/>
            <SideBar tabChanged={this.tabChanged}/>
        </div>)
    }
}
export default Layout;
