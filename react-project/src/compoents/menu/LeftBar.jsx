import React, { Component } from 'react'

import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { resetLeftKeyAction } from '../../redux/actions/leftBar'
const { Sider } = Layout;

const UserListKey = "1"
const AddUserKey = "2"
const DataMenuKey = "3"

class LeftBar extends Component {

    state = {
        selectedKeys: [UserListKey],
        selectedKeysData: [DataMenuKey] //数据展示，默认就1个TAb(“菜单1”)
    }

    onClick = (e) => {
        this.props.resetLeftKey(e.key)
        console.log("点击tab的key:",e.key);
        //只有点击用户管理的Tab，才给selectedKeys赋值
        if(e.key !== DataMenuKey ){
            this.setState({
                selectedKeys: [e.key]
            });
        }
        
    }

    /**
     * 刷新页面，重新设置leftBar的选中状态
     */
    componentDidMount() {
        console.log('leftBar componentDidMount');
        this.resetMenuSelectedKeys();
    }

    /**
     * 设置leftBar的选中状态（根据路由设置的）
     */
    resetMenuSelectedKeys() {
        const pathname = this.props.location.pathname;
        console.log("@devil-router", pathname);
        if (pathname === "/userList") {
            this.setState({
                selectedKeys: [UserListKey]
            });
        }
        if (pathname === "/addUser") {
            this.setState({
                selectedKeys: [AddUserKey]
            });
        }
        this.props.history.push(pathname)
    }

    generateMenu = (key) => {

        console.log("@@-->haderKey:",this.props.headerKey,",left-skey:",this.state.selectedKeys,",left-key2:",this.state.selectedKeysData);

        if (key === "1") {
            return (
                <>
                    <Menu.Item key={UserListKey} icon={<UserOutlined />}>
                        <Link to='/userList'>用户一览</Link>
                    </Menu.Item>
                    <Menu.Item key={AddUserKey} icon={<LaptopOutlined />}>
                        <Link to='/addUser'>用户添加</Link>
                    </Menu.Item>
                </>
            )
        } else {

            return (
                <>
                    <Menu.Item key={DataMenuKey} icon={<NotificationOutlined />}>
                        <Link to='/dataMenu'>菜单1</Link>
                    </Menu.Item>
                </>
            )
        }
        
    }

    render() {

        return (
            <Sider width={200} className="site-layout-background">
                <Menu
                    mode="inline"
                    onClick={this.onClick}
                    selectedKeys={this.props.headerKey === "1" ? this.state.selectedKeys:this.state.selectedKeysData}
                    style={{ height: '100%', borderRight: 0 }}
                >
                    {this.generateMenu(this.props.headerKey)}

                </Menu>
            </Sider>
        )
    }
}

function mapStateToProps(state) {
    return {
        headerKey: state.headerKey,
        leftKey: state.leftKey
    }
}

function mapDispachToProps(dispach) {
    return {
        resetLeftKey: (value) => { dispach(resetLeftKeyAction(value)) },
    }
}

export default withRouter(connect(mapStateToProps, mapDispachToProps)(LeftBar))
