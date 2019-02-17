import React, { Component } from "react";
import NavBar from "../../lib/components/NavBar";
import "../../sass/VideosSass/Videos.scss";
import PlaylistItem from "./PlaylistItem";

export class Videos extends Component {
    render() {
        return (
            <main className="video-main">
                <NavBar />
                <div id="videos-container">
                    <div id="videos-left">
                        <div>
                            <p>Library</p>
                        </div>
                        <PlaylistItem />
                        <PlaylistItem />
                        <PlaylistItem />
                        <PlaylistItem />
                        <PlaylistItem />
                    </div>
                    <div id="videos-right">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Laboriosam, consequatur!
                        </p>
                    </div>
                </div>
            </main>
        );
    }
}

export default Videos;
