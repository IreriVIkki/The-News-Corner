import React, { Component } from "react";
import Utils from "../Utils";
import "../../sass/Home/HomeHealth.scss";

export class HomeHealth extends Component {
    render() {
        const articles = [...this.props.healthNews];
        return (
            <div id="home-health">
                <div id="health-title">
                    <h3>Health</h3>
                </div>
                <div id="health-content">
                    {articles.map((article, index) => {
                        return (
                            <div key={index} id="health-content-item">
                                <div id="health-content-item-container">
                                    <div
                                        style={{
                                            backgroundImage: `url(${
                                                article.urlToImage
                                            })`
                                        }}
                                        id="health-image"
                                    />
                                    <p id="health-date">
                                        {`${Utils.getFormattedDate(
                                            article.publishedAt
                                        )}`}
                                    </p>
                                    <p id="health-author">
                                        {`By ${
                                            article.author === null
                                                ? article.source.name
                                                : article.author
                                        }`}
                                    </p>
                                    <h4>{article.title}</h4>
                                    <p>{article.description}</p>
                                    <button>
                                        <h4>READ MORE</h4>
                                    </button>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }
}

export default HomeHealth;
