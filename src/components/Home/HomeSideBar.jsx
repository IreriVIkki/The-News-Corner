import React, { Component } from "react";
import Utils from "../Utils";
import "../../sass/Home/HomeSidebar.scss";

export class HomeSideBar extends Component {
    state = {
        article: { ...this.props.businessNews[0] },
        article2: { ...this.props.businessNews[1] },
        article3: { ...this.props.businessNews[2] },
        article4: { ...this.props.businessNews[3] }
    };

    render() {
        const article = { ...this.props.businessNews[0] };
        const article2 = { ...this.props.businessNews[1] };
        const article3 = { ...this.props.businessNews[2] };
        const article4 = { ...this.props.businessNews[3] };

        const styles = {
            image: {
                backgroundImage: `url('${article.urlToImage}')`,
                width: "100%",
                height: "40vh",
                display: "flex",
                backgroundPosition: "50% 50%",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat"
            }
        };

        function getMeta(url) {
            var img = new Image();
            img.addEventListener("load", function() {
                return this.naturalHeight;
            });
        }

        return (
            <div id="home-sidebar">
                <div id="sidebar-title">
                    <h3>BUSINESS</h3>
                </div>
                <div id="sidebar-main">
                    <div id="sidebar-main-top">
                        <div style={styles.image} />
                        <p>{Utils.getFormattedDate(article.publishedAt)}</p>
                        <h4>{article.title}</h4>
                        <p>{article.description}</p>
                        <button>
                            <h4>READ MORE</h4>
                        </button>
                    </div>
                    <div id="sidebar-main-bottom">
                        <div id="sidebar-main-top-item">
                            <p>{`${Utils.getFormattedDate(
                                article2.publishedAt
                            )} / By ${article2.author}`}</p>
                            <h4>{article2.title}</h4>
                        </div>
                        <div id="sidebar-main-top-item">
                            <p>{`${Utils.getFormattedDate(
                                article3.publishedAt
                            )} / By ${article3.author}`}</p>
                            <h4>{article3.title}</h4>
                        </div>
                        <div id="sidebar-main-top-item">
                            <p>{`${Utils.getFormattedDate(
                                article4.publishedAt
                            )} / By ${article4.author}`}</p>
                            <h4>{article4.title}</h4>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default HomeSideBar;
