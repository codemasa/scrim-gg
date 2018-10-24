import React from "react";
import {SideNav, Nav} from "react-sidenav"

import ModalConductor from './modals/ModalConductor'
export default class Header extends React.Component {

    onItemSelection = (id) => {
        const { currentModal, onSetModal } = this.props;
        onSetModal(id.id)
        console.log(id.id);
    };

    render() {
        const { currentModal } = this.props
        return (
            <div className="side-bar">
                <div className="side-nav">
                    <SideNav defaultSelectedPath="1" >
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
                    <SideNav defaultSelectedPath="0"
                    onItemSelection={this.onItemSelection}>
                        <Nav id="SETTINGS" className="side-bar-item-settings">
                            Settings
                        </Nav>
                    </SideNav>
                </div>
            </div>
        )
    }
}
