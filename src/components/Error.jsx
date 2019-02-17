import React, { Component } from "react";
import NavBar from "../lib/components/NavBar";

export class Error extends Component {
    render() {
        return (
            <main>
                <NavBar />
                <div>
                    <h1>
                        <div>Uh Oh,</div>
                        <div>Error The Page You Are Looking For</div>
                        <div>Could Not Be FOund</div>
                        <div>Error</div>
                        <div>Error</div>
                    </h1>
                </div>
            </main>
        );
    }
}

export default Error;
