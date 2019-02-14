import React from "react";
import "../../sass/Home/RandomPost.scss";

export default function RandomPost(props) {
    const newsItem = { ...props.article };

    const styles = {
        imgBox: {
            height: "100%",
            width: "100%",
            backgroundImage: `url(${newsItem.urlToImage})`,
            backgroundPosition: "50% 50%",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            alignSelf: "auto"
        }
    };
    return (
        <div id="img-box" style={styles.imgBox}>
            <h4>{newsItem.title}</h4>
        </div>
    );
}
