import React, { Component } from 'react'
import {Layout } from 'antd';
import {Route,Switch,Redirect} from 'react-router-dom'
import UserAdd from '../../pages/UserAdd'
import UserList from '../../pages/UserList'
import FristList from '../../pages/FristList'
export default class Main extends Component {
    render() {
        const { Content } = Layout;
        return (
            <>
                <Layout style={{ padding: '0 24px 24px' }}>
                    <Content>
                        <Switch>
                            <Redirect path="/" to="/user/userList" exact></Redirect>
                            <Redirect path="/user" to="/user/userList" exact></Redirect>
                            <Redirect path="/data" to="/data/menu1" exact></Redirect>
                            <Route path="/user/userList"component={UserList}/>
                            <Route path="/user/addUser" component={UserAdd}/>
                            <Route path="/data/menu1" component={FristList}/>
                        </Switch>
                    </Content>
                </Layout>
            </>
        )
    }
}
