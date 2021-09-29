import React, { Component } from 'react'

import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import {resetLeftKeyAction} from '../../redux/actions/leftBar'
const { Sider } = Layout;

class LeftBar extends Component {

    onClick=(e)=>{
        this.props.resetLeftKey(e.key)
    }

    componentDidUpdate(){
        console.log("left didUpate",this.props.keyValue,this.props.temp);
        
    }

    generateMenu = (key) => {
        if (key === "1") {
            return (
                <>
                    <Menu.Item key="1" icon={<UserOutlined />}>
                        <Link to='/userList'>用户一览</Link>
                    </Menu.Item>
                    <Menu.Item key="2" icon={<LaptopOutlined />}>
                        <Link to='/addUser'>用户添加</Link>
                    </Menu.Item>
                </>
            )
        } else {

            return (
                <>
                    <Menu.Item key="1" icon={<NotificationOutlined />}>
                        <Link to='/dataMenu'>菜单1</Link>
                    </Menu.Item>
                </>
            )
        }

    }

    render() {
        console.log('left Bar render...');
        return (
            <Sider width={200} className="site-layout-background">
                <Menu
                    mode="inline"
                    onClick={this.onClick}
                    defaultOpenKeys={['sub1']}
                    style={{ height: '100%', borderRight: 0 }}
                >
                    {this.generateMenu(this.props.keyValue)}

                </Menu>
            </Sider>
        )
    }
}

function mapStateToProps(state) {
    return {
        keyValue: state.key,
        temp: state.temp
    }
}

function mapDispachToProps(dispach) {
    return {
        resetLeftKey:(value)=>{dispach(resetLeftKeyAction(value))},
    }
}

export default withRouter(connect(mapStateToProps, mapDispachToProps)(LeftBar))
