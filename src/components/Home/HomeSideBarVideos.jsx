import React, { Component } from "react";
import "../../sass/Home/HomeSideBarVideos.scss";
import VideoItem from "./VideoItem";

export class HomeSideBarVideos extends Component {
    render() {
        const videos = [...this.props.youtubeVideos];
        return (
            <div id="home-sidebar-yt">
                <div id="sidebar-yt-title">
                    <h3>VIDEOS</h3>
                </div>
                <div id="sidebar-yt-main">
                    <div id="sidebar-yt-main-top">
                        {videos.map((video, index) => {
                            return (
                                <div id="sidebar-yt-video-box" key={index}>
                                    <div className="video-container">
                                        <iframe
                                            src={`https://www.youtube.com/embed/${
                                                video.id
                                            }`}
                                            frameBorder="0"
                                            allowFullScreen
                                        />
                                    </div>
                                    <h4>{video.snippet.title}</h4>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        );
    }
}

export default HomeSideBarVideos;

// <div id="home-sidebar-yt">
// <div id="sidebar-yt-title">
//     <h3>VIDEOS</h3>
// </div>
// <div id="sidebar-yt-main">
//     <div id="sidebar-yt-main-top">
//         {videos.map((video, index) => {
//             return (
//                 <VideoItem
//                     id="sidebar-yt-video-box"
//                     video={video}
//                     key={index}
//                 />
//             );
//         })}
//     </div>
// </div>
// </div>
