import React, { Component } from "react";
import HomeLanding from "./HomeLanding";
import HomeLandingBottom from "./HomeLandingBottom";
import HomeSideBar from "./HomeSideBar";
import HomeSideBarGallery from "./HomeSideBarGallery";
import HomeSideBarVideos from "./HomeSideBarVideos";
import HomeMain from "./HomeMain";
import BreakingNews from "./BreakingNews";
import HomeFashion from "./HomeFashion";
import HomeDark from "./HomeDark";
import HomeHealth from "./HomeHealth";
import ShopItem from "./ShopItem";
import Apis from "../ApiUrls";
import HomeFooter from "./HomeFooter";

import { clothes } from "../shop.json";
import "../../sass/Home/Home.scss";

(async () => {
    const rawData = await fetch(Apis.businessNewsUrl);
    const jsonData = await rawData.json();
    jsonData.articles.map(article => {
        console.log("article", article.content);
    });
    console.log("jsonData", jsonData.articles[0].content);
})();

export class Home extends Component {
    state = {
        content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit.Sequi dolore cum dolor fugit officia! Nemo alias suntveritatis nulla? Aliquam aliquid itaque in repellenduslabore sint quo veritatis? Nulla, ad!",
        trendingNews: [],
        searchResults: [],
        searchTerm: "",
        randomNews: [],
        fashionNews: [],
        technologyNews: [],
        businessNews: [],
        sportsNews: [],
        healthNews: [],
        weather: {},
        youtubeVideos: []
    };

    async componentDidMount() {
        await this.apiCallJson(Apis.sportsNewsUrl).then(data => {
            data.articles.map(article => {
                if (
                    article.title &&
                    article.urlToImage &&
                    article.source.name
                ) {
                    this.setState({
                        sportsNews: [...this.state.sportsNews, article]
                    });
                }
            });
        });
        await this.apiCallJson(Apis.healthNewsUrl).then(data => {
            data.articles.map(article => {
                if (
                    article.title &&
                    article.urlToImage &&
                    article.source.name
                ) {
                    this.setState({
                        healthNews: [...this.state.healthNews, article]
                    });
                }
            });
        });
        await this.apiCallJson(Apis.topHeadlinesUrl).then(data => {
            data.articles.map(article => {
                if (
                    article.title &&
                    article.urlToImage &&
                    article.source.name
                ) {
                    this.setState({
                        trendingNews: [...this.state.trendingNews, article]
                    });
                }
            });
        });
        await this.apiCallJson(Apis.generalNewsUrl).then(data => {
            data.articles.map(article => {
                if (
                    article.title &&
                    article.urlToImage &&
                    article.source.name
                ) {
                    this.setState({
                        randomNews: [...this.state.randomNews, article]
                    });
                }
            });
        });
        await this.apiCallJson(Apis.fashionNewsUrl).then(data => {
            data.articles.map(article => {
                if (
                    article.title &&
                    article.urlToImage &&
                    article.source.name
                ) {
                    this.setState({
                        fashionNews: [...this.state.fashionNews, article]
                    });
                }
            });
        });
        await this.apiCallJson(Apis.technologyNewsUrl).then(data => {
            data.articles.map(article => {
                if (
                    article.title &&
                    article.urlToImage &&
                    article.source.name
                ) {
                    this.setState({
                        technologyNews: [...this.state.technologyNews, article]
                    });
                }
            });
        });
        await this.apiCallJson(Apis.businessNewsUrl).then(data => {
            data.articles.map(article => {
                if (
                    article.title &&
                    article.urlToImage &&
                    article.source.name
                ) {
                    this.setState({
                        businessNews: [...this.state.businessNews, article]
                    });
                }
            });
        });

        await this.apiCallJson(Apis.youtubeTrendingUrl).then(data => {
            this.setState({
                youtubeVideos: [
                    ...this.state.youtubeVideos,
                    ...data.items.slice(0, 4)
                ]
            });
        });

        await this.apiCallJson(Apis.weatherUrl).then(data => {
            this.setState({
                weather: {
                    ...this.state.weather,
                    ...data.main,
                    ...data.sys,
                    ...data.weather[0],
                    name: data.name
                }
            });
        });
    }

    getNewsSearchTerm = () => e =>
        this.setState({ searchTerm: e.target.value });

    handleSearchNews = () => async e => {
        const { searchTerm, searchResults } = this.state;
        e.preventDefault();
        if (searchTerm === "") return;
        const searchUrl = Apis.searchNewsUrl(searchTerm);
        await this.apiCallJson(searchUrl).then(news => {
            this.setState({
                searchResults: [...news.articles, ...searchResults]
            });
        });
    };

    apiCallJson = async url => {
        const rawData = await fetch(url);
        const jsonData = await rawData.json();
        return jsonData;
    };

    render() {
        const {
            content,
            trendingNews,
            randomNews,
            fashionNews,
            weather,
            technologyNews,
            businessNews,
            sportsNews,
            healthNews,
            youtubeVideos
        } = this.state;

        return (
            <React.Fragment>
                <div id="landing">
                    <HomeLanding
                        id="homeLanding"
                        content={content}
                        trendingNews={trendingNews.slice(0, 4)}
                        getNewsSearchTerm={this.getNewsSearchTerm}
                        handleSearchNews={this.handleSearchNews}
                        technologyNews={this.technologyNews}
                    />
                    <HomeLandingBottom
                        weather={weather}
                        technologyNews={technologyNews}
                    />
                    <div id="breakingNews">
                        <BreakingNews />
                    </div>
                </div>
                <main id="main-container">
                    <div id="main">
                        <HomeMain randomNews={randomNews.reverse()} />
                        <div id="main-center">
                            <div id="main-center-left">
                                <HomeFashion fashionNews={fashionNews} />
                                <HomeHealth
                                    healthNews={healthNews.slice(0, 3)}
                                />
                            </div>
                            <div id="main-center-right">
                                <HomeDark sportsNews={sportsNews.slice(0, 3)} />
                            </div>
                        </div>
                        <div id="main-center-advert">
                            <div>
                                <h1>ADVERTISEMENT SPOT</h1>
                            </div>
                        </div>
                        <div id="main-center-shop">
                            <ShopItem clothes={clothes} />
                        </div>
                    </div>
                    <div id="sidebar">
                        <HomeSideBar businessNews={businessNews.slice(0, 4)} />
                        <HomeSideBarVideos youtubeVideos={youtubeVideos} />
                        <HomeSideBarGallery youtubeVideos={youtubeVideos} />
                    </div>
                </main>
                <div id="footer-nav">
                    <div id="footer-nav-container">
                        <div id="footer-nav-item">
                            <h4>HOME</h4>
                        </div>
                        <div id="footer-nav-item">
                            <h4>BLOG</h4>
                        </div>
                        <div id="footer-nav-item">
                            <h4>SHOP</h4>
                        </div>
                        <div id="footer-nav-item">
                            <h4>CONTACT US</h4>
                        </div>
                        <div id="footer-nav-item">
                            <h4>MY ACCOUNT</h4>
                        </div>
                        <div id="footer-nav-item">
                            <h4>CART</h4>
                        </div>
                    </div>
                </div>
                <HomeFooter />
            </React.Fragment>
        );
    }
}

export default Home;
