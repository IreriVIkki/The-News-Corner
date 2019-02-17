import React, { Component } from "react";
import Logo from "../../assets/sitelogo.png";
import NavBar from "../../lib/components/NavBar";
import "../../sass/Home/HomeLanding.scss";

export class HomeLanding extends Component {
    render() {
        const {
            trendingNews,
            getNewsSearchTerm,
            handleSearchNews
        } = this.props;

        return (
            <section id="landing">
                <div id="landing-top">
                    <figure id="figure-carousel">
                        <div id="carousel-items">
                            {trendingNews.map((news, index) => {
                                return (
                                    <div
                                        key={index}
                                        id="carousel-item"
                                        style={{
                                            backgroundImage: `url(${
                                                news.urlToImage
                                            })`,
                                            width: "100%",
                                            height: "100%",
                                            overflow: "hidden",
                                            display: "flex",
                                            backgroundPosition: "10% 10%",
                                            backgroundSize: "cover",
                                            backgroundRepeat: "no-repeat",
                                            flexDirection: "column",
                                            justifyContent: "flex-end",
                                            alignSelf: "auto"
                                        }}
                                    >
                                        <div id="carousel-item-details">
                                            <h4>{news.title}</h4>
                                            <p>{news.description}</p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </figure>
                    <div id="landing-nav">
                        <div id="title">
                            <div id="title-top">
                                <img src={Logo} alt="" />
                            </div>
                        </div>
                        <NavBar />
                    </div>
                </div>
            </section>
        );
    }
}

export default HomeLanding;
