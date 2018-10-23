import React from "react"

import Header from "./header";
import Body from "./body";
import Footer from "./footer";
export default class Layout extends React.Component {
    render() {
        return (
            <div>
                <Header/>
                <Body/>
                <Footer/>
            </div>
        )
    }
}
