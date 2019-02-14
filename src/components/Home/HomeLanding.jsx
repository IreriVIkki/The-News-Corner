import React, { Component } from "react";
import Logo from "../../assets/sitelogo.png";
import "../../sass/Home/HomeLanding.scss";

export class HomeLanding extends Component {
    render() {
        const {
            content,
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
                        <div id="nav">
                            <nav>
                                <div id="nav-item">
                                    <h4>HOME</h4>
                                </div>
                                <div className="seperator" />
                                <div id="nav-item">
                                    <h4>VIDEOS</h4>
                                </div>
                                <div className="seperator" />
                                <div id="nav-item">
                                    <h4>SHOP</h4>
                                </div>
                                <div className="seperator" />
                                <div id="nav-item">
                                    <h4>BLOG POSTS</h4>
                                </div>
                                <div className="seperator" />
                                <div id="nav-item">
                                    <h4>GALERY</h4>
                                </div>
                                <div className="seperator" />
                                <div id="nav-item">
                                    <h4>REVIEWS</h4>
                                </div>
                                <div className="seperator" />
                                <div id="nav-item">
                                    <h4>CELEBRITY</h4>
                                </div>
                            </nav>
                            <div id="nav-details">
                                <p>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Saepe, architecto!
                                </p>
                                <form onSubmit={handleSearchNews()}>
                                    <input
                                        type="text"
                                        onChange={getNewsSearchTerm()}
                                    />
                                    <button type="submit">Search</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default HomeLanding;
