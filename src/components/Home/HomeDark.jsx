import React from "react";
import Utils from "../Utils";
import "../../sass/Home/HomeDark.scss";

function HomeDark(props) {
    const article = { ...props.sportsNews[0] };
    const article2 = { ...props.sportsNews[1] };
    const article3 = { ...props.sportsNews[2] };

    const styles = {
        advert: {
            backgroundImage: `url('https://picsum.photos/200/400')`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat"
        },
        image: {
            backgroundImage: `url('${article.urlToImage}')`,
            width: "100%",
            backgroundPosition: "50% 50%",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat"
        },

        image2: {
            backgroundImage: `url('${article2.urlToImage}')`,
            width: "100%",
            backgroundPosition: "50% 50%",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat"
        },
        image3: {
            backgroundImage: `url('${article3.urlToImage}')`,
            width: "100%",
            backgroundPosition: "50% 50%",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat"
        }
    };
    return (
        <React.Fragment>
            <div id="home-dark">
                <div style={styles.advert} id="dark-advert">
                    <h1>ADVERT SPOT</h1>
                </div>
                <div id="dark-title">
                    <h3>SPORTS</h3>
                </div>
                <div id="home-dark-item">
                    <div style={styles.image} id="home-dark-item-image" />
                    <p>{Utils.getFormattedDate(article.publishedAt)}</p>
                    <h4>{article.title}</h4>
                </div>
                <div id="home-dark-item">
                    <div style={styles.image2} id="home-dark-item-image" />
                    <p>{Utils.getFormattedDate(article2.publishedAt)}</p>
                    <h4>{article2.title}</h4>
                </div>
                <div id="home-dark-item">
                    <div style={styles.image3} id="home-dark-item-image" />
                    <p>{Utils.getFormattedDate(article3.publishedAt)}</p>
                    <h4>{article3.title}</h4>
                </div>
            </div>
        </React.Fragment>
    );
}

export default HomeDark;
