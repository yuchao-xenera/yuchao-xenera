import React, { Component } from "react";
import "antd/dist/antd.css";


import Home from "./compoents/Home";

import store from './redux/store';
import { Provider } from 'react-redux'

export default class App extends Component {
    render() {
        return (
            <div>
                <Provider store={store}>
                    <Home />
                </Provider>
            </div>

        )

    }

}
