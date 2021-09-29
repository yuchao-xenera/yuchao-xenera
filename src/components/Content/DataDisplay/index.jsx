import React, { Component } from 'react'
import { Layout, Menu  } from 'antd';
import { NavLink,Route,Switch,Redirect } from 'react-router-dom'
import '../UserManage/index.css'
import Menu1 from './components/index'

const {  Content, Sider } = Layout
export default class UserManage extends Component {
    render() {
        return (   
            <Layout>
                <Sider width={250} style={{backgroundColor:'gray'}}>
                    <Menu
                    mode="inline"
                    defaultSelectedKeys={['1']}                    
                    className='div_menu'
                    >
                        <Menu.Item  key="1"><NavLink to='/dataDisplay/show'>菜单1</NavLink></Menu.Item>
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
                            <Route path='/dataDisplay/show' component={Menu1}/>
                            <Redirect to='/dataDisplay/show'/>
                        </Switch> 
                    </Content>
                </Layout>
            </Layout>
        )
    }
}
