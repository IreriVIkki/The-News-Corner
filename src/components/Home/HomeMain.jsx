import React, { Component } from "react";
import HomeRandom from "./HomeRandom";
import "../../sass/Home/HomeMain.scss";

export class HomeMain extends Component {
    render() {
        return (
            <main>
                <HomeRandom randomNews={this.props.randomNews} />
            </main>
        );
    }
}

export default HomeMain;
