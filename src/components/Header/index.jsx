import React, { Component } from 'react'
import { Layout } from 'antd';
import {  NavLink } from 'react-router-dom'
import './index.css'
import 'antd/dist/antd.css'

const { Header} = Layout

export default class MyHeader extends Component {
    shouldComponentUpdate(){
        console.log('!!!')
        return true
    }
    render() {
        // const pathName=window.location.pathname
        return (
            <Layout >
                <Header className="header" style={{height:'100px', backgroundColor:'rgb(231, 230, 230)',textAlign:'center'}}>
                    {/* <Menu theme="dark" mode="horizontal" defaultSelectedKeys={pathName.indexOf('/dataDisplay')>-1 ?['2']:['1']} >
                        <Menu.Item key="1"><NavLink to='/userManage'>用户管理</NavLink></Menu.Item>
                        <Menu.Item key="2"><NavLink to='/dataDisplay'>数据展示</NavLink></Menu.Item>
                    </Menu>                     */}               
                    <div style={{height:'15px'}}>   </div>
                    <NavLink activeClassName='current'  className='navLink' to='/userManage'>用户管理</NavLink>
                    <NavLink activeClassName='current'  className='navLink' to='/dataDisplay'>数据展示</NavLink>
                </Header>                
            </Layout>
            // <div className='active_header'>
            //     <div style={{height:'30px'}}>   </div>
            //     <div style={{marginTop:'20px'}}>                    
            //         <NavLink activeClassName='current'  className='navLink' to='/userManage'>用户管理</NavLink>
            //         <NavLink activeClassName='current'  className='navLink' to='/dataDisplay'>数据展示</NavLink>
            //     </div>
            // </div>
        )
    }
}
