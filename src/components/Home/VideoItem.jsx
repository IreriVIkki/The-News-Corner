import React from "react";
import "../../sass/Home/VideoItem.scss";

function VideoItem(props) {
    console.log(props.video);
    return (
        <div>
            <div id="video-container">
                <iframe
                    width="853"
                    height="480"
                    src={`https://www.youtube.com/embed/${props.video.id}`}
                    frameborder="0"
                    allowfullscreen
                />
            </div>
            <h4>{props.video.snippet.title}</h4>
        </div>
    );
}

export default VideoItem;
