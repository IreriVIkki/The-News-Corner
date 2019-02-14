import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.scss";
import { Home } from "./components/Home/Home";

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <Switch>
                        <Route path="/" component={Home} exact />
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
