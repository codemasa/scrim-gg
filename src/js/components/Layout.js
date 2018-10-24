import React from "react"

import Header from "./header";
import Body from "./body";
import SideBar from "./sidebar"
import ModalConductor from "./modals/ModalConductor"


class Layout extends React.Component {
    constructor(props){
        super(props);
        this.state = {currentModal: ""};
    }
    onSetModal = id => {
        this.setState({currentModal: id});



    };

    render() {
        return (
        <div>
            <ModalConductor currentModal={this.state.currentModal}/>
            <Header/>
            <Body/>
            <SideBar currentModal={this.state} onSetModal={this.onSetModal}/>
        </div>)
    }
}
export default Layout;
