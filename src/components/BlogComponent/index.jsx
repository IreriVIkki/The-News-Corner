import React, { Component } from "react";
import NavBar from "../../lib/components/NavBar";

export class Blog extends Component {
    render() {
        return (
            <main>
                <NavBar />
                <div>
                    <h1>
                        Welcome to the Coner Blog Section
                        <div>Blog Section</div>
                        <div>Blog Section</div>
                        <div>Blog Section</div>
                        <div>Blog Section</div>
                        <div>Blog Section</div>
                    </h1>
                </div>
            </main>
        );
    }
}

export default Blog;
