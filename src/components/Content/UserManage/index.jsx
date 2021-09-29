import React, { Component } from 'react'
import { Layout, Menu  } from 'antd';
import { NavLink,Route,Switch,Redirect } from 'react-router-dom'
import './index.css'
import Show from './components/Show'
import Add from './components/Add'

const {  Content, Sider } = Layout
export default class UserManage extends Component {
    render() {
        return ( 
            <Layout>
                <Sider width={200} >
                    <Menu
                    mode="inline"
                    defaultSelectedKeys={window.location.pathname.indexOf('/userManage/add')>-1 ?['2']:['1']}
                    defaultOpenKeys={['sub1']}
                    style={{ height: '100%', borderRight: 0 }}
                    >
                        <Menu.Item  key="1"><NavLink to='/userManage/show'>用户一览</NavLink></Menu.Item>
                        <Menu.Item  key="2"><NavLink to='/userManage/add'>用户添加</NavLink></Menu.Item>
                    </Menu>
                </Sider>
                <Layout style={{ padding: '0 24px 24px' }}>                    
                    <Content
                        className="site-layout-background"
                        style={{
                        padding: 24,
                        margin: 0,
                        minHeight: 280,
                        }}
                    >
                        <Switch>
                            <Route path='/userManage/show' component={Show}/>
                            <Route path='/userManage/add' component={Add}/>
                            <Redirect to='/userManage/show'/>
                        </Switch> 
                    </Content>
                </Layout>
            </Layout>
        )
    }
}