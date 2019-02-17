import React from "react";
import "../../sass/VideosSass/PlaylistItem.scss";

function PlaylistItem() {
    return (
        <div id="playlist-item-container">
            <h4>Library</h4>
            <div id="playlist-drop-down">
                <div>
                    <span>play all</span>
                </div>
                <div>shuffle all</div>
                <div>edit</div>
                <div>delete</div>
            </div>
        </div>
    );
}

export default PlaylistItem;
