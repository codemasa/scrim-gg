import React from "react"

import Header from "./header";
import Body from "./body";
import SideBar from "./sidebar"


class Layout extends React.Component {

    onSetModal = id => {
        this.setState({currentModal: id, show: false});
    };


    render() {
        return (
        <div>
            <Header/>
            <Body/>
            <SideBar currentModal={this.state} onSetModal={this.onSetModal}/>
        </div>)
    }
}
export default Layout;
