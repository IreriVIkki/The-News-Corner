import React from "react";
import "../../sass/Home/HomeSideBarGallery.scss";

function HomeSideBarGalery(props) {
    return (
        <div id="home-sidebar-galery">
            <div id="sidebar-galery-title">
                <h3>GALLERY</h3>
            </div>
            <div id="sidebar-galery-main">
                <div id="gallery-row">
                    <div
                        style={{
                            backgroundImage: `url(${"https://picsum.photos/200/300/?random"})`
                        }}
                        id="gallery-image"
                    />
                    <div
                        style={{
                            backgroundImage: `url(${"https://picsum.photos/200/300/?random"})`
                        }}
                        id="gallery-image"
                    />
                </div>
                <div id="gallery-row">
                    <div
                        style={{
                            backgroundImage: `url(${"https://picsum.photos/200/300/?random"})`
                        }}
                        id="gallery-image"
                    />
                    <div
                        style={{
                            backgroundImage: `url(${"https://picsum.photos/200/300/?random"})`
                        }}
                        id="gallery-image"
                    />
                </div>
                <div id="gallery-row">
                    <div
                        style={{
                            backgroundImage: `url(${"https://picsum.photos/200/300/?random"})`
                        }}
                        id="gallery-image"
                    />
                    <div
                        style={{
                            backgroundImage: `url(${"https://picsum.photos/200/300/?random"})`
                        }}
                        id="gallery-image"
                    />
                </div>
            </div>
        </div>
    );
}

export default HomeSideBarGalery;
