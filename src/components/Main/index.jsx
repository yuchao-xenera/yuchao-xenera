import React, { Component } from 'react'
import {Layout, Breadcrumb } from 'antd';
import {Route,Switch} from 'react-router-dom'
import UserAdd from '../../pages/UserAdd'
import UserList from '../../pages/UserList'
import FristList from '../../pages/FristList'
export default class Main extends Component {
    render() {
        const { Content } = Layout;
        return (
            <>
                <Layout style={{ padding: '0 24px 24px' }}>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>List</Breadcrumb.Item>
                    <Breadcrumb.Item>App</Breadcrumb.Item>
                    </Breadcrumb>
                    <Content>
                        <Switch>
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
