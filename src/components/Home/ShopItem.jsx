import React from "react";
import "../../sass/Home/ShopItem.scss";
// import Cart from "../assets/cart.svg";

function ShopItem(props) {
    // console.log("cloth", props.cloth);
    const { clothes } = props;
    return (
        <div id="home-shop">
            <div id="shop-title">
                <h3>LATEST PRODUCTS</h3>
            </div>
            <div id="shop-items">
                {clothes.map((cloth, index) => {
                    return (
                        <div key={index} id="shop-item">
                            <figure id="shop-item-figure">
                                <div id="shop-item-images">
                                    {cloth.images.map((image, index) => {
                                        return (
                                            <div
                                                key={index}
                                                id="shop-item-image"
                                            >
                                                <img
                                                    src={image}
                                                    alt={cloth.name}
                                                />
                                            </div>
                                        );
                                    })}
                                </div>
                            </figure>
                            <h4>{cloth.name}</h4>
                            <p>
                                <span>{cloth.offerPrice}</span>
                                <span>{cloth.price}</span>
                            </p>
                            <button>
                                {/* <Cart /> */}
                                <span>ADD TO CART</span>
                            </button>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default ShopItem;
