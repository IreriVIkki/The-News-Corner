import React from "react";
import FashionItem from "./FashionItem";
import Utils from "../Utils";
import "../../sass/Home/HomeFashion.scss";

function HomeFashion(props) {
    const topNews = { ...props.fashionNews[0] };

    const getAuthor = name => {
        if (name && name.startsWith("http")) {
            return name.slice(name.lastIndexOf("/") + 1);
        } else {
            return name;
        }
    };
    const styles = {
        imgTop: {
            backgroundImage: `url(${topNews.urlToImage})`,
            width: "100%",
            height: "50vh",
            display: "flex",
            backgroundPosition: "50% 50%",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat"
        }
    };

    return (
        <div id="fashion">
            <div id="fashion-title">
                <h3>Fashion</h3>
            </div>
            <div id="fashion-images">
                <div id="fashion-images-left">
                    <div id="fashion-images-left-top">
                        <div style={styles.imgTop}>
                            <div id="fashion-images-left-top-details">
                                <div>
                                    <p id="fashion-date">
                                        {Utils.getFormattedDate(
                                            topNews.publishedAt
                                        )}
                                    </p>
                                    <p id="fashion-author">
                                        By: {getAuthor(topNews.author)}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="fashion-images-left-bottom">
                        <h4>{topNews.title}</h4>
                        <p>{topNews.description}</p>
                        <button>
                            <h4>READ MORE</h4>
                        </button>
                    </div>
                </div>
                <div className="seperator-line-vertical" />
                <div id="fashion-items-right">
                    <FashionItem
                        article={props.fashionNews[1]}
                        id="fashion-item"
                    />

                    <FashionItem
                        article={props.fashionNews[2]}
                        id="fashion-item"
                    />

                    <FashionItem
                        article={props.fashionNews[3]}
                        id="fashion-item"
                    />

                    <FashionItem
                        article={props.fashionNews[4]}
                        id="fashion-item"
                    />
                </div>
            </div>
            <div id="fashion-advert">
                <div>
                    <h1>ADVERTISMENT SPOT</h1>
                </div>
            </div>
        </div>
    );
}

export default HomeFashion;
