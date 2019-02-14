import React, { Component } from "react";
import Pinterest from "../../assets/pinterest.svg";
import Twitter from "../../assets/twitter.svg";
import Instagram from "../../assets/instagram.svg";
import LinkedIn from "../../assets/linkedin.svg";
import Facebook from "../../assets/facebook.svg";
import Youtube from "../../assets/youtube.svg";
import TechnologyItem from "./TechnologyItem";
import "../../sass/Home/HomeLandingBottom.scss";

export class HomeLandingBottom extends Component {
    render() {
        const { weather, technologyNews } = this.props;

        // const temp = { ...this.props.weather.main };
        const { name, country, icon, temp } = weather;

        const item = { ...technologyNews[0] };

        return (
            <div id="landing-bottom">
                <div id="landing-bottom-inner">
                    <div id="tech">
                        <div id="tech-top">
                            <h4>FROM AROUND THE WORLD OF TECHNOLOGY</h4>
                        </div>
                        <div id="tech-bottom">
                            {technologyNews.slice(0, 3).map((item, index) => {
                                return (
                                    <TechnologyItem key={index} item={item} />
                                );
                            })}
                        </div>
                    </div>
                    <div id="seperator">
                        <div id="seperator-top" />
                        <div id="seperator-bottom" />
                    </div>
                    <div id="metadata">
                        <div id="metadata-social-media">
                            <img src={Pinterest} alt="pinterest" />
                            <img src={Twitter} alt="pinterest" />
                            <img src={Instagram} alt="pinterest" />
                            <img src={LinkedIn} alt="pinterest" />
                            <img src={Facebook} alt="pinterest" />
                            <img src={Youtube} alt="pinterest" />
                        </div>
                        <div id="metadata-weather">
                            <div id="metadata-weather-top">
                                <img
                                    src={`http://openweathermap.org/img/w/${icon}.png`}
                                    alt=""
                                />
                                <h4>{temp} &#x2109;</h4>
                            </div>
                            <div id="metadata-weather-bottom">
                                <h4>{name}</h4>
                                <h4>{country}</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default HomeLandingBottom;
