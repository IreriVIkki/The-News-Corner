import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.scss";
import { Home } from "./components/Home";
import Videos from "./components/VideosComponent";
import Error from "./components/Error";
import Shop from "./components/ShopComponent";
import Blog from "./components/BlogComponent";
import Galery from "./components/GaleryComponent";

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <Switch>
                        <Route path="/" component={Home} exact />
                        <Route path="/videos" component={Videos} />
                        <Route path="/shop" component={Shop} />
                        <Route path="/galery" component={Galery} />
                        <Route path="/blog-posts" component={Blog} />
                        <Route component={Error} />
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
