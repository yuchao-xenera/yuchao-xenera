import React, { Component } from 'react'
import { Layout, Menu } from 'antd';
import {  NavLink } from 'react-router-dom'
import './index.css'
import 'antd/dist/antd.css'


const { Header} = Layout

export default class MyHeader extends Component {
    render() {
        const pathName=window.location.pathname
        return (
            <Layout >
                <Header className="header" >
                    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={pathName.indexOf('/dataDisplay')>-1 ?['2']:['1']} style={{textAlign:'center'}}>
                        <Menu.Item key="1"><NavLink to='/userManage'>用户管理</NavLink></Menu.Item>
                        <Menu.Item key="2"><NavLink to='/dataDisplay'>数据展示</NavLink></Menu.Item>
                    </Menu>
                </Header>                
            </Layout>
        )
    }
}
