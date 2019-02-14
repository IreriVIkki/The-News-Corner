import React from "react";
import Utils from "../Utils";
import "../../sass/Home/FashionItem.scss";

function FashionItem(props) {
    const article = { ...props.article };

    const getAuthor = name =>
        (name &&
            name.startsWith("http") &&
            name.slice(name.lastIndexOf("/") + 1)) ||
        name;

    const image = {
        backgroundImage: `url(${article.urlToImage})`,
        width: "100px",
        height: "100px",
        overflow: "hidden",
        display: "flex",
        backgroundPosition: "50% 50%",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        flexDirection: "column",
        justifyContent: "flex-end",
        alignSelf: "auto"
    };

    return (
        <div id="fashion-item">
            <div id="fashion-item-image" style={image} />
            <div id="fashion-item-details">
                <p id="fashion-item-details-date">
                    {Utils.getFormattedDate(article.publishedAt)}
                </p>
                <p>
                    {`
                By: ${getAuthor(article.author)}`}
                </p>
                <h5>{article.title}</h5>
            </div>
        </div>
    );
}

export default FashionItem;
