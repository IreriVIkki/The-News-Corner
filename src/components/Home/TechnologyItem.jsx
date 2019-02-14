import React, { Component } from "react";
import Utils from "../Utils";
import "../../sass/Home/TechnologyItem.scss";

export class TechnologyItem extends Component {
    render() {
        const { item } = this.props;
        const imageBg = {
            backgroundImage: `url('${item.urlToImage}')`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat"
        };
        return (
            <div id="tech-item-container">
                <div id="tech-item-image" style={imageBg} />
                <div id="tech-item-title">
                    <p id="date">{Utils.getFormattedDate(item.publishedAt)}</p>
                    <p>{`By: ${
                        item.author == null ? item.source.id : item.author
                    }`}</p>
                    <h5>{item.title}</h5>
                </div>
            </div>
        );
    }
}

export default TechnologyItem;
