import React, { Component } from 'react'
import AppLayout from './main/AppLayout'
import { Switch, Route } from "react-router-dom";
import routes from "../config/routes";

export default class Home extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <AppLayout>
                        {
                            routes.map(
                                routeObj => <Route key={routeObj.path} exact {...routeObj} />
                            )
                        }
                    </AppLayout>
                </Switch>
            </div>
        )
    }
}
