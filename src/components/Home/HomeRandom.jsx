import React from "react";
import RandomPost from "./RandomPost";
import "../../sass/Home/HomeRandom.scss";

function HomeRandom(props) {
    return (
        <div id="random">
            <div id="random-title">
                <h3>RANDOM POSTS</h3>
            </div>
            <div id="random-images">
                <div id="left">
                    <RandomPost article={props.randomNews[0]} />
                </div>
                <div id="right">
                    <div id="right-top">
                        <div id="top-left">
                            <RandomPost article={props.randomNews[1]} />
                        </div>
                        <div id="top-right">
                            <RandomPost article={props.randomNews[2]} />
                        </div>
                    </div>
                    <div id="right-bottom">
                        <RandomPost article={props.randomNews[3]} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomeRandom;
