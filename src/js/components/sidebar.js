import React from "react";
import {SideNav, Nav} from "react-sidenav"

export default class Header extends React.Component {

    render() {
        return (
            <div className="side-bar">
                <SideNav defaultSelectedPath="1">
                    <div className="side-bar-item">
                        <Nav id="1">
                            Item 1
                        </Nav>
                    </div>
                    <div className="side-bar-item">
                        <Nav id="2">
                            Item 2
                        </Nav>
                    </div>
                    <div className="side-bar-item">
                        <Nav id="3">
                            Item 3
                        </Nav>
                    </div>
                </SideNav>
            </div>
        )
    }
}
