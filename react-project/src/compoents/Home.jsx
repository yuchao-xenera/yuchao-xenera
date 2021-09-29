import React, { Component } from 'react'
import AppLayout from './main/AppLayout'
import { Switch, Route, Redirect } from "react-router-dom";
import routes from "../config/routes";

export default class Home extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <AppLayout>
                        {
                            routes.map(
                                routeObj => <Route key={routeObj.path} {...routeObj} />
                            )
                        }
                    </AppLayout>

                    <Redirect to="/userList" />
                </Switch>
            </div>
        )
    }
}
