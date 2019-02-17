import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "../sass/NavBar.scss";

export class NavBar extends Component {
    render() {
        return (
            <div id="nav">
                <nav>
                    <NavLink to="/" id="nav-item">
                        <h4>HOME</h4>
                    </NavLink>
                    <NavLink to="/videos" id="nav-item">
                        <h4>VIDEOS</h4>
                    </NavLink>
                    <NavLink to="/shop" id="nav-item">
                        <h4>SHOP</h4>
                    </NavLink>
                    <NavLink to="/blog-posts" id="nav-item">
                        <h4>BLOG POSTS</h4>
                    </NavLink>
                    <NavLink to="/galery" id="nav-item">
                        <h4>GALERY</h4>
                    </NavLink>
                    <NavLink to="/reviews" id="nav-item">
                        <h4>REVIEWS</h4>
                    </NavLink>
                    <NavLink to="/celebrity" id="nav-item">
                        <h4>CELEBRITY</h4>
                    </NavLink>
                </nav>
                <div id="nav-details" style={{ display: "none" }}>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Saepe, architecto!
                    </p>
                    <form>
                        <input type="text" />
                        <button type="submit">Search</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default NavBar;
