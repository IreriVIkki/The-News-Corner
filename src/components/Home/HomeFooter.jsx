import React, { Component } from "react";
import Pinterest from "../../assets/pinterest.svg";
import Twitter from "../../assets/twitter.svg";
import Instagram from "../../assets/instagram.svg";
import LinkedIn from "../../assets/linkedin.svg";
import Facebook from "../../assets/facebook.svg";
import Youtube from "../../assets/youtube.svg";
import Logo from "../../assets/sitelogo.png";
import "../../sass/Home/HomeFooter.scss";

export class HomeFooter extends Component {
    render() {
        const counter = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        return (
            <footer>
                <div id="footer-main">
                    <div id="footer-main-logo">
                        <img src={Logo} alt="" />
                    </div>
                    <h3>THE NEWS CORNER</h3>
                    <p>Lorem ipsum dolor sit amet.</p>

                    <div id="footer-main-social">
                        <div>
                            <img src={Pinterest} alt="pinterest" />
                        </div>
                        <div>
                            <img src={Twitter} alt="pinterest" />
                        </div>
                        <div>
                            <img src={Instagram} alt="pinterest" />
                        </div>
                        <div>
                            <img src={LinkedIn} alt="pinterest" />
                        </div>
                        <div>
                            <img src={Facebook} alt="pinterest" />
                        </div>
                        <div>
                            <img src={Youtube} alt="pinterest" />
                        </div>
                    </div>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Natus reprehenderit maxime iure exercitationem quasi
                        illo quisquam.
                    </p>
                    <div id="subscribe">
                        <input type="email" />
                        <button type="submit">Subscribe</button>
                    </div>
                </div>
                <div id="twitter-feed">
                    <div id="footer-title">
                        <h3>OUR LATEST</h3>
                        <h3> TWEETS</h3>
                    </div>
                    <div id="tweet-item">
                        <div>
                            <img src={Twitter} alt="pinterest" />
                        </div>
                        <div>
                            <p>Lorem ipsum dolor sit.</p>
                            <p>2 weeks ago</p>
                        </div>
                    </div>
                </div>
                <div id="footer-photos">
                    <div id="footer-title">
                        <h3>PHOTOS</h3>
                        <h3> ON FLICKER</h3>
                    </div>
                    <div>
                        <div id="footer-photos-row">
                            {counter.map((item, index) => {
                                return (
                                    <div
                                        key={index}
                                        style={{
                                            backgroundImage: `url(${`https://picsum.photos/200/20${item}`})`
                                        }}
                                    />
                                );
                            })}
                        </div>
                    </div>
                </div>
                <div>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Laudantium dolorem harum corrupti numquam
                        assumenda expedita sunt, quidem nam est labore, adipisci
                        facere. Sapiente facilis maiores beatae nostrum
                        molestias vero ducimus.
                    </p>
                </div>
            </footer>
        );
    }
}

export default HomeFooter;
